// get local storage
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);

    // theme image
    document.querySelector("#theme-toggle img").src = `/assets/svgs/${storedTheme}_mode.svg`;

    // text
    // document.querySelector("#theme-toggle").textContent = `${storedTheme}`;
}

// event listener on change
document.querySelector('#theme-toggle').addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");

    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    // update theme image
    document.querySelector("#theme-toggle img").src = `/assets/svgs/${targetTheme}_mode.svg`;

    // update text
    // document.querySelector("#theme-toggle").textContent = `${targetTheme}`;
     

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
});