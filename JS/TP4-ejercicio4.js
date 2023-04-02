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
    #producto;
    constructor (nombre, precio, codigo, producto){
        this.#nombre = nombre;
        this.#precio = precio;
        this.#codigo = codigo;
        this.#producto = producto;
}

get getNombre (){
    
}
set setNombre (nuevoNombre){
    if (nuevoNombre.length > 0)
    this.#nombre = nuevoNombre;
}
get getPrecio (){

}
set setPrecio (nuevoPrecio){
    this.#precio = nuevoPrecio;
}
get getCodigo (){

}
set setCodigo (nuevoCodigo){
this.#codigo = nuevoCodigo;
}
get getProducto (){
}
set setProducto (nuevoProducto = []){
    this.#producto = nuevoProducto;
    nuevoProducto.forEach((nuevoProducto) => productos.push(new Productos('nombre', 'precio', 'codigo')));
}

ImprimeDatos(){
    document.write(`<ul>
<li>Nombre: ${this.#nombre}</li>
<li>Precio: ${this.#precio}</li>
<li>Codigo: ${this.#codigo}</li>
    <li>Codigo: ${this.#producto}</li>
    </ul>`)
}
}



const producto1 = new Productos("Camiseta titular Argentina 3 Estrellas", "$22000", "32022")

console.log(producto1);
producto1.ImprimeDatos();

const producto2 = new Productos ("Gorra Argentina", "$10,000", "42022")

console.log(producto2);
// producto2.ImprimeDatos();

const producto3 = new Productos ("Pelota Argentina", "$13,000", "52022")

console.log(producto3);
// producto3.ImprimeDatos();

// const arrProductos = [producto1, producto2, producto3];
// let productos = [];
// arrProductos.forEach((arrProductos) => productos.push(new Productos('nombre', 'precio', 'codigo')));
// producto1.Inprimedatos();