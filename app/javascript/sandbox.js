const acordion = document.getElementsByClassName("acordion-item");
const menuBtn = document.getElementsByClassName("menu-btn");
const navBar = document.querySelector(".nav-container");

for(let i = 0; i < acordion.length ; i++){
    acordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}


for(let i = 0; i < menuBtn.length ; i++){
    menuBtn[i].addEventListener("click", function(){
        navBar.classList.toggle("active");
    })
}