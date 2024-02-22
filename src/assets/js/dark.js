// get local storage
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
}

// event listener on change
document.querySelector('#theme-toggle').addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");

    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    // update theme image src*

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
});