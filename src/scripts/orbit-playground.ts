type Recipe = 'satellites' | 'arcs' | 'progress';
type CodeTab = 'html' | 'css' | 'js';
type State = {
  count: number;
  range: number;
  from: number;
  size: number;
  arc: number;
  reversed: boolean;
  progress: number;
  shape: string;
};
type Source = { html: string; css: string; js: string };
type Assets = { css: string; js: string };

const defaults = (): State => ({ count: 8, range: 360, from: 0, size: 320, arc: 40, reversed: false, progress: 63, shape: 'rounded' });
const recipes: Recipe[] = ['satellites', 'arcs', 'progress'];
const shapes = ['rounded', 'none', 'arrow', 'circle-a', 'circle-b', 'slash', 'zigzag'];
const isRecipe = (value: unknown): value is Recipe => typeof value === 'string' && recipes.includes(value as Recipe);
const orbitLicense = `MIT License

Copyright (c) 2023 - 2025 Juan Martín Muda - ZumerLab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

class OrbitPlayground extends HTMLElement {
  private state = defaults();
  private recipe: Recipe = 'satellites';
  private codeTab: CodeTab = 'html';
  private events?: AbortController;
  private assets?: Promise<Assets>;
  private markupKey = '';
  private source: Source = { html: '', css: '', js: '' };

  connectedCallback() {
    if (this.events) return;
    this.events = new AbortController();
    const { signal } = this.events;
    this.recipe = isRecipe(this.dataset.recipe) ? this.dataset.recipe : 'satellites';
    this.addEventListener('input', this.onInput, { signal });
    this.addEventListener('change', this.onInput, { signal });
    this.addEventListener('click', this.onClick, { signal });
    this.addEventListener('keydown', this.onKeyDown, { signal });
    document.addEventListener('orbit:recipe', this.onRecipe as EventListener, { signal });
    this.render();
  }

  disconnectedCallback() {
    this.events?.abort();
    this.events = undefined;
  }

  private get<T extends Element>(selector: string): T {
    const element = this.querySelector<T>(selector);
    if (!element) throw new Error(`Missing playground element: ${selector}`);
    return element;
  }

  private runtimeUrl(file: string) {
    const base = this.dataset.base || '/';
    return new URL(`${base.replace(/\/$/, '')}/orbit/${file}`, location.origin).href;
  }

  private onRecipe = (event: CustomEvent<{ name?: unknown }>) => {
    const name = event.detail?.name;
    if (!isRecipe(name)) return;
    this.selectRecipe(name);
    this.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    this.get<HTMLButtonElement>(`[data-recipe-button="${name}"]`).focus({ preventScroll: true });
  };

  private onInput = (event: Event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
    const key = target.dataset.control;
    if (key === 'shape' && shapes.includes(target.value)) this.state.shape = target.value;
    else if (target instanceof HTMLInputElement && key && key in this.state) {
      const value = Math.max(Number(target.min), Math.min(Number(target.max), Number(target.value)));
      if (Number.isFinite(value)) (this.state as unknown as Record<string, number>)[key] = value;
    } else return;
    this.render();
  };

  private onClick = (event: MouseEvent) => {
    const target = event.target instanceof Element ? event.target.closest<HTMLButtonElement>('button') : null;
    if (!target || !this.contains(target)) return;
    if (isRecipe(target.dataset.recipeButton)) return this.selectRecipe(target.dataset.recipeButton);
    if (target.dataset.viewButton) return this.selectView(target.dataset.viewButton === 'code' ? 'code' : 'preview');
    if (target.dataset.codeTab) return this.selectCode(target.dataset.codeTab as CodeTab);
    switch (target.dataset.action) {
      case 'reset': {
        const initial = defaults();
        const keys: (keyof State)[] = this.recipe === 'satellites' ? ['count', 'range', 'from', 'size'] : this.recipe === 'arcs' ? ['arc', 'reversed'] : ['progress', 'shape'];
        for (const key of keys) (this.state as unknown as Record<string, unknown>)[key] = initial[key];
        this.render();
        this.feedback('Example reset.');
        break;
      }
      case 'zero': this.state.arc = 0; this.render(); break;
      case 'reorder': this.state.reversed = !this.state.reversed; this.render(); break;
      case 'copy': void this.copy(target); break;
      case 'download': void this.download(target); break;
    }
  };

  private onKeyDown = (event: KeyboardEvent) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement) || !target.dataset.codeTab) return;
    const tabs = ['html', 'css', 'js'] as const;
    const index = tabs.indexOf(target.dataset.codeTab as CodeTab);
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    this.selectCode(tabs[next]);
    this.get<HTMLButtonElement>(`[data-code-tab="${tabs[next]}"]`).focus();
  };

  private selectRecipe(recipe: Recipe) {
    this.recipe = recipe;
    this.dataset.recipe = recipe;
    this.selectView('preview');
    this.render();
  }

  private selectView(view: 'preview' | 'code') {
    this.get<HTMLElement>('.op-workspace').dataset.view = view;
    for (const button of this.querySelectorAll<HTMLButtonElement>('[data-view-button]')) button.setAttribute('aria-pressed', String(button.dataset.viewButton === view));
  }

  private selectCode(tab: CodeTab) {
    if (!['html', 'css', 'js'].includes(tab)) return;
    this.codeTab = tab;
    for (const button of this.querySelectorAll<HTMLButtonElement>('[data-code-tab]')) {
      const selected = button.dataset.codeTab === tab;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected) this.get('.op-source').setAttribute('aria-labelledby', button.id);
    }
    this.get('[data-code]').textContent = this.source[tab];
  }

  private buildSource(): Source {
    const s = this.state;
    const size = this.recipe === 'satellites' ? s.size : 280;
    const description = this.recipe === 'satellites' ? `${s.count} satellites across ${s.range} degrees` : this.recipe === 'arcs' ? `Blue arc ${s.arc} percent; pink arc 25 percent` : `Progress ${s.progress} percent`;
    let content: string;
    let value: string;
    let label: string;
    if (this.recipe === 'satellites') {
      content = `    <div class="orbit-2 guide"></div>\n    <div class="orbit-4 guide"></div>\n    <div class="orbit-6 guide example-ring${s.range < 360 ? ' fit-range' : ''}">\n${Array.from({ length: s.count }, (_, i) => `      <div class="satellite"><div class="capsule point">${i + 1}</div></div>`).join('\n')}\n    </div>`;
      value = String(s.count);
      label = 'Satellites';
    } else if (this.recipe === 'arcs') {
      const arcs = [`      <o-arc class="blue-arc" value="${s.arc}"></o-arc>`, '      <o-arc class="pink-arc" value="25"></o-arc>'];
      if (s.reversed) arcs.reverse();
      content = `    <div class="orbit-6">\n      <o-arc class="track" value="100"></o-arc>\n    </div>\n    <div class="orbit-6 example-ring">\n${arcs.join('\n')}\n    </div>`;
      value = `${s.arc + 25}%`;
      label = 'Total';
    } else {
      content = `    <div class="orbit-6 example-ring">\n      <o-progress value="${s.progress}" shape="${s.shape}"></o-progress>\n    </div>`;
      value = `${s.progress}%`;
      label = 'Complete';
    }
    const html = `<div class="bigbang orbit-example" role="img"\n     aria-label="${description}">\n  <div class="gravity-spot">\n${content}\n    <div class="orbit-0">\n      <div class="satellite at-center">\n        <div class="capsule example-center">\n          <strong>${value}</strong><span>${label}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>`;
    let css = `.orbit-example.bigbang {\n  width: min(${size}px, 100%);\n  height: auto;\n  aspect-ratio: 1;\n  container-type: inline-size;\n}\n.orbit-example > .gravity-spot {\n  --o-force: calc(100cqw * 2);\n}\n.orbit-example .satellite { border: 0; }\n.orbit-example .example-center {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  color: #90adbf;\n  font: 13px/1.2 Arial, sans-serif;\n  white-space: nowrap;\n}\n.orbit-example .example-center strong {\n  color: #e7f3fa;\n  font: 400 48px/1 Arial, sans-serif;\n}\n`;
    if (this.recipe === 'satellites') {
      css += `.orbit-example .example-ring {\n  --o-range: ${s.range}deg;\n  --o-from: ${s.from}deg;\n}\n.orbit-example .guide { border: 1px solid #294654; }\n.orbit-example .point {\n  width: ${s.count > 24 ? 6 : 30}px;\n  height: ${s.count > 24 ? 6 : 30}px;\n  border-radius: 50%;\n  background: #3da9fc;\n  color: #051016;\n  font: 400 ${s.count > 24 ? 0 : 12}px Arial, sans-serif;\n}\n.orbit-example .satellite:first-child .point {\n  background: #ef4565;\n}`;
    } else if (this.recipe === 'arcs') {
      css += `.orbit-example o-arc {\n  --o-stroke: none;\n  --o-gap: 2;\n}\n.orbit-example .track { --o-fill: #1e3644; --o-gap: 0; }\n.orbit-example .blue-arc { --o-fill: #3da9fc; }\n.orbit-example .pink-arc { --o-fill: #ef4565; }`;
    } else {
      css += `.orbit-example .example-ring {\n  --o-range: 270deg;\n  --o-from: 225deg;\n}\n.orbit-example o-progress {\n  --o-fill: #3da9fc;\n  --o-stroke: none;\n  --o-back-fill: #1e3644;\n  --o-back-stroke: none;\n  --o-size-ratio: 1.6;\n}`;
    }
    const js = `// Load Orbit once. It handles layout and SVG updates.\nimport '${this.runtimeUrl('orbit.min.js')}';\n\n// This composition needs no additional JavaScript.\n// Change the HTML or CSS; Orbit updates automatically.\n// The exported HTML bundles this runtime for offline use.`;
    return { html, css, js };
  }

  private render() {
    this.source = this.buildSource();
    const key = `${this.recipe}:${this.recipe === 'satellites' ? this.state.count : ''}`;
    const preview = this.get<HTMLElement>('[data-preview]');
    if (this.markupKey !== key || !preview.firstElementChild) {
      preview.innerHTML = this.source.html;
      this.markupKey = key;
    } else {
      const composition = this.get<HTMLElement>('.orbit-example');
      if (this.recipe === 'satellites') {
        composition.setAttribute('aria-label', `${this.state.count} satellites across ${this.state.range} degrees`);
        this.get('.example-ring').classList.toggle('fit-range', this.state.range < 360);
      } else if (this.recipe === 'arcs') {
        composition.setAttribute('aria-label', `Blue arc ${this.state.arc} percent; pink arc 25 percent`);
        const blue = this.get('.blue-arc');
        const pink = this.get('.pink-arc');
        blue.setAttribute('value', String(this.state.arc));
        const ring = this.get('.example-ring');
        const first = this.state.reversed ? pink : blue;
        if (ring.firstElementChild !== first) ring.prepend(first);
        this.get('.example-center strong').textContent = `${this.state.arc + 25}%`;
      } else {
        composition.setAttribute('aria-label', `Progress ${this.state.progress} percent`);
        this.get('o-progress').setAttribute('value', String(this.state.progress));
        this.get('o-progress').setAttribute('shape', this.state.shape);
        this.get('.example-center strong').textContent = `${this.state.progress}%`;
      }
    }
    const style = this.get<HTMLStyleElement>('[data-preview-style]');
    if (style.textContent !== this.source.css) style.textContent = this.source.css;
    for (const button of this.querySelectorAll<HTMLButtonElement>('[data-recipe-button]')) button.setAttribute('aria-pressed', String(button.dataset.recipeButton === this.recipe));
    for (const group of this.querySelectorAll<HTMLElement>('[data-controls-for]')) group.hidden = group.dataset.controlsFor !== this.recipe;
    for (const input of this.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[data-control]')) input.value = String(this.state[input.dataset.control as keyof State]);
    const units: Record<string, string> = { range: '°', from: '°', size: ' px', arc: '%', progress: '%' };
    for (const output of this.querySelectorAll<HTMLOutputElement>('[data-output]')) {
      const key = output.dataset.output!;
      output.value = `${this.state[key as keyof State]}${units[key] || ''}`;
    }
    this.get('[data-stage-caption]').textContent = this.recipe === 'satellites' ? 'Satellites follow their order in the HTML.' : this.recipe === 'arcs' ? 'Segments stack in their HTML order.' : 'Progress uses a 270° arc.';
    this.selectCode(this.codeTab);
  }

  private feedback(message: string, error = false) {
    const status = this.get<HTMLElement>('[data-feedback]');
    status.textContent = message;
    status.dataset.error = String(error);
  }

  private loadAssets(): Promise<Assets> {
    if (!this.assets) {
      this.assets = Promise.all(['orbit.min.css', 'orbit.min.js'].map(async (file) => {
        const response = await fetch(this.runtimeUrl(file));
        if (!response.ok) throw new Error(`Could not load ${file}`);
        const source = await response.text();
        if (/^\s*<!doctype html/i.test(source)) throw new Error(`Missing runtime asset: ${file}`);
        return source;
      })).then(([css, js]) => ({ css, js })).catch((error) => {
        this.assets = undefined;
        throw error;
      });
    }
    return this.assets;
  }

  private async standalone(source: Source, recipe: Recipe): Promise<string> {
    const assets = await this.loadAssets();
    const style = assets.css.replace(/<\/style/gi, '<\\/style');
    const runtime = assets.js.replace(/<\/script/gi, '<\\/script');
    return `<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Orbit — ${recipe}</title>\n  <!-- Orbit runtime included: this file also works offline.\n\n${orbitLicense}\n  -->\n  <style>\n${style}\n  </style>\n  <style>\n* { box-sizing: border-box; }\nbody { margin: 0; min-height: 100svh; display: grid; place-items: center; padding: 40px; background: #051016; color: #e7f3fa; }\nmain { display: flex; justify-content: center; width: 100%; }\n${source.css}\n  </style>\n</head>\n<body>\n<main>\n${source.html}\n</main>\n<script>\n${runtime}\n<\/script>\n</body>\n</html>\n`;
  }

  private async copy(button: HTMLButtonElement) {
    if (!navigator.clipboard) {
      this.feedback('Clipboard is unavailable here. Use Download HTML instead.', true);
      return;
    }
    const source = { ...this.source };
    const recipe = this.recipe;
    button.disabled = true;
    this.feedback('Preparing your complete HTML…');
    try {
      // Promise-backed ClipboardItems preserve the user gesture in Safari while assets load.
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard.write) {
        const blob = this.standalone(source, recipe).then((html) => new Blob([html], { type: 'text/plain' }));
        // A browser can reject clipboard permission before it consumes the blob promise.
        // Keep a later asset failure handled while preserving rejection for ClipboardItem.
        void blob.catch(() => {});
        await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })]);
      } else {
        await navigator.clipboard.writeText(await this.standalone(source, recipe));
      }
      this.feedback('Copied complete HTML. Save it as an .html file to open it.');
    } catch {
      this.feedback('Could not copy. Try Download HTML, or allow clipboard access.', true);
    } finally { button.disabled = false; }
  }

  private async download(button: HTMLButtonElement) {
    const source = { ...this.source };
    const recipe = this.recipe;
    button.disabled = true;
    this.feedback('Preparing your complete HTML…');
    try {
      const html = await this.standalone(source, recipe);
      const url = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = `orbit-${recipe}.html`;
      link.hidden = true;
      this.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      this.feedback(`Download ready: orbit-${recipe}.html.`);
    } catch {
      this.feedback('Could not load Orbit for export. Check your connection and try again.', true);
    } finally { button.disabled = false; }
  }
}

if (!customElements.get('orbit-playground')) customElements.define('orbit-playground', OrbitPlayground);
