$( document ).ready(function() {
  var scroll;
document.getElementById("hamburger").addEventListener ("click", mobilMenu, false);
 function mobilMenu(){
   console.log("clicked");

   $("ul.nav-menu").toggleClass("visible");
 }

 var data = $("a data-slidesjs-item").data;
 console.log(data);

/*Función Filtros vinos*/
 $('ul.filtros__wrap__list li a').click(function() {
     var textoFiltro = $(this).text().toLowerCase().replace(/\s/g,"-");

     $(".sugerencias").hide();
     $('.filtros__wrap__maridaje :checkbox').attr("disabled", false).prop("checked", false ).parent().css("opacity", 1);

    $("ul.filtros__wrap__list li a").removeClass("filterActive");
    $(this).addClass("filterActive");

        $('ul.productos li').fadeOut();
         $('ul.productos li').each(function()
         {
             if(!$(this).hasClass(textoFiltro))
             {
                 $(this).fadeOut('normal').addClass('hidden');
             }
             else
             {
                 $(this).fadeIn('slow').removeClass('hidden');
             }
         });

       return false;
     });

     /*Función filtros maridaje*/

     $('.filtros__wrap__maridaje :checkbox').click(function () {
       /*indice: para registrar si no hay checkboxes marcados*/
       var indice = 0;
      /*No hay sugerencias hechas para cada filtro así que lo escondemos*/
       $(".sugerencias").hide();
       /*Escondemos productos catalogo ya que la función lo que hará será mostrar solo los que estan seleccionados*/
       $('.productos > li').hide();
       /*Desactivamos los filtros */
       $("ul.filtros__wrap__list li a").removeClass("filterActive");

              /*1. Cada elemento de productos que coincida el atributo rel con el del checkbox se va a mostrar
                2. Como seguro que hay un checkbox marcado, marcamos el incice como 0*/
                $('.filtros__wrap__maridaje :checkbox:checked').each(function () {
                    $('.productos > li.' + $(this).attr('rel')).show();
                    console.log($(this).attr('rel'));
                    indice = 1;
                });
                /*Para todos los checkboxes miramos si hay algun checkbox marcado, en caso que así sea, incrementamos el número del índice*/
                $('.filtros__wrap__maridaje :checkbox').each(function(){
                  if( $(this).attr('checked') == false) {
                    indice = indice + 1;
                  }
                  });
                  /*Si el indice está a 0 mostramos las sugerencias y todos los productos*/
                  if (indice == 0){
                    $(".sugerencias").show();
                    $('.productos > li').show();
                    }
      /*FILTROS MARIDAJE ENDS*/
        });

            function desplegaMaridaje(){
              $(".filtros__wrap__maridaje").addClass("vinos-visible");
              /*maridage not selected*/
              $(".wrap1 h3").addClass("not-selected");
              $(".wrap2 h3").addClass("selected");
              /*Aumenta heigt filtros*/
              $(".filtros").addClass("filtrosMaridaje--visible");
            }
            function desplegaVinos(){
              /*Desplega filtro vinos*/
              $(".filtros__wrap__list").addClass("vinos-visible");
              /*maridage not selected*/
              $(".wrap2 h3").addClass("not-selected");
              $(".wrap1 h3").addClass("selected");
              /*Aumenta heigt filtros*/
              $(".filtros").addClass("filtrosVinos--visible");
            }
            function deseleccionaMaridaje(){
              $(".filtros__wrap__maridaje").removeClass("vinos-visible");
                $(".filtros").removeClass("filtrosMaridaje--visible");
              $(".filtros").addClass("filtrosVinos--visible");
              $(".wrap2 h3").removeClass("selected");
            }
            function deseleccionaVinos(){
              $(".filtros__wrap__list").removeClass("vinos-visible");
              $(".filtros").removeClass("filtrosVinos--visible");
              $(".filtros").addClass("filtrosMaridaje--visible");
              $(".wrap1 h3").removeClass("selected");
            }


  $(window).on("resize load", function() {
        var width= $(window).width();

            if  (width < 1024) {

                    $('.wrap1 h3').click(function () {
                      if($(".filtros__wrap__maridaje").hasClass("vinos-visible")){
                        deseleccionaMaridaje();
                      }
                      /*Check if banner is visible*/
                      if ($(".banner-vinos").css("display") == "none"){
                          desplegaVinos();
                      } else {
                          /*Esconde vinos*/
                          $(".banner-vinos").css("display", "none");
                          desplegaVinos();
                      }
                    });

                    $('.wrap2 h3').click(function () {
                    /*Checkeamos si filtro vinos está desplegado*/
                    if($(".filtros__wrap__list").hasClass("vinos-visible")){
                      deseleccionaVinos();
                      $("ul.filtros__wrap__list li a").removeClass("filterActive");
                    }
                    if ($(".banner-vinos").css("display") == "none"){
                      desplegaMaridaje();
                      $("ul.filtros__wrap__list li a").removeClass("filterActive");
                    }
                    else {
                      console.log("DISPLAYED-MARIDAJE");
                      /*Esconde vinos*/
                      $(".banner-vinos").css("display", "none");
                      desplegaMaridaje();
                      $("ul.filtros__wrap__list li a").removeClass("filterActive");
                    }
                });
          }
          else{
                /*Si la ventana es mayor que 1024px elimina las propiedades añadidas para que cuadre la maquetación*/
                $(".wrap2 h3, wrap1 h3").removeClass("not-selected");$("ul.filtros__wrap__list li a").removeClass("filterActive");
                $("ul.filtros__wrap__list li a").removeClass("filterActive");
                $("filtros h3").css("opacity", "1");
                $(".filtros").removeClass("filtrosVinos--visible filtrosMaridaje--visible");
                $(".filtros__wrap__list").removeClass("vinos-visible");
                $(".banner-vinos").css("display", "flex");
                $(".filtros__wrap__maridaje").removeClass("vinos-visible");
              }
      /*FUNCTION FILTROS MOBILE RESIZE ENDS*/
        });

          var i=0;
        /*FUNCTION ADD ITEMS TO CART*/
        $(".mas").click(function(e){
              i++;
              console.log(i);
              event.preventDefault(e);
              $(".contenedor-popup").show(200);
              setTimeout(function(){
                $(".contenedor-popup").hide(200); }, 3000);
        });
        /*FUNCTION ADD ITEMS TO CART ENDS*/
        /*FUNCTION VISIT BOOKING*/
        $(".boton-primario").click(function(e){
              event.preventDefault(e);
              $(".contenedor-popup").show(200);
              setTimeout(function(){
                $(".contenedor-popup").hide(200); }, 9000);
        });
        /*FUNCTION VISIT BOOKING ENDS*/
  /*DOCUMENT REDY ENDS*/
    });


/* $(window).scroll(function(){
   var desktop = 1023;
   var wWidth=$(window).width();

   if (wWidth > desktop){
   scrollTop =$(window).scrollTop();
   bannerT = $(".banner").scrollTop();
   bannerH = $(".banner").height();
   console.log(scrollTop);
   var pixels = scrollTop / 70;

   if(scrollTop < 100 ){
   }
 }
});*/
