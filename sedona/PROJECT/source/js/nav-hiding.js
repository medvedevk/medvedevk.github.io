'use strict';
(function () {
  var toggler = document.querySelector('.main-nav__toggle');
  var nav = document.querySelector('.main-nav');
  var cross = document.querySelector('.main-nav__toggle-close');
  var ham = document.querySelector('.main-nav__toggle-open');

  nav.classList.remove('main-nav--nojs');

  toggler.addEventListener('click', function() {
    if (nav.classList.contains('main-nav--open')) {
      nav.classList.remove('main-nav--open');
      nav.classList.add('main-nav--close');
      ham.style.display = 'none';
      cross.style.display = 'block';
    } else {
      nav.classList.add('main-nav--open');
      nav.classList.remove('main-nav--close');
      ham.style.display = 'block';
      cross.style.display = 'none';
    }
  });

}());
