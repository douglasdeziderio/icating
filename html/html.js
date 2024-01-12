const menu = document.querySelector(".ham");
const textUm = document.querySelector(".menu-menu-1");
const textDois = document.querySelector(".menu-menu-2");
const textTres = document.querySelector(".menu-menu-3");
const copy = document.querySelector(".copy");


menu.addEventListener('click', ()=>{
    textUm.classList.toggle('hidden');
    textDois.classList.toggle('hidden');
    textTres.classList.toggle('hidden');
});