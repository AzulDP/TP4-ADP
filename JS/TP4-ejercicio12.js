/*
Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.
Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.
 */

let persona = {
    nombre: "",
    apellido: "",
    edad: "",
    estudiante: "",
    hobbies: "",
    
    
    presentar: () => {

        document.write(`<p>${this.nombre}</p>`)
        document.write(`<p>${this.apellido}</p>`)
        document.write(`<p>${this.edad}</p>`)
        document.write(`<p>${this.estudiante}</p>`)
        document.write(`<p>${this.hobbies}</p>`)
    },

    // hobbies
    agregar: () => {},
    borrar: () => {},
    buscar: () => {}
}

console.log(persona);

persona.presentar();
