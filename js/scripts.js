const darkMode=document.querySelector("#dark-mode");
const contrast=document.querySelector("#dark-menu");
const letraDark=document.querySelector("#letra-dark");


function toggleDarkMode(){
if (!darkMode.classList.contains("dark-mode")){
    darkMode.classList.add("dark-mode");
    document.querySelector("p").classList.add("letra-dark");
    document.querySelector("footer").classList.add("letra-dark");
    document.querySelector("#sobre-menu").classList.add("letra-dark");
    document.querySelector("#home-menu").classList.add("letra-dark");
    document.querySelector("#dark-menu").classList.add("letra-dark");
    document.querySelector("#font-menu").classList.add("letra-dark");
}else{
    darkMode.classList.remove("dark-mode");
    document.querySelector("p").classList.remove("letra-dark");
    document.querySelector("footer").classList.remove("letra-dark");
    document.querySelector("#sobre-menu").classList.remove("letra-dark");
    document.querySelector("#home-menu").classList.remove("letra-dark");
    document.querySelector("#dark-menu").classList.remove("letra-dark");
    document.querySelector("#font-menu").classList.remove("letra-dark");
    
    }
}

contrast.addEventListener("click", toggleDarkMode());

