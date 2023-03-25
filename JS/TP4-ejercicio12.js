/*
Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.
Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.
 */


let persona = {
    nombre: "Lautaro",
    apellido: "Gonzalez",
    edad: "25",
    estudiante: true,
    hobbies: ["leer", "cantar", "viajar", "bailar", "nadar"],
    
    
    presentar: function () {
        document.write(`<p>Su nombre es ${this.nombre}</p>`);
        document.write(`<p>Su apellido es ${this.apellido}</p>`);
        document.write(`<p>Tiene ${this.edad} años</p>`);
        this.estudiante ? document.write(`<p>Es estudiante</p>`) : document.write(`<p>No es estudiante</p>`);
        document.write(`<p>A ${this.nombre} le gusta ${this.hobbies}</p>`)
    },
    
    // hobbies
    agregar: function (hobby) {
        this.hobbies.push(hobby);
        
    },
    borrar:  function () {
        this.hobbies.shift();
    },
    buscar: function (hobby) {
        this.hobbies.includes(hobby) ? document.write(`<p>A ${this.nombre} le gusta ${hobby} </p>`) : document.write(`<p>A ${this.nombre} no le gusta ${hobby} </p>`)
    },
    mostrarHobbies: function () {
    document.write(`<p>A ${this.nombre} le gusta ${this.hobbies}</p>`)
}
}

console.log(persona);

persona.presentar();
persona.agregar(" escribir");
persona.agregar(" bucear");
persona.agregar(" dibujar");
document.write(`<p>A ${persona.nombre} le gusta ${persona.hobbies}</p>`);
persona.buscar("viajar");
persona.borrar(0);
persona.mostrarHobbies();

