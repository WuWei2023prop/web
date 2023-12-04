// JavaScript externo para manejar el menú desplegable
const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
