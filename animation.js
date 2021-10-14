// MENU BURGER
const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sideBar');

toggleButton.addEventListener('click', show);

function show(){
    sideBar.classList.toggle('active');
}


// RETIRER SIDE BARRE EN CLIQUANT SUR LE CONTENU

const accueil = document.querySelector('.accueil');

accueil.addEventListener('clik', () => {
    sideBar.classList.remove('active');
})

 