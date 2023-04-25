/* Clicking on burger-menu */

const menuClick = document.querySelector('.menu__container');
const menuList = document.querySelector('.menu__list');
const menuToggle = document.querySelector('.menu__toggle');
menuClick.addEventListener('click', function() {
  menuToggle.classList.toggle('active'); /* Adds or removes 'active' from/to the 'menuToggle' element */
  menuList.classList.toggle('active'); /* Adds or removes 'active' from/to the 'menuList' element */
});

/* Setting-up slider */

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

/* Executes a function when subcategories appear on hovering over an element */

$(document).ready(function() {
  $('.content__category-auto, .content__category-happliances, .content__category-mobile, .content__category-pc, .content__category-clothes, .content__category-house').hover(function() {
    $(this).find('ul').addClass('active');
  }, function() {
    $(this).find('ul').removeClass('active');
  });
});

/* On clicking the '#header__contacts-feedback' link, opens the 'feedback' window with a fade effect */

const link = document.querySelector('#header__contacts-feedback')
const feedback = document.querySelector('#feedback')
link.addEventListener('click', function(){
  event.preventDefault();
  feedback.classList.add('show' , 'fade-in');
  setTimeout(() => {
    feedback.classList.remove('fade-in');
  }, 280);
});

/* On clicking the '.feedback__close-btn' link, closes the 'feedback' window with a fade effect */

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

/* Checking for field completeness and input correctness */

const feedbackName = document.getElementById('feedback__name');
const feedbackPhone = document.getElementById('feedback__phone');
const feedbackEmail = document.getElementById('feedback__email');

function validateFeedbackName() {
  const regex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]/;
  if (!regex.test(feedbackName.value.trim())) {
    feedbackName.style.border = '1px solid red';
    feedbackName.style.boxShadow = 'inset 0 0 6px red';
    return false;
  } else {
    feedbackName.style.border = '';
    feedbackName.style.boxShadow = '';
    return true;
  }
}

function validateFeedbackPhone() {
  const regex = /^\+380[0-9]{9}/;
  if (!regex.test(feedbackPhone.value.trim())) {
    feedbackPhone.style.border = '1px solid red';
    feedbackPhone.style.boxShadow = 'inset 0 0 6px red';
    return false;
  } else {
    feedbackPhone.style.border = '';
    feedbackPhone.style.boxShadow = '';
    return true;
  }
}

function validateFeedbackEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(feedbackEmail.value.trim())) {
    feedbackEmail.style.border = '1px solid red';
    feedbackEmail.style.boxShadow = 'inset 0 0 6px red';
    return false;
  } else {
    feedbackEmail.style.border = '';
    feedbackEmail.style.boxShadow = '';
    return true;
  }
}

function validateForm() {
  const validName = validateFeedbackName();
  const validPhone = validateFeedbackPhone();
  const validEmail = validateFeedbackEmail();

  return validName && validPhone && validEmail;
}

document.querySelector('.feedback__submit').addEventListener('click', function(event) {
  if (!validateForm()) {
  }
});