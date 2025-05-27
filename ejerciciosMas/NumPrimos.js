var texto="CALCULADORA DE NUMEROS PRIMOS";

document.querySelector("h1").textContent=texto;

var boton=document.querySelector("#Calcular");
var I=document.querySelector("#Inicio");
var F=document.querySelector("#Final");
var numerosPrimos = [];

boton.addEventListener("click",function(){

  var I=Number(document.querySelector("#Inicio").value)
  var F=Number(document.querySelector("#Final").value)

  for (; I < F; I++){
    if(NumPrimo(I)){
        numerosPrimos.push(I);
    }
  }
  document.querySelector("#res").textContent=numerosPrimos;
});

console.log(numerosPrimos);

function NumPrimo(num){
    for (var i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
return num !== 1;
}
