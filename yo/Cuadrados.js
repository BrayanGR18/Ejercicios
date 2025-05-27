var texto="CALCULADORA DE NUMEROS PRIMOS";

document.querySelector("h1").textContent=texto;

var cuadro1= document.querySelector("#Cuadrado1");
var cuadro2= document.querySelector("#Cuadrado2");
var cuadro3= document.querySelector("#Cuadrado3");
var cuadro4= document.querySelector("#Cuadrado4");
var body = document.querySelector("#body");

cuadro1.addEventListener("mouseover",function(){
   // alert("OJO");
    body.style.background = "#f3f3f3";
});
cuadro1.addEventListener("mouseout",function(){
    //alert("OJO");
    body.style.background = "#09090aea";


});

cuadro2.addEventListener("mouseover",function(){
    //alert("OJOO");
    body.style.background = "#3000b4";
});
cuadro2.addEventListener("mouseout",function(){
    //alert("OJO");
    body.style.background = "#09090aea";
});



cuadro3.addEventListener("mouseover",function(){
    //alert("OJOOO");
    body.style.background = "#06b400";
});
cuadro3.addEventListener("mouseout",function(){
    //alert("OJO");
    body.style.background = "#09090aea";
});


cuadro4.addEventListener("mouseover",function(){
    //alert("OJOOOOOOOOOOOO");
    body.style.background = "#b40054";
});
cuadro4.addEventListener("mouseout",function(){
    //alert("OJO");
    body.style.background = "#09090aea";
});


/*
mouseover ->Raton sobre
mouseout  ->Raton fuera

mousedown
mouseup
*/
