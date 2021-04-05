$(function () {
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick__btn slick-next"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick__btn slick-prev"><i class="fas fa-arrow-left"></i></button>',
    });
});

let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('open_burger');
})

document.addEventListener('scroll', () => {
    burger.classList.add('scroll');
})