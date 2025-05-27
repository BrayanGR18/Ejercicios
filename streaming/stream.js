DM.init({

    apiKey:'bbc484a527b7652b532f',
    status:true,
    cookie:true
    

});

var player= DM.player(document.getElementById("player"),{
    video: "x7tgad0",
    with: "100%",
    height: "100%",
    params:{
        autoplay: true,
        mute: true
    }
});

document.querySelector('#buscador').addEventListener('click', function(){
    var termino= document.querySelector('#termino').value;
    console.log(termino);

    fetch('https://api.dailymotion.com/videos?search='+termino)
    .then(res=>res.json())
    .then (res=>{
    console.log(res);
   var datos=Object.values(res);
   console.log(datos[5]);
   
   var videos=document.querySelector ('#videos');

   datos[5].forEach((elemento, i) =>{
    var div=document.createElement ('div');

    div.classList.add('video'+i);
    videos.appendChild(div);

            var player= DM.player(document.querySelector(".video"+i),{
                video: elemento.id,
                with: "50%",
                height: "50%",
                params:{
                    autoplay: false,
                    mute: true
                }

                });

        });
    });

});