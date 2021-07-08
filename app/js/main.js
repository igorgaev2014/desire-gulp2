$(function () {

  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });

  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open');
  });

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $('.contact-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10
  });

  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow right"></button>'
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });

})
/*
const header__btn = document.querySelector('.header__btn');
const rightside_menu = document.querySelector('.rightside-menu');
const rightside_menu_close = document.querySelector('.rightside-menu__close');

header__btn.addEventListener('click', () => {
    rightside_menu.classList.remove('rightside-menu--close');
});

rightside_menu_close.addEventListener('click', () => {
    rightside_menu.classList.add('rightside-menu--close');
});*/