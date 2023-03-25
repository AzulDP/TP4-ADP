/*
Crear un objeto calculadora, con las propiedades y métodos necesarios para realizar las operaciones de suma, resta, multiplicación y división. Mostrar por pantalla 2 operaciones con cada método.
 */

let calculadora = {
    
    sumar: function (number1, number2){
        document.write(number1 + number2);
    },
    restar: function (number1, number2){
        document.write(number1 - number2)
        
    },
    multiplicar: function (number1, number2){
        document.write(number1 * number2)
        
    },
    dividir: function (number1, number2){
        document.write(number1 / number2)
    }
}

calculadora.sumar(3,4);
document.write(`<br></br>`);
calculadora.sumar(6,49);
document.write(`<br></br>`);
calculadora.restar(400,200);
document.write(`<br></br>`);
calculadora.restar(5,9);
document.write(`<br></br>`);
calculadora.multiplicar(3,4);
document.write(`<br></br>`);
calculadora.multiplicar(15,10);
document.write(`<br></br>`);
calculadora.dividir(15,3);
document.write(`<br></br>`);
calculadora.dividir(100,2);