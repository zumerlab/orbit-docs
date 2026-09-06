#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = join(root, 'public/orbit/manifest.json');
const files = ['orbit.css', 'orbit.min.css', 'orbit.js', 'orbit.min.js', 'orbit.mjs'];
const destinations = ['src/assets', 'public/orbit'];
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function check() {
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  if (manifest.package !== '@zumer/orbit' || !manifest.source?.sha256) throw new Error('Invalid Orbit manifest. Run npm run sync:orbit.');
  for (const name of files) {
    const expected = manifest.files[name];
    if (!expected?.sha256) throw new Error(`Missing manifest entry: ${name}`);
    for (const destination of destinations) {
      const path = join(root, destination, name);
      const bytes = await readFile(path);
      if (bytes.length !== expected.bytes || hash(bytes) !== expected.sha256) {
        throw new Error(`${destination}/${name} differs from the recorded Orbit build. Run npm run sync:orbit.`);
      }
    }
  }
  console.log(`Orbit ${manifest.version} (${manifest.source.commit?.slice(0, 12) || manifest.source.sha256.slice(0, 12)}): all ${files.length} distributables match the recorded SHA-256 hashes in both locations.`);
}

async function sourceFiles(directory, prefix = '') {
  const result = [];
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = join(prefix, item.name);
    if (item.isDirectory()) result.push(...await sourceFiles(join(directory, item.name), path));
    else if (item.isFile()) result.push(path);
  }
  return result.sort();
}

async function sync() {
  const source = resolve(process.env.ORBIT_DIR || join(root, '../orbit'));
  const pkg = JSON.parse(await readFile(join(source, 'package.json'), 'utf8'));
  if (pkg.name !== '@zumer/orbit') throw new Error(`${source} is not an @zumer/orbit checkout.`);
  // Compile source first: never silently copy stale dist files from a checkout.
  execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'compile'], { cwd: source, stdio: 'inherit' });
  const inputs = ['package.json', 'package-lock.json', 'esbuild.config.mjs', ...(await sourceFiles(join(source, 'src'))).map((name) => `src/${name}`)];
  const sourceHash = createHash('sha256');
  for (const name of inputs.sort()) sourceHash.update(name).update('\0').update(await readFile(join(source, name))).update('\0');
  let commit = null;
  let modified = null;
  try {
    commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: source, encoding: 'utf8' }).trim();
    modified = Boolean(execFileSync('git', ['status', '--porcelain', '--untracked-files=no'], { cwd: source, encoding: 'utf8' }).trim());
  } catch { /* Source archives still have a reproducible content digest. */ }
  const contents = await Promise.all(files.map(async (name) => [name, await readFile(join(source, 'dist', name))]));
  const manifest = {
    package: pkg.name,
    version: pkg.version,
    source: { repository: 'https://github.com/zumerlab/orbit', commit, modified, sha256: sourceHash.digest('hex') },
    files: Object.fromEntries(contents.map(([name, bytes]) => [name, { bytes: bytes.length, sha256: hash(bytes) }])),
  };
  for (const destination of destinations) {
    await mkdir(join(root, destination), { recursive: true });
    for (const [name, bytes] of contents) await writeFile(join(root, destination, name), bytes);
  }
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  await check();
}

try {
  if (process.argv.slice(2).some((arg) => arg !== '--check')) throw new Error('Usage: node scripts/sync-orbit.mjs [--check]');
  await (process.argv.includes('--check') ? check() : sync());
} catch (error) {
  console.error(`Orbit assets: ${error.message}`);
  process.exitCode = 1;
}
