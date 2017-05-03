$( document ).ready(function() {
  var scroll;
document.getElementById("hamburger").addEventListener ("click", mobilMenu, false);
 function mobilMenu(){
   console.log("clicked");

   $("ul.nav-menu").toggleClass("visible");
 }

 var data = $("a data-slidesjs-item").data;
 console.log(data);

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


     switch (textoFiltro){
       case "blancos", "rosados":
                    $('.filtros__wrap__maridaje').find(':checkbox').each(function(){
                      categoria = $(this).data('id');
                      if (categoria == "tintos") {
                        $(this).attr("disabled", true).parent().css("opacity", 0.3);
                        console.log($(this).parent());
                      }
                    });
                    break;

        case "tintos":
                        $('.filtros__wrap__maridaje').find(':checkbox').each(function(){
                         categoria = $(this).data('id');
                        if (categoria == "blancos") {
                         $(this).attr("disabled", true).parent().css("opacity", 0.3);
                           console.log($(this).parent());
                           }
                         });
                        break;
            }
     return false;
     });

     $('.filtros__wrap__maridaje :checkbox').click(function () {
       var indice = 0;

       $(".sugerencias").hide();
       $('.productos > li').hide();

                $('.filtros__wrap__maridaje :checkbox:checked').each(function () {

                    $('.productos > li.' + $(this).attr('rel')).show();
                    console.log($(this).attr('rel'));
                    indice = 1;
                });
            $('.filtros__wrap__maridaje :checkbox').each(function(){
              if( $(this).attr('checked') == false) {
                    indice = indice + 1;
                }
              });
              if (indice == 0){
                $(".sugerencias").show();
                $('.productos > li').show();

              }

            });
     $(".cta").click(function(){
       $(".filtros").toggleClass("filtros--visible");
        console.log("clicat");
     });
     $(".close").click(function(){
       $(".filtros").removeClass("filtros--visible");
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
});
