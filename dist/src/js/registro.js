$ ('#iniciar-sesión').click(function(event){
  $ ('.formulario-inicio-sesión').fadeOut();
  $ ('.compra-sin-registro').fadeOut();
  $ ('.usuario-registrado').fadeIn();
});

$ ('.botón-tarjeta').click(function(event){
  $('.desplegable-tarjeta').fadeToggle();
});

$ ('.botón-transferencia').click(function(event){
  $('.desplegable-transferencia').fadeToggle();
});
