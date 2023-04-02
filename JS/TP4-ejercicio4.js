/*
Producto - Dificultad:  🟢🟡

4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

 */

class Productos {
    #nombre;
    #precio;
    #codigo;
constructor (nombre, precio, codigo){
    this.#nombre = nombre;
    this.#precio = precio;
    this.#codigo = codigo;
}

ImprimeDatos(){
    document.write(`<ul>
    <li>Nombre: ${this.#nombre}</li>
    <li>Precio: ${this.#precio}</li>
    <li>Codigo: ${this.#codigo}</li>
    </ul>`)
}
}

Productos.ImprimeDatos();

let arrProductos = [];

const Producto1 = new Productos("",)
