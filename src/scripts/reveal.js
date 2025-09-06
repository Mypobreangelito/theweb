export function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) e.target.classList.add('visible');
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}
