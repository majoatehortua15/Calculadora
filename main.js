//selecciona el elemento HTML con la clase pantalla y lo asigna en la variable//
const pantalla = document.querySelector(".pantalla");
//selecciona todos los elementos HTML con la .btn con una variable botones//
const botones = document.querySelectorAll(".btn");

//realiza una iteracion sobre cada boton de la lista botones//
botones.forEach(boton => {
    boton.addEventListener("click", () =>{ /*Agrega un evento click*/
    /*console.log(btn.textContent);*/
    //obtener el texto y guardarlo en una variable
    const botonApretado = boton.textContent;
        if(boton.id === "C"){  /*verificamos si el boton tiene el id C */
            pantalla.textContent = "0"; /*de cumplirse esto, establece el contenido de pantalla contenido de pantalla como 0 y restablece la*/
            return;
        }
        if(boton.id === "borrar"){ //verificamos si el boton tiene el id de borrar//
            if(pantalla.textContent.length === 1 || pantalla.textContent === "error"){ //de ser el boton borrar, verificar la long del contenido de la pantalla//
                pantalla.textContent = "0"; //si la long es 1 o el contenido es error vamos a establecer el contenido de pantalla como 0//
            }else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); //de lo contrario elimina el ultimo caracter del contenido de pantalla//
            }
            return; //se retorna la funcion//
        }
        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
                return;
                
            } catch {
                pantalla.textContent = "error";    
            }
            return;
        }
        //verificar si el contenido de la pantalla es 0 o error//
        if (pantalla.textContent === "0" || pantalla.textContent === "error"){
            pantalla.textContent = botonApretado; /*Remplaza el contenido de pantalla por el contenido de boton apretado*/
        }else { /*agrega el contenido del boton apretado el contenido existente en pantalla*/
            pantalla.textContent += botonApretado;
        }
   })
    
})