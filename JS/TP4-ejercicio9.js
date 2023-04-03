/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
 */

class Animal {
    #nombre;
    #edad;
constructor (nombre, edad){
    this.#nombre = nombre;
    this.#edad = edad;
}

get getNombre(){
return this.#nombre;
}

set setNombre(nuevoNombre){
 this.#nombre = nuevoNombre;
}

get getEdad(){
return this.#edad;
}

set setEdad(nuevaEdad){
this.#edad = nuevaEdad;
}

mostrarInformacion(){
    document.write(`${this.#nombre} ${this.#edad}`)
}
emitirSonido(){
document.write(`<p>El sonido de ${this.#nombre} es </p>`)
}
}
class Perro extends Animal{

}