$( document ).ready(function() {
  var scroll;
document.getElementById("hamburger").addEventListener ("click", mobilMenu, false);
 function mobilMenu(){
   console.log("clicked");
   $("ul.nav-menu").toggleClass("visible");
 }
 var data = $("a data-slidesjs-item").data;
 console.log(data);

 $('ul.filtros li a').click(function() {
     var textoFiltro = $(this).text().toLowerCase().replace(/\s/g,"-");

    $("ul.filtros li a").removeClass("filterActive");
    $(this).addClass("filterActive");

     if(textoFiltro == 'todos')
     {
        $('ul.productos li').fadeOut().fadeIn();
         $('ul.productos li.hidden').fadeIn().removeClass('hidden');
     }
     else
     {
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
     }
     return false;
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
