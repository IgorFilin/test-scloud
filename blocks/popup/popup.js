const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup_close')
const popupContainer = document.querySelector('.popup__svg-container')
const popupScg = document.querySelector('.popup_svg')


let buttonFrees = document.getElementsByClassName("button_free");

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_active')
})

for (let i = 0; i < buttonFrees.length; i++) {
    buttonFrees[i].addEventListener('click', () => {
        popup.classList.add('popup_active')
    }, false);
}

document.addEventListener('click', function (event) {

    const close = event.target.matches('.button_free');
    const popup1 = event.target.matches('.popup');
    const cont = event.target.matches('.popup__svg-container');
    const svg = event.target.matches('.popup_svg');


    if (!close && !popup1 && !cont && !svg) {
        popup.classList.remove('popup_active')
    }

}, false)