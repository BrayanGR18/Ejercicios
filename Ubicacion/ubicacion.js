//mostrar ubicacion actual

//comprobar 

/* if("geolocation" in navigator ){
    alert("El explorador soporta geolocalizacion");
} 
else{
    alert("El explorador NO soporta geolocalizacion");
} */
var latitud;
var longitud;

var arreglo= [
[20.452031606011708, -97.08756576350807, "Bodega"],
[20.452634846032552, -97.08721670194903, "Bodega Riaño"],
[20.452700257458726, -97.08763557581986, "Hotel continental"]
];

if("geolocation" in navigator ){
    //obtener localizacion con baja precision
 navigator.geolocation.getCurrentPosition(function(posicion){
    var latitud=posicion.coords.latitude;
    var longitud=posicion.coords.longitude;
    
});

//para mayor presicion
var id_posicion=navigator.geolocation.watchPosition(function(posicion){
    latitud=posicion.coords.latitude;
    longitud=posicion.coords.longitude;
    console.log(latitud,longitud);
    document.querySelector('#lat').innerText=latitud;
    document.querySelector('#lon').innerText=longitud;

    //colocamos el mapa y le pasamos la latitud y la longitud
    var map = L.map('map').setView([latitud, longitud], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '© OpenStreetMap'
     }).addTo(map);

     L.marker([latitud, longitud]).addTo(map)
     .bindPopup("<b>UTGZ</b>")
     .openPopup();
     
     arreglo.forEach(function(Lugar){

        //L.marker([Lugar[0], Lugar[1]]).addTo(map).bindPopup(Lugar[2]).openPopup();

        L.Routing.control({
            waypoints : [
                L.latLng(latitud, longitud),
                L.latLng(Lugar[0], Lugar[1])
            ]
        }).addTo(map);
    });

});




} 
else{
    alert("El explorador NO soporta geolocalizacion");
}