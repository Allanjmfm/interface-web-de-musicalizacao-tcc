const darkMode=document.querySelector("#dark-mode");
const contrast=document.querySelector("#dark-menu");

function toggleDarkMode(){
    darkMode.classList.toggle("dark-mode");
    document.querySelector("#sobre-menu").classList.toggle("letra-dark");
    document.querySelector("#home-menu").classList.toggle("letra-dark");
    document.querySelector("#dark-menu").classList.toggle("letra-dark");
    document.querySelector("#font-menu").classList.toggle("letra-dark");
}

contrast.addEventListener("click", toggleDarkMode());

