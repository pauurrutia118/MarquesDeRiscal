$(document).ready( function(){
  console.log("cargando");
    $(".scroll").click( function(){
      console.log('working');
      console.log($(this));
      var data = $(this).data("visita");
      console.log(data);

      switch (data) {

        case 1:  $('.formulario-compra option[value="marques"]').prop("selected", true);

                      break;
        case 2:
                $('.formulario-compra option[value="salado"]').prop("selected", true);

                      break;
        case 3:      $('.formulario-compra option[value="finca"]').prop("selected", true);

                      break;
        case 4: $('.formulario-compra option[value="inspiración"]').prop("selected", true);

                      break;
        case 5: $('.formulario-compra option[value="seleccion"]').prop("selected", true);

      }

        $('html, body').animate({
            "scrollTop": $('.compra-sin-registro').offset().top
        }, 700);
    });


});
