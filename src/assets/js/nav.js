// Navigation toggle
const navigation = document.querySelector("#cs-navigation");
const menuToggle = document.querySelector(".cs-toggle");

menuToggle.addEventListener("click", () => {
     menuToggle.classList.toggle("cs-active");
     navigation.classList.toggle("cs-active");
});


// nav scroll styles
// change color when scrolling (transparent when at the top)
document.addEventListener("DOMContentLoaded", function () {
     let scrollStart = 0;
     let offset = navigation.getBoundingClientRect();
 
     document.onscroll = function (e) {
         scrollStart = e.target.scrollingElement.scrollTop;
         if (scrollStart > offset.top) {
             navigation.style.backgroundColor = "var(--bodyBackgroundColor)";
         } else {
             navigation.style.backgroundColor = "transparent";
         }
     };
 });