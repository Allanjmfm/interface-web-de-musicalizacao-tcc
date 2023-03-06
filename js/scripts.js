const darkMode=document.querySelector("#dark-mode");
const contrast=document.querySelector("#dark-menu");

function toggleDarkMode(){
if (darkMode.classList.contains("dark-mode")){
    console.log("alert");
    darkMode.classList.remove("dark-mode");
}else{
    darkMode.classList.add("dark-mode");
    }
}

contrast.addEventListener("click", toggleDarkMode());