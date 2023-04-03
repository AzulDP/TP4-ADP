/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

 */
class Aeropuerto{
    #nombreAeropuerto
    #listaAviones
    constructor (aeropuerto, avion){
        this.#nombreAeropuerto = aeropuerto;
        this.#listaAviones= "Boeing 747", "Airbus A320", "Boeing 737", "Airbus A340";
    }

    agregarAvion(){
       this.#listaAviones = Avion;

    }
    buscarAvion(){
    this.#listaAviones.map(avion=>document.write(`<li>${avion}</li>`))
let listaDeAviones = this.#listaAviones.filter((avion)=>avion.includes("Boeing 777"));
  console.log(listaDeAviones);
  document.write(`<p>Producto buscado: ${listaDeAviones === undefined ? "no encontramos el producto buscado" : listaDeAviones}</p>`)
  }
}

// let listaProtectoresSolares = listaProductos.filter((producto) =>
// producto.categoria.includes("Protector solar")
// );
// document.write(`<p>Producto buscado: ${otroProducto === undefined ? "no encontramos el producto buscado" : otroProducto}</p>`)

// console.log(listaProtectoresSolares);

// document.write(`<h4>Producto buscado:</h4>`)
class Avion extends Aeropuerto {
   
        #nombre;
        #capacidad;
        #destino;
        #pasajeros;
        constructor (nombre, capacidad, destino, pasajeros){
            this.#nombre = nombre;
            this.#capacidad = capacidad;
            this.#destino = destino;
            this.#pasajeros = pasajeros;
        }

        abordar(){

        }
    }
    
