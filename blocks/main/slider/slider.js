let right = document.querySelector(".slider__right");
let left = document.querySelector(".slider__left");
let viewDot = document.querySelectorAll(".dots__dot");
let viewSlider = document.querySelectorAll(".slider__body");
let viewSlide = 0;
let countSlider = 0;


viewDot[0].style.backgroundColor = "#FF6600";

right.addEventListener("click", () => {
    viewDot[viewSlide].style.backgroundColor = "#999999";
    viewSlider[viewSlide].style.display = 'none';
    if (viewSlide < 3 && countSlider < 3) {

        viewSlide++;
        countSlider++;
    } else {
        viewSlide = 0;
        countSlider = 0;
    }
    viewDot[viewSlide].style.backgroundColor = "#FF6600";
    viewSlider[viewSlide].style.display = 'block';
});

left.addEventListener("click", () => {
    viewDot[viewSlide].style.backgroundColor = "#999999";
    viewSlider[viewSlide].style.display = 'none';

    if (viewSlide >= 1 && countSlider >= 1) {
        viewSlide--;
        countSlider--;
    } else {
        viewSlide = 3;
        countSlider = 3;
    }
    viewDot[viewSlide].style.backgroundColor = "#FF6600";
    viewSlider[viewSlide].style.display = 'block';
});



