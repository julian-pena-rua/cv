var barraNavegacion = document.getElementsByClassName("BarraNavegacionElemento");
var i;

function funcionHamburger() {

    
    for (i = 0; i < barraNavegacion.length; i++) {
        if (barraNavegacion[i].style.left == "9999px") {
            barraNavegacion[i].style.left = "0";
        }
        else{
            barraNavegacion[i].style.left = "9999px";
        }
    }

}