$(document).ready(function() {
  var vino = localStorage.getItem('vino');
  var datosVino = JSON.parse(vino);
  $('.datos-producto-cesta--nombre').html(datosVino.nombre);
  $('.datos-producto-cesta--precio').html(datosVino.precio);
  $('.cantidad').val(datosVino.cantidad);

  $('.menos-cantidad').click(function() {
    datosVino.cantidad = datosVino.cantidad - 1;
    if (datosVino.cantidad <= 0) {
      datosVino.cantidad = 0;
    }

    $('.cantidad').val(datosVino.cantidad);
    localStorage.setItem('vino', JSON.stringify(datosVino));
  });

  $('.mas-cantidad').click(function() {
    datosVino.cantidad = datosVino.cantidad + 1;

    $('.cantidad').val(datosVino.cantidad);
    localStorage.setItem('vino', JSON.stringify(datosVino));
  });
});
