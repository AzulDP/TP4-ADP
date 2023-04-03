/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
    #nombre;
    #edad;
    #profesion;

constructor (nombre, edad, profesion) {
this.#nombre = nombre;
this.#edad = edad;
this.#profesion = profesion;
}

get getNombre (){
    return this.#nombre;
}
set setNombre (nuevoNombre){
this.#nombre = nuevoNombre;
}
get getEdad (){
return this.#edad;
}
set setEdad (nuevaEdad){
this.#edad =nuevaEdad;
}
get getProfesion (){
return this.#profesion;
}
set setProfesion(nuevaProfesion){
this.#profesion = nuevaProfesion;
}

saludar(){
    document.write(`<p>Hola ${this.#nombre}!</p>`)
}
despedirse(){
    document.write(`<p>Adiós ${this.#nombre}!</p>`)
}
}

const persona1 = new Persona ("Felipe", "35", "hacker ético");
console.log(persona1);
persona1.saludar();

const persona2 = new Persona ("Macarena", "28", "bailarina");
console.log(persona2);
persona2.saludar();