document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animation une seule fois
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  projects.forEach(project => {
    observer.observe(project);
  });
});
