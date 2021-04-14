let menuToggle = document.getElementById("menu-toggle");
let pop = document.querySelector(".pop");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");

menuToggle.addEventListener("click", function (){
    pop.classList.toggle("m-hide");
});

menu.addEventListener("click", ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "block";
})
closeBtn.addEventListener("click", ()=>{
    menu.style.display = "block";
    closeBtn.style.display = "none";
})