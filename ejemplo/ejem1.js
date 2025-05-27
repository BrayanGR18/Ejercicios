var texto="HOLA CARA DE ANO";

document.querySelector("h1").textContent=texto;

var boton=document.querySelector("#sumar");
var n1=document.querySelector("#num1");
var n2=document.querySelector("#num2");

boton.addEventListener("click",function(){
    //alert(n1.value);
    //var num1=Number(n1.value);
    //var num2=Number(n2.value);
    //console.log(num1);
    var n1=Number(document.querySelector("#num1").value)
    var n2=Number(document.querySelector("#num2").value)

    var suma = sumar (n1,n2);
    document.querySelector("#res").textContent=suma; 
});

function sumar(n1,n2){
    var suma=n1+n2;
    return suma;
}

