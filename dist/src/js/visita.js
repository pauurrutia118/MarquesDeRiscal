$(document).ready(function (){
    $("#scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#adultos").offset().top
        }, 700);
    });

});
