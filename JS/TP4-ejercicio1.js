/* 
Crear objetos
Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();       auto encendido
objeto.apagar()          El auto se apagó

*/

let car = {
    color: 'verde',
    marca: 'Peugeot',
    modelo: '206',
    estado: true,

start: ()=>{
    document.write(`<p>El ${car.marca} ${car['modelo']} ${car['color']} está encendido.</p>`)
},
turnOff: () => {
    document.write(`<p>El auto está apagado.</p>`)
}
}
console.log(car);

car.start();
car.turnOff();