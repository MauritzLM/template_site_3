// Navigation toggle

const navigation = document.querySelector("#cs-navigation");
const menuToggle = document.querySelector(".cs-toggle");


menuToggle.addEventListener("click", () => {
     menuToggle.classList.toggle("cs-active");
     navigation.classList.toggle("cs-active");
});