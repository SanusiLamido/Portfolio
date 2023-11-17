let Homebutton = document.getElementById("home")
let MenuItem = document.getElementById(".navigation a")
let menuActive = false;

Homebutton.addEventListener("click", ()=>{
    if (!menuActive){
        MenuItem.style.transform = "translate(150px,0)";
    }
});