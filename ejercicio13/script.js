
  var x=document.querySelector("#Button, #cajita, #p");
  x.addEventListener("click",Desaparece);

function Desaparece(Elemento){
    Elemento.style.visibility="hidden" 
  }


  function Aparece(){
    Button.style.visibility="visible" 
    Cajita.style.visibility="visible" 
    p.style.visibility="visible" 
  }




/* function desaparece() {
    onclick="alert('... y la caja sigue funcionando')"
    onmouseover="Desaparece(this)">

} */