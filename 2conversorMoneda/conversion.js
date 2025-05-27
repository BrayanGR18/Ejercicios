var texto="Conversión de moneda";
document.querySelector("h1").textContent=texto;

var boton=document.querySelector("#convertir");

var calcular=document.querySelector("#radios");
        calcular.addEventListener("change", function (event){
         var radio = (event.target.id);
       
    var n1=Number(document.querySelector("#money").value);

    switch (radio) {
        
        case "calcular": 
                document.querySelector("#res").textContent=calcular_dolar(n1);
          
            break;
    
        case "calcular1":
            document.querySelector("#res").textContent=calcular_pesos(n1);
                   
            break;
    }

    function calcular_dolar(n1){
                
        var conver_dolar=n1*19.87;
        return conver_dolar;
    }

    function calcular_pesos(n1){
                
        var conver_pesos=n1*0.050;
        return conver_pesos;
    } 

});


var boton=document.querySelector("#Limpiar");
boton.addEventListener("click",limpiar);


function limpiar() {

  document.getElementById("radios").value="";
  //document.getElementById("calcular1").value="";
  document.getElementById("money").value="";

    document.getElementById("res").textContent="";
}



