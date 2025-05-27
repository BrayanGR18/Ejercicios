function cambiarFondo(color)
        {
            console.log(color.value);

            var body = document.getElementById("body");
            body.style.backgroundColor = color.value;

        }