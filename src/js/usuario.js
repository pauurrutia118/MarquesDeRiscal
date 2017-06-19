$(document).ready(function() {
  /*Formularios de acceso*/
$(".userTabs h2").click(function(){

  if($(this).hasClass("active")){
console.log("click");
  }
  else{
  if($(".userTabs h2.inicio").hasClass("active")){
    console.log("Working");
    $(".userTabs h2.inicio").toggleClass("active");
    console.log("Working");
    $(".userWrap div.inicio").hide(300);
    $(".userTabs h2.registro").toggleClass("active");
    $(".userWrap div.registro").show(300);
}
  else{
    $(".userTabs h2.registro").toggleClass("active");
    $(".userWrap div.registro").hide(300);
    $(".userTabs h2.inicio").toggleClass("active");
    $(".userWrap div.inicio").show(300);
  }
}
});
$(".userTabs h2").click(function(){
  if($(this).hasClass("active")){

  }else{
  if($("h2.pedidos").hasClass("active")){

    $(".userTabs h2.pedidos").toggleClass("active");
    console.log("Working");
    $("div.pedidos").hide(300);
    $(".userTabs h2.cuenta").toggleClass("active");
    $("div.cuenta").show(300);
  }else{
    $(".userTabs h2.cuenta").toggleClass("active");
    $("div.cuenta").hide(300);
    $(".userTabs h2.pedidos").toggleClass("active");
    $("div.pedidos").show(300);
  }
}
});


function Acceder(e){
  event.preventDefault(e);
  console.log("acceso");
 window.location.href="usuario.html";

}


/*Cuenta*/
function opencuenta(evt, cityName) {
    // Declarar variables
    var i, tabcontent, tablinks;

    // Elementos class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}

/*Pedidos*/
$('.toggle').click(function(e) {
  event.preventDefault(e);
    if ( $(this).siblings().is(':visible') ) {
      console.log("VISIBLE");
        $(this).siblings().slideUp();
    } else {
      console.log("Else");
        $(this).parent().parent().find('.inner').slideUp();
        $(this).siblings().slideDown();
    }
    $(this).slideDown();
});

$('.spanregistro').hover(
  function() {
      $(".ventajas").css({"display":"block"});
    }, function() {
      $(".ventajas").css({"display":"none"});
    }
  );

/*
// BOTON TOP//
//cuando el usuario hace scroll 20px desde el top del documento, mostrar botón top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// cuando clickas en el botón, va hacia arriba del doc
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}


$ ('#nueva-direccion').click(function(event){
  $('.direccion_02').fadeIn();
});

$ ('#nueva-tarjeta').click(function(event){
  $('.tarjeta_02').fadeIn();
});

$ ('#eliminar-tarjeta').click(function(event){
  $('.tarjeta_02').fadeOut();
});
*/

});
