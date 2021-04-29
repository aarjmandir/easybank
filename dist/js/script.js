// Variables
const btnHamburger = document.querySelector('#btnHamburger');
const mainHeader = document.querySelector('#mainHeader');
const overlay = document.querySelector('#overlay');
const headerLinks = document.querySelector('#headerLinks');
const body = document.querySelector('body');

// Event Listeners
eventListener();

function eventListener() {

    // Open|Close Hamburger menu 
    btnHamburger.addEventListener('click', function () {
        headerLinks.classList.add('has-fade');
        const headerHasFadeElements = document.querySelectorAll('#mainHeader .has-fade');
        if (mainHeader.classList.contains('open')) { // close hamburger menu
            mainHeader.classList.remove('open');
            body.classList.remove('no-scroll');
            headerLinks.classList.add('hide-for-mobile');
            headerHasFadeElements.forEach(element => {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        } else { // open hamburger menu
            mainHeader.classList.add('open');
            body.classList.add('no-scroll');
            headerLinks.classList.remove('hide-for-mobile');
            headerHasFadeElements.forEach(element => {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
        }
    });

}