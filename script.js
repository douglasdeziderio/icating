const main = document.querySelector("body");
const home = document.querySelector("section");
const titulo = document.querySelector(".titulo");
const bthtml = document.querySelector(".html");
const btcss = document.querySelector(".css");
const btjs = document.querySelector(".js");
const imagem = document.querySelector(".imagem");
const lottieUm = document.querySelector(".lottie-1");
const lottieDois = document.querySelector(".lottie-2");
const lottieTres = document.querySelector(".lottie-3");
const div = document.querySelector(".total");
const title = document.querySelector(".titulo");
const menu = document.querySelector(".ham");
const textUm = document.querySelector(".menu-menu-1");
const textDois = document.querySelector(".menu-menu-2");
const textTres = document.querySelector(".menu-menu-3");
const copy = document.querySelector(".copy");

swal("Site funcional somente em desktop!");

menu.addEventListener('click', ()=>{
    textUm.classList.toggle('hidden');
    textDois.classList.toggle('hidden');
    textTres.classList.toggle('hidden');
});

bthtml.addEventListener('click', ()=>{
    alterarContexto('padrao-html')
})

btcss.addEventListener('click', ()=>{
    alterarContexto('padrao-css')
})

btjs.addEventListener('click', ()=>{
    alterarContexto('padrao-js')
})

function alterarContexto(contexto){
    main.setAttribute('data-contexto', contexto);
    home.setAttribute('data-contexto', contexto);
    switch (contexto) {
        case 'padrao-html':
            titulo.innerHTML = `HyperText Markup Language, o famoso HTML, é utilizado pelos desenvolvedores para fazer toda as estrutura de um site. Eu diria que aqui é a parte mais importante do seu código, simplesmente porque sem ele, não existe site.`
            imagem.style.display = "none";
            lottieUm.style.display = "flex";
            lottieDois.style.display = "none";
            lottieTres.style.display = "none";
            div.style.background = "var(--cor-html-bg)";
            title.style.color = "black";
            copy.style.color = "black";
        break;

        case 'padrao-css':
            titulo.innerHTML = `Cascading Style Sheets, conhecido como CSS, tem objetivo de estilziar seu site. Isso é: aqui você decide cores e estilos, se algo vai ficar no centro ou no canto, espaçamento entre os elementos, entre outros fatores bem legais.`
            imagem.style.display = "none";
            lottieUm.style.display = "none";
            lottieDois.style.display = "flex";
            lottieTres.style.display = "none";
            div.style.background = "var(--cor-css-bg)";
            title.style.color = "white";
            copy.style.color = "white";
        break;

        case 'padrao-js':
            titulo.innerHTML = `Javascript não é usado somente para desenvolver site, mas também para programação. Diria eu que é a linguagem mais legal e fascinante das três, porque ele simplesmente traz vida ao site. Por exemplo, os botôes deste site que você consegue mudar o texto e a imagem é devido ao JS.`
            imagem.style.display = "none";
            lottieUm.style.display = "none";
            lottieDois.style.display = "none";
            lottieTres.style.display = "flex";
            div.style.background = "var(--cor-js-bg)";
            title.style.color = "black";
            copy.style.color = "black";
        break;
    
        default:
            break;
    }
}

