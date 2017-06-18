$(document).ready(function() {

  if(typeof(Storage) !== "undefined") {
    var get = localStorage.getItem("clickcount");
    console.log(get);
        if (localStorage.clickcount) {
      $("#age-verify").css("display","none");
          console.log("Already pressed");
        }
      }


  $(".yes").click( function(){
    console.log("clicked");
    $("#age-verify").css("display","none");
    localStorage.setItem("clickcount", "1");

  });

  underAge = function () {
    $('#age-verify').addClass('under');
  }

  goBack = function () {
      window.history.back();
  }

});
