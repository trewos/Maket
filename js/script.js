const menuClick = document.querySelector('.menu__container');
const menuList = document.querySelector('.menu__list');
const menuToggle = document.querySelector('.menu__toggle');

menuClick.addEventListener('click', function(){
  menuToggle.classList.toggle('active');
  menuList.classList.toggle('active');
});

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
})
