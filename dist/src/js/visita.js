$(document).ready( function(){
  console.log("cargando");
    $(".scroll").click( function(){
      console.log('working');
        $('html, body').animate({
            "scrollTop": $('.compra-sin-registro').offset().top
        }, 700);
    });

});
