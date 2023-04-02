/*
Generaciones - Dificultad:  🟢🟡🔴

5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

La fecha actual resto anio de nacimiento  

 */

class Persona {
#nombre;
#edad;
#DNI;
#sexo;
#peso;
#altura;
#anio;
#generacion;

constructor (nombre, edad, DNI, sexo, peso, altura, anio, generacion = ("Generacion Z", "Generacion Y","Generacion X", "Baby Boom", "Silent Generation")){
    this.#nombre = nombre;
    this.#edad = edad;
    this.#DNI = DNI;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anio = anio;
    this.#generacion = generacion;
}

get getNombre (){  
}
set setNombre (nuevoNombre){
    this.#nombre = nuevoNombre;
}
get getEdad (){
}
set setEdad (nuevaEdad){
    this.#edad = nuevaEdad;
}
get getDNI (){
    
}
set setDNI (nuevoDNI){
    this.#DNI = nuevoDNI;
}
get getSexo (){
}

set setSexo (nuevoSexo){
    this.#sexo = nuevoSexo;
}

get getPeso (){
}
set setPeso (nuevoPeso){
    this.#peso = peso;
}

get getAltura (){
    
}
set setAltura (nuevaAltura){
    this.#altura = altura;
}
get getAnio(){
}
set setAnio (nuevoAnio){
        this.#anio = nuevoAnio;
    }
get getGeneracion(){
}
set setGeneracion (nuevaGeneracion){
        this.#generacion = nuevaGeneracion;
    }

    mostrarGeneracion(){
document.write(`${this.nombre} pertenece a la ${this.#generacion}`);

}

esMayorDeEdad(){
if (this.#edad <= 18) {
    document.write(`${this.#nombre} es mayor de edad`);
}
}

mostrarDatos(){
    document.write(`<ul>
    <li>Nombre:${this.#nombre}</li>
    <li>Edad: ${this.#edad}</li>
    <li>DNI: ${this.#DNI}</li>
    <li>Sexo: ${this.#sexo}</li>
    <li>Peso: ${this.#peso}</li>
    <li>Altura: ${this.#altura}</li>
    <li>Año de Nacimiento: ${this.#anio}</li>
    <li>Generación: ${this.#generacion}</li>
</ul>`);
}

generaDNI(){
    let randomNumber = (Math.random() * 99999999) + 1;
console.log(randomNumber);
document.write(`Tu número de DNI es ${randomNumber}`);
}
}

