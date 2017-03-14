$( document ).ready(function() {
document.getElementById("hamburger").addEventListener ("click", mobilMenu, false);
 function mobilMenu(){
   console.log("clicked");
   $("ul.nav-menu").toggleClass("visible");
 }
 var data = $("a data-slidesjs-item").data;
 console.log(data);
});
