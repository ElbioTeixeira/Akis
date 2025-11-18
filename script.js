const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
});

document.querySelectorAll(".card, .service, .testimonial").forEach(el => {
  obs.observe(el);
});