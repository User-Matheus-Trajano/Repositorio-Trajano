document.addEventListener("DOMContentLoaded", function (){

    const btnHamburguer = document.getElementById("btn-hamburguer");
    const menu = document.querySelector(".menu-display");

    btnHamburguer.addEventListener("click", function() {
    menu.classList.add("ativo");
    document.body.classList.add("no-scroll");
    });

    const btnFechar = document.getElementById("btn-fechar");
    
    btnFechar.addEventListener("click", function() {
        menu.classList.remove("ativo");
        document.body.classList.remove("no-scroll");
    });
});