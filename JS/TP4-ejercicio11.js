/*
Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : (este ej. debe formar parte del tp4)
crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez. Este ejercicio forma parte del TP4 (se puede realizar con los conceptos vistos hasta hoy)

piedra 0 le gana a tijera 2
piedra 0 pierde contra papel 1 == papel 1 gana contra piedra 0
papel 1 pierde contra tijera 2 == tijera 2 gana contra papel 1
piedra 0 = a piedra 0 empata
papel 1 = papel 1 empata
tijera 2 = tijera 2 empata

// }else if (isNaN(true)) {
//   alert("Ingrese un número");
 */

// pedir movimiento usuraio
let userMove = parseInt(prompt("Seleccione un valor del cero al 2 donde: Piedra -> 0; Papel -> 1; Tijera -> 2"));

if (userMove === 0 || userMove === 1 || userMove === 2) {
    // for (tiradas);
} else (userMove > 2); {
    alert("Ingrese un numero del 0 al 2");
}

    // pedir movimiento computadora - aleatorio Math.random()
    let computerMove = Math.floor(Math.random() * 3) + 1;
    console.log(computerMove);
    
    // operador ternario - operaciones matematicas 
    if (userMove === 0 && computerMove === 0 || 
        userMove === 1 && computerMove === 1 ||
        userMove === 2 && computerMove === 2 ) {
            document.write(`<p>Empataron!</p>`)

    }
    // this.estudiante ? document.write(`<p>Es estudiante</p>`) : document.write(`<p>No es estudiante</p>`);
    
    // mostrar por pantalla quien gano - if else
    
    
    // bucle para jugar otra vez
