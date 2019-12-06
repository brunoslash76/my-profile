const welcomeSection = document.querySelector('#welcome-section');
const closeModalX = document.querySelector('#close-modal-x');
const closeModalHere = document.querySelector('#close-modal-here');
const countDown = document.querySelector('#count-down');
const navMenu = document.querySelector('#nav-menu');
const menuToggler = document.querySelector('#menu-toggler');


function closeModal() {
    if (!welcomeSection.classList.contains('hide-this-section-please')) {
        welcomeSection.classList.add('hide-this-section-please');
        document.querySelector('body').style.overflow = 'auto';
    }
}

function handleCloseModal(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

function toggleSideMenu(e) {
    


    const isHidden = navMenu.classList.contains('hide');

    console.log(isHidden)
    if (isHidden) {
        navMenu.classList.remove('hide');
        navMenu.classList.add('show');
    } else {
        navMenu.classList.remove('show');
        navMenu.classList.add('hide');
    }
    
}

function hideSideMenu (e) {
    console.log(e);

    const isShown = navMenu.classList.contains('show');
    if (e.target.nodeName === 'BUTTON') return;
    if (isShown) {
        navMenu.classList.remove('show');
        navMenu.classList.add('hide');
    }

}

let hostInterval;
let c = 5;

function countDownTik() {
    hostInterval = setInterval(() => {
        countDown.innerHTML = '';
        countDown.innerHTML = c--;
        if (c < 0) {
            clearInterval(hostInterval);
            closeModal();
            console.log('aqui')
        }
    }, 1000)
}

closeModalX.addEventListener('click', closeModal);
closeModalHere.addEventListener('click', closeModal);
window.addEventListener('keyup', handleCloseModal)
document.querySelector('body').addEventListener('click', hideSideMenu);
menuToggler.addEventListener('click', toggleSideMenu);



countDownTik();
