// Toggle Dark Mode
document.querySelector(".toggle-theme").addEventListener("click", () => {
  const html = document.documentElement;
  const theme = html.getAttribute("data-theme");
  html.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
});

// Menu Mobile Toggle
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});
