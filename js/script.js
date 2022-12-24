// DropDown Menu
const item1 = document.querySelector('.drop1');
const item2 = document.querySelector('.drop2');

    item1.addEventListener('click', () =>{
        item1.classList.toggle('ligado');
    });

    item2.addEventListener('click', () =>{
        item2.classList.toggle('ligado');
    });
// DropDown Menu fim

//  Menu hamburgue
const hamburguer = document.querySelector(".hamburguer");
const escureto = document.querySelector(".escureto");
const menunav = document.querySelector(".menu-nav");

function ativaa() {
    hamburguer.classList.toggle("ativo");
    menunav.classList.toggle("ativo");
    escureto.classList.toggle("ativo");
    
}

hamburguer.addEventListener('click', ativaa)