let menu = document.getElementById("menu");
let list = document.getElementById("list");
let container = document.getElementById("navigation");

menu.addEventListener("click", ()=>{
    list.classList.toggle('navigation-ul2');
    container.classList.toggle('navigation2');
});
