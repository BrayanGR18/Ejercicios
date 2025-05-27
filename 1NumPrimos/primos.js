var texto="CALCULAR NUMEROS PRIMOS";

document.querySelector("h1").textContent=texto;

var boton=document.querySelector("#calcular");
var start=document.querySelector("#num1");
var end=document.querySelector("#num2");
var numerosPrimos = [];

boton.addEventListener("click",function(){
 
  var start=Number(document.querySelector("#num1").value)
  var end=Number(document.querySelector("#num2").value)

for (; start < end; start++) {


  if (primo(start)) {
    numerosPrimos.push(start);
  }
  
}
document.querySelector("#res").textContent=numerosPrimos; 

});

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

var boton=document.querySelector("#Limpiar");
boton.addEventListener("click",limpiar);

  function limpiar() {
    document.getElementById('num1').value="";
    //document.getElementById("calcular1").value="";
    document.getElementById('num2').value=""; 
  
      document.getElementById('res').textContent="";
  }