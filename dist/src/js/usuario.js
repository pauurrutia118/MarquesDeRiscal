
//FUNCIONAMIENTO DE TABS//

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


//GESTION DE DIRECCIONES Y TARJETAS//
// CREAR DIRECCION//
  $ ('#nueva-direccion').click(function(event){
    $('.direccion_02').fadeIn();

  });
  $ ('#nueva-direccion').click(function(event){
    $('#nueva-direccion').fadeOut();

  });

  // ELIMINAR DIRECCION a partir de la 2. Si solo hay una no se puede borrar//
    $ ('#eliminar-direccion').click(function(event){
      $('.direccion_02').fadeOut();

    });
// CREAR TARJETA//
  $ ('#nueva-tarjeta').click(function(event){
    $('.tarjeta_02').fadeIn();
  });

  $ ('#nueva-tarjeta').click(function(event){
    $('#nueva-tarjeta').fadeOut();

  });$ ('#nueva-tarjeta').click(function(event){
    $('#eliminar-tarjeta01').fadeIn();
  });


// ELIMINAR TARJETA a partir de la 2. Si solo hay una no se puede borrar//
  $ ('#eliminar-tarjeta02').click(function(event){
    $('.tarjeta_02').fadeOut();
  });
