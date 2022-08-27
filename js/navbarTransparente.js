window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 ) {
    
    document.getElementById("BarraNavegacion").style.background = rgba(61,69,58,1);
  } else {
    document.getElementById("BarraNavegacion").style.background = rgba(61,69,58,1);
  }

}