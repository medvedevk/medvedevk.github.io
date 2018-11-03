(function () {
  var nav = document.querySelector('.main-nav');
  var toggle = nav.querySelector('.toggle');

  nav.classList.remove('main-nav--no-js');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('main-nav--opened');
  });
})();
