/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

 */
class Aeropuerto{
    #nombreAeropuerto
    #listaAviones
    constructor (aeropuerto, avion = ("Boeing 747", "Airbus A320", "Boeing 737", "Airbus A340")){
        this.#nombreAeropuerto = aeropuerto;
        this.#listaAviones= avion;
    }

    get getAeropuerto (){
        return this.#nombreAeropuerto;
    }
    set setAeropuerto (nuevoAeropuerto){
        this.#nombreAeropuerto = nuevoAeropuerto;
    }
    get getListaAviones (){
        return this.#listaAviones;
    }
    set setListaAviones (listaAviones){
        this.#listaAviones = listaAviones;
    }

mostrarInformacion(){
    document.write(`<ul>
    <li>${this.#nombreAeropuerto}</li>
    <li>${this.#listaAviones}</li>
    </ul>`)
}

    agregarAvion(){
       this.#listaAviones = Avion;
       
    }
    buscarAvion(){
        this.#listaAviones.map(avion=>document.write(`<li>${avion}</li>`));
let listaDeAviones = this.#listaAviones.find((avion)=>this.#listaAviones.avion.includes(""));
  console.log(listaDeAviones);
  document.write(`<p>Producto buscado: ${listaDeAviones === undefined ? "no encontramos el producto buscado" : listaDeAviones}</p>`)
  }
}

// let serum = productos.find((producto)=>{return producto.includes("Sérum")})
// let otroProducto = productos.find((producto)=>{return producto.includes("Bálsamo")})

// document.write(`<p>Producto buscado: ${serum}</p>`)
// document.write(`<p>Producto buscado: ${otroProducto === undefined ? "no encontramos el producto buscado" : otroProducto}</p>`)


// extends Aeropuerto
class Avion {
   
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
        get getNombre (){
            return this.#nombre;
        }
        set setNombre (nuevoNombre){
            this.#nombre = nuevoNombre;
        }
        get getCapacidad (){
            return this.#capacidad;
        }
        set setCapacidad (nuevaCapacidad){
            this.#capacidad = capacidad;
        }
        get getDestino (){
            return this.#destino;
        }
        set setDestino (nuevoDestino){
            this.#destino = nuevoDestino;
        }
        get getPasajeros (){
            return this.#pasajeros;
        }
        set setPasajeros (nuevoPasajeros){
            this.#pasajeros = nuevoPasajeros;
        }
        
        mostrarInformacion(){
            document.write(`<ul>
            <li>${this.#nombre}</li>
            <li>${this.#capacidad}</li>
            <li>${this.#destino}</li>
            <li>${this.#pasajeros}</li>
            </ul>`)
        }

        abordar(nuevaCapacidad){
if (nuevaCapacidad === this.#capacidad){
    alert("El avion esta lleno")
}
        }
    }
    
    console.log(Aeropuerto);
    const aeropuertoInternacional = new Aeropuerto ("London Heathrow");
    console.log(aeropuertoInternacional);

const avion1 = new Avion ("AirFrance", "300", "Paris", "300");
console.log(avion1);
const avion2 = new Avion ("AirFrance", "300", "Amsterdam", "300");
console.log(avion2);
const avion3 = new Avion ("AirFrance", "300", "Rio de Janeiro", "300");
console.log(avion3);

document.write(`<ul>
<li>${avion1.getNombre}</li>
<li>${avion1.getCapacidad}</li>
<li>${avion1.getDestino}</li>
<li>${avion1.getPasajeros}</li>
<li>${avion2.getNombre}</li>
<li>${avion2.getCapacidad}</li>
<li>${avion2.getDestino}</li>
<li>${avion2.getPasajeros}</li>
<li>${avion3.getNombre}</li>
<li>${avion3.getCapacidad}</li>
<li>${avion3.getDestino}</li>
<li>${avion3.getPasajeros}</li>
</ul>`);

aeropuertoInternacional.buscarAvion("Boeing 777");