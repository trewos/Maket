/* Натискання на burger-menu */

const menuClick = document.querySelector('.menu__container');
const menuList = document.querySelector('.menu__list');
const menuToggle = document.querySelector('.menu__toggle');
menuClick.addEventListener('click', function() {
  menuToggle.classList.toggle('active'); /* Додає або видаляє 'active' до / з елемента 'menuToggle' */
  menuList.classList.toggle('active'); /* Додає або видаляє 'active' до / з елемента 'menuList' */
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
  $('.content__category-auto, .content__category-happliances, .content__category-mobile, .content__category-pc, .content__category-clothes, .content__category-house').hover(function() {
    $(this).find('ul').addClass('active');
  }, function() {
    $(this).find('ul').removeClass('active');
  });
});

/* При натисканні на посилання '#header__contacts-feedback' відкриває вікно 'feedback' з fade ефектом */

const link = document.querySelector('#header__contacts-feedback')
const feedback = document.querySelector('#feedback')
link.addEventListener('click', function(){
  event.preventDefault();
  feedback.classList.add('show' , 'fade-in');
  setTimeout(() => {
    feedback.classList.remove('fade-in');
  }, 280);
});

/* При натисканні на посилання .feedback__close-btn' закриває вікно 'feedback' з fade ефектом */

const hideLinks = document.querySelectorAll('.feedback__close-btn');
hideLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    feedback.classList.add('fade-out');

    setTimeout(() => {
      feedback.classList.remove('show');
      feedback.classList.remove('fade-out');
    }, 280);
  });
});
