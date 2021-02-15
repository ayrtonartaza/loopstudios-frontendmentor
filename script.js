let menu =document.getElementById('icon__menu__close');
menu.addEventListener('click',cerrarHeader);
function cerrarHeader (){
    let header = document.getElementById('header');
    header.classList.toggle("headeropen");

    let ulheader = document.getElementById('ulheader');
    ulheader.classList.toggle("ulopen");
    
    let main = document.getElementById('herosection');
    main.classList.toggle("main__menu__open");
    
    let menumobile = document.getElementById('icon__menu__close');
    menumobile.classList.toggle("menumobileclose");
}


const body = document.querySelector('body');
let vr = document.getElementById('man__vr');
const header = document.querySelector('header');
let textvr = document.getElementById('container__text');
window.onscroll = () => {
    if (window.scrollY > 120) {
        vr.style.marginLeft = '0px';
        textvr.style.marginRight = '0px';
    }
    if (window.scrollY > 50) {
        header.classList.add('header__sticky');
    }else{
        header.classList.remove('header__sticky')
    }
}

/* const header = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 100) {
        header.style.background = 'black';
    }
}
 */