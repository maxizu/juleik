const toggle = document.getElementById("toggle-navigation");
const menu = document.getElementById("menu-primary");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.querySelector(".screen-reader-text").textContent = open ? "Menü schließen" : "Menü öffnen";
});
