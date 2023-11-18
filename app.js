const hamburguer = document.querySelector(".btn-mobile");
const navList = document.querySelector(".nav-list");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navList.classList.toggle('active');
})