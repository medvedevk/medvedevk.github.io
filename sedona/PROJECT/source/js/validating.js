'use strict';
(function () {
  var btnSend = document.querySelector('.general-form__send');
  var modalGood = document.querySelector('.form-success');
  var modalBad = document.querySelector('.form-error');
  var formResponse = document.querySelector('.response-form');
  var badClose = document.querySelector('.form-error__btn');
  var goodClose = document.querySelector('.form-success__btn');

  var ENTER_CODE = 13;

  btnSend.addEventListener('click', function(evt) {
    if (formResponse.checkValidity() == false) {
      openMe(modalBad);
    } else {
      openMe(modalGood);
    }
  });

  badClose.addEventListener('keydown', function() {
    if (evt.keyCode === ENTER_CODE) {
      closeMe(modalBad);
    }
  });

  goodClose.addEventListener('keydown', function() {
    if (evt.keyCode === ENTER_CODE) {
      closeMe(modalGood);
    }
  })

  badClose.addEventListener('click', function(evt) {
    closeMe(modalBad);
  });

  goodClose.addEventListener('click', function() {
    closeMe(modalGood);
  });

  function closeMe(wind) {
    wind.style.display = 'none';
  }

  function openMe(wind) {
    wind.style.display = 'flex';
  }
})();
