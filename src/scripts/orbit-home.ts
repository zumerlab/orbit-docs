const root = document.querySelector<HTMLElement>('#orbit-home');
if (root) {
  const count = root.querySelector<HTMLInputElement>('#hero-count')!;
  const output = root.querySelector<HTMLOutputElement>('#hero-count-out')!;
  const points = root.querySelector<HTMLElement>('#hero-points')!;
  const art = root.querySelector<HTMLElement>('#hero-art')!;
  const gyro = root.querySelector<HTMLElement>('#hero-gyro')!;
  const motion = root.querySelector<HTMLButtonElement>('#hero-motion')!;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let animation: Animation | undefined;
  let motionEnabled = !reducedMotion.matches;
  let inView = false;
  let pageActive = true;

  count.addEventListener('input', () => {
    const total = Number(count.value);
    while (points.children.length > total) points.lastElementChild?.remove();
    while (points.children.length < total) {
      const satellite = document.createElement('div'); satellite.className = 'satellite';
      const capsule = document.createElement('div'); capsule.className = 'capsule hero-point';
      capsule.textContent = String(points.children.length + 1);
      satellite.append(capsule); points.append(satellite);
    }
    output.value = count.value;
    art.setAttribute('aria-label', `An Orbit composition with ${total} satellites`);
  });

  function updateMotion() {
    const shouldPlay = motionEnabled && inView && pageActive && !document.hidden;
    if (shouldPlay && !animation) {
      // Tilt the separate depth layers without recomputing Orbit's layout each frame.
      animation = gyro.animate([
        'rotateX(-25deg) rotateY(-30deg)',
        'rotateX(-25deg) rotateY(30deg)',
        'rotateX(25deg) rotateY(30deg)',
        'rotateX(25deg) rotateY(-30deg)',
        'rotateX(-25deg) rotateY(-30deg)',
      ].map(transform => ({ transform, easing: 'ease-in-out' })), {
        duration: 18000,
        iterations: Infinity,
      });
    }
    if (shouldPlay) animation?.play();
    else animation?.pause();
    motion.setAttribute('aria-pressed', String(motionEnabled));
    motion.setAttribute('aria-label', motionEnabled ? 'Pause the Orbit composition' : 'Animate the Orbit composition');
    motion.querySelector('span')!.textContent = motionEnabled ? 'Pause' : 'Animate';
  }
  motion.hidden = false;
  motion.addEventListener('click', () => {
    motionEnabled = !motionEnabled;
    updateMotion();
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) motionEnabled = false;
    updateMotion();
  });
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    updateMotion();
  }).observe(art);
  document.addEventListener('visibilitychange', updateMotion);
  window.addEventListener('pagehide', () => { pageActive = false; updateMotion(); });
  window.addEventListener('pageshow', () => { pageActive = true; updateMotion(); });
  updateMotion();

  root.querySelectorAll<HTMLButtonElement>('[data-orbit-recipe]').forEach(button => {
    button.addEventListener('click', () => document.dispatchEvent(new CustomEvent('orbit:recipe', {detail: {name: button.dataset.orbitRecipe}})));
  });
}
