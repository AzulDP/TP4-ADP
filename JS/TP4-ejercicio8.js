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


}