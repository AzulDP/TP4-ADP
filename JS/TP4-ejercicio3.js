/*
Rectángulos Dificultad:  🟢
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */



class Rectangulos {
    #largo;
    #ancho;
    #perimetro;
    #area;
    constructor (largo, ancho){
        this.#largo = largo;
        this.#ancho = ancho;
        this.#perimetro = largo*2 + ancho*2;
        this.#area = largo * ancho;
    }
    
    get getLargo (){
        
    }
    
    set setLargo (nuevoLargo){
        this.#largo = nuevoLargo;
    }
    get getAncho (){

    }

set setAncho (nuevoAncho){
this.#ancho = nuevoAncho;
}

get getPerimetro(){
    return this.#perimetro();
}
set setPerimetro(nuevoPerimetro){
    this.#perimetro = nuevoPerimetro;
}
get getArea(){
    return this.#area();
}
set setArea(nuevaArea){
this.#area = nuevaArea;
}

mostrarInformacion () {
    document.write(`Largo:${this.#largo}<br> 
    Ancho:${this.#ancho}<br> 
    Perimetro:${this.#perimetro}<br> 
    Area:${this.#area}<br>`);
}
}

const Rectangulo1 = new Rectangulos("40", "30");
console.log(Rectangulo1);

Rectangulo1.mostrarInformacion();

let nLargo = parseInt(prompt('Ingrese el valor del largo de un rectángulo'));
let nAncho = parseInt(prompt('Ingrese el valor del ancho de un rectángulo'));
const Rectangulo2 = new Rectangulos (nLargo, nAncho);{

}

console.log(Rectangulo2);
Rectangulo2.mostrarInformacion();