document.querySelector('#guardar').
addEventListener('click', (evento)=>{

    evento.preventDefault();
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var email = document.querySelector('#email').value;
    var foto = document.querySelector('#foto').value;
   
    var data={
        nombre:nombre,
        apellido:apellido,
        email:email,
        foto:foto
    };
    console.log(data);

    //limpiar datos
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var email = document.querySelector('#email').value;
    var foto = document.querySelector('#foto').value;

    fetch('https://db-awosxdx-default-rtdb.firebaseio.com/usuarios.json',{
    method:'POST',
    mode:'cors',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
        }).then(resp=>resp.json())
        .then(resp=>{
            console.log(resp);
            window.location.href='index.html'
        })
        .catch(resp=>{
            console.log(resp);
        })

});