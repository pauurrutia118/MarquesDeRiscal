
$(document).ready(function () {
  overAge = function () {
    $('#age-verify').addClass('hidden');
  }

  underAge = function () {
    $('#age-verify').addClass('under');
  }

  goBack = function () {
      window.history.back();
  }
});
