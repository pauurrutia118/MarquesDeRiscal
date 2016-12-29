$( document ).ready(function() {
document.getElementById("hamburger").addEventListener ("click", mobilMenu, false);
 function mobilMenu(){
   console.log("clicked");
   $("ul.nav-menu").toggleClass("visible");
 }
});
