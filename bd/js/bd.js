var usuarios=[]; //array

fetch('https://db-awosxdx-default-rtdb.firebaseio.com/usuarios.json')
    .then(x=>x.json())
    .then(resp=>{
        ids=Object.keys(resp);
        usuarios=Object.values(resp);
        usuarios.forEach((usuario, i)=>{
            usuario.id=ids[i];
        });

        console.log(usuarios);

        mostrar();//llamar a metodo que muestre la informacion en pantalla
    }).catch(error=>{
        console.log(error);
    }); //x=>{console.log(x)}

    function mostrar(){
        
        var tabla=document.querySelector('#tabla');

        tabla.innerHTML="";
        usuarios.forEach((usuario, i)=>{
            var fila=document.createElement('tr');
            fila.innerHTML=`
            <th scope="row">${i+1}</th>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td><img src="${usuario.foto}" width="50px" height="50px"></td>
            <td>
                <a data-id="${usuario.id}" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#editar">
                    <i class="fa fa-pen"></i>
                </a>
            
                <a data-id="${usuario.id}" class="btn btn-warning">
                    <i class="fa fa-trash"> </i>
                </a>

            </td>
            
<!-- Modal -->

            <div class="modal" id="editar" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            `;

            tabla.appendChild(fila);
        });

    }