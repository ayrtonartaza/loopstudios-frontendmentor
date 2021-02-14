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
