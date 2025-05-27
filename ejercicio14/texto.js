function contar() {
    // Capturas el valor que se ingresa
    const texto = document.getElementById('texto').
    value.trim().toLowerCase().split('');
    
    // objeto
    const repeticiones = {};
    
   //ciclar arreglo
    texto.forEach( ( letra ) => {
      repeticiones[ letra ] = ( repeticiones[ letra ] || 0 ) + 1;
    });
    
    // ciclamos el objeto y lo agregamos al resultado
    for( let letra in repeticiones ) {
      const text = `${ letra } se repite  ${ repeticiones[ letra ] } veces <br>`;
      document.getElementById('resultado').innerHTML += text;
    }
  
  }

  
var boton=document.querySelector("#Limpiar");
boton.addEventListener("click",limpiar);

  function limpiar() {
    document.getElementById("texto").value="";
    //document.getElementById("calcular1").value="";
   // document.getElementById("money").value=""; 
  
      document.getElementById('resultado').textContent="";
  }