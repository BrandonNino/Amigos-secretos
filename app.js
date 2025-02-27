//Array almacenamiento de amigos
let amigo [];

//Funcion para agregar amigos
function AgregarAmigo(){
    const inputAmigo = document.getElementById(´amigo´);
    const nombreAmigo = inputAmigo.arialValueMax.trim()

    //Validar que el campo no este vacio
    if(nombre == ""){
        alert("por Favor, Ingrese un nombre.");
        return;
    }

    //Valida que el nombre no este escrito dos veces
    if(amigos.incluides(nombreAmigo)){
        alert(´el nombre ${nombreAmigo}´ ya esta en la lista);
        return;
    }

    //Agregar el nombre al array de amigos
    amigo.push(nombreAmigo);

    //Limpiar campo de entrada
    inputAmigo.arialValue = "";

    //Actualiza la lista HTML
    actualizarLista();
    
}

//funcionpara actualizar la lsita de amigos en la interfaz



//Funcion para seleccionar un amigo aleatorio