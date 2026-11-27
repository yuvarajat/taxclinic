if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      entry.target.classList.add('has-entered');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px 24px 0px' });

  for (const element of document.querySelectorAll('[data-reveal]')) {
    revealOnScroll.observe(element);
  }
}
