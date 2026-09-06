# Welcome to Orbit docs 📚!

This repo contains documentation source of Orbit official documentation site. The website is powered by [Starlight Astro](https://starlight.astro.build/).

👉 Checkout these links:

- **Orbit doc website:** https://zumerlab.github.io/orbit-docs
- **Orbit code repo:** https://github.com/zumerlab/orbit
- **Zumerlab repo:** https://github.com/zumerlab

## Contributors

<a href="https://github.com/zumerlab/orbit-docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zumerlab/orbit-docs" />
</a>

## Local development

Use Node.js 24 LTS (`nvm use`, from `.nvmrc`); Astro requires at least Node.js 22.12.

```sh
npm ci
npm run dev
```

Astro serves the site at `/orbit-docs/`. The homepage playground and documentation examples use the same checked-in Orbit build; no CDN is needed for Orbit itself.

## Updating Orbit

```sh
# Compile and copy the sibling Orbit checkout (requires its npm dependencies).
npm run sync:orbit
# Or choose a different checkout:
ORBIT_DIR=/path/to/orbit npm run sync:orbit
npm run check:orbit
npm run build
```

`sync:orbit` compiles the source and copies the five distributables into `src/assets/` and `public/orbit/`. The latter serves downloads and iframe previews. `public/orbit/manifest.json` records the package version, source commit, source digest and SHA-256 hash of every file. Commit the assets and manifest together when updating Orbit.

The normal build only verifies these copies; CI and fresh clones do not need a sibling repository or network access to fetch Orbit. A changed or missing asset fails the build instead of silently mixing versions. This sync does not bump versions or publish either project.

The current source build and published npm package both identify as `1.4.12`, but npm predates the hybrid runtime and ES module fixes. The manifest's source commit identifies the site build precisely. Installation docs and copied playground examples offer that build directly until a separate package release is published.
