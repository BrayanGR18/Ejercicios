var carrito=[];
var productos=[
     {
          id:1,
          nombre:"papas",
          precio:15,
          imagen:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101116765L.jpg"
     },
     {
          id:2,
          nombre:"coca-cola",
          precio:21.5,
          imagen:"http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0de.png"
     },
     {
          id:3,
          nombre:"Nutri Leche",
          precio:20,
          imagen:"https://www.granodeoro.com.mx/wp-content/uploads/2020/03/Nutrileche.jpg"
     },
     {
          id:4,
          nombre:"Tartinas de fresa",
          precio:16.5,
          imagen:"https://http2.mlstatic.com/D_NQ_NP_931402-MLM45702125801_042021-O.jpg"
     },
     {
          id:5,
          nombre:"Chiles adobados",
          precio:9,
          imagen:"https://www.marialabonita.com/wp-content/uploads/2018/07/Chiles-Chipotles-Adobados-Clemente-Jacques-lata-220g.jpg"
     }   
];

var lista=document.querySelector("#productos");

productos.forEach((elemento,index)=>{
     var producto=document.createElement('div');
          producto.innerHTML=`
               <div class="card mb-3">
                    <div class="row">
                         <div class="col-md-4">
                              <img src="${elemento.imagen}" class="img-fluid rounded-start" alt="${elemento.nombre}" width="150px" height="200px">
                         </div>
                         <div class="col-md-8">
                              <div class="card-body">
                                   <h5 class="card-title">${elemento.nombre}</h5>
                                   <p>Precio: $${elemento.precio}</p>
                                   <hr>
                                   <button id="prod_${elemento.id}" 
                                   data-id="${elemento.id}"
                                   class="btn btn-primary">Agregar</button>
                              </div>
                         </div>
                    </div>
               </div>
          `;

          lista.appendChild(producto);
});

//agregar eventos a productos
productos.forEach(elemento=>{
     document.querySelector('#prod_'+elemento.id).addEventListener('click',(evento)=>{
          var id=elemento.id;
          console.log(id);
          carrito.push(id);
          mostrarCarrito();
     });
});

function mostrarCarrito(){
     var carro=document.querySelector('#carrito');
     carro.innerHTML="";
     carrito.forEach(p=>{
          var producto=document.createElement('div');
          productos.forEach(prod=>{
               if(prod.id===p){
                    console.log(prod);
                    producto.innerHTML=`
                         <li class="list-group-item text-end">
                              <p> ${prod.nombre} $${prod.precio}
                                   <a class="btn btn-danger" data-id="${prod.id}" id="elim_${prod.id}">x</a>
                              </p>
                         </li>
                    `;
                    carro.appendChild(producto);
               }
          });
     });
     borrarBoton();
     sumarVenta();
}

//agregar eventos a carrito
function borrarBoton(){
     carrito.forEach(id=>{
          document.querySelector('#elim_'+id).addEventListener('click',(x)=>{
               var i=Number(document.querySelector('#elim_'+id).getAttribute('data-id'));
               console.log(i);

               var aux=[];
               carrito.forEach(x=>{
                    if(x!==i){
                         aux.push(x);
                    }
               });
               console.log(aux);
               carrito=aux;
               mostrarCarrito();
          });
     });
}

function sumarVenta(){
     var suma=0;
     carrito.forEach(id=>{
          productos.forEach(prod=>{
               if(prod.id==id){
                    suma=suma+prod.precio;
               }
          });
     });
     console.log(suma);
     var total=document.querySelector('#total');
     total.innerHTML=`$${suma}`;
}

document.querySelector('#pagar').addEventListener('click',()=>{
     if(window.PaymentRequest){
          console.log('si funciona');

          const metodoPago=[
               {
                    supportedMethods: ['https://google.com/pay'],
                    data:{
                         environment:'TEST',
                         apiVersion: 2,
                         apiVersionMinor: 0,
                         merchantInfo:{
                              merchantName:'Example Merchant'
                         },
                         allowedPaymentMethods:[{
                              type:'CARD',
                              parameters:{
                                   allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
                                   allowedCardNetworks:["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
                              },
                              tokenizationSpecification:{
                                   type:'PAYMENT_GATEWAY',
                                   parameters:{
                                        'gateway': 'example',
                                        'gatewayMerchantId': 'exampleGatewayMerchantId'
                                   }
                              }
                         }]
                    }
               }
          ];

          var items="";
          var suma=0;
          carrito.forEach(id=>{
               productos.forEach(prod=>{
                    if(prod.id==id){
                         suma=suma+prod.precio;
                         items=items+`
                         {
                              label:${prod.nombre},
                              amount:{
                                   currency:'MXN',
                                   value:${prod.precio}
                              }
                         },
                         `;
                    }
               });
          });

          const detallePago={
               total:{
                    label:'Total',
                    amount:{
                         currency:'MXN',
                         value:suma
                    }
               }
          };

          const peticionPago=new PaymentRequest(metodoPago,detallePago);

          peticionPago.show()
               .then(pago=>{
                    console.log(pago);
               }).catch(error=>console.log(error));
     }else{
          console.log('Api no es soportada');
     }

});