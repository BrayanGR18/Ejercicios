
var texto="CALCULADORA DE NUMEROS PRIMOS";

document.querySelector("h1").textContent=texto;

var boton1 = document.querySelector("#Calcular2");
var boton2 = document.querySelector("#Calcular3");
var Peso=document.querySelector("#pesos");
var Dolar=document.querySelector("#dolares");
var botonborrar= document.querySelector("#Borrar");
var botonborrar2= document.querySelector("#Borrar2");
var botonborrar3= document.querySelector("#Borrar3");

boton1.addEventListener("click",function(){
    //alert("HOla");
    var Peso=Number(document.querySelector("#pesos").value)
    var PrecioPeso=0.050;
    var Calc=CalcDollar(Peso,PrecioPeso);
    document.querySelector("#res2").textContent=Calc;

});
    function CalcDollar(Peso,PrecioPeso){
        var Calc=Peso*PrecioPeso;
        return Calc;
    }

boton2.addEventListener("click",function(){
    //alert("Cola");
    var Dolar=Number(document.querySelector("#dolares").value)
    var PrecioDolar=19.87;
    var Calc2=CalcPeso(Dolar,PrecioDolar);
    document.querySelector("#res3").textContent=Calc2;
});
    function CalcPeso(Dolar,PrecioDolar){
    var Calc2=PrecioDolar*Dolar;
    return Calc2;
}

botonborrar.addEventListener("click",function(){
    alert("asdas");
})

botonborrar2.addEventListener("click",function(){
    alert("asdas");
})

botonborrar3.addEventListener("click",function(){
    alert("asdas");
})