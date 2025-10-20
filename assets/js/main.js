// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Intersection Observer for reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Dynamic year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
