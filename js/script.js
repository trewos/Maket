/* Натискання на burger-menu */
const menuClick = document.querySelector('.menu__container');
const menuList = document.querySelector('.menu__list');
const menuToggle = document.querySelector('.menu__toggle');
menuClick.addEventListener('click', function(){
  menuToggle.classList.toggle('active');
  menuList.classList.toggle('active');
});
/* Налаштування slider */
$(document).ready(function() {
  $('.slider__container').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
});
/* Виконує функцію, коли при наведенні на елемент, з'являються підкатегорії. */
$(document).ready(function() {
  $('.content__category__auto, .content__category__happliances, .content__category__mobile, .content__category__pc, .content__category__clothes, .content__category__house').hover(function() {
    $(this).find('ul').addClass('active');
  }, function() {
    $(this).find('ul').removeClass('active');
  });
});
