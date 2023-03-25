/*
Modelando clases

Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

 */


let account = {
    titular: 'Alex',
    saldo: '0',
    
    ingresar: (cantidad)=> {
        document.write(`<p>El saldo de la cuenta es ${cantidad}</p>`);
    },
    extraer: (cantidad)=> {
        document.write(`<p> El saldo de la cuenta es ${cantidad}</p>`);
    },
    informar: (cantidad) => {
        document.write(`<p> El saldo de la cuenta es ${cantidad}</p>`);
    }
}

console.log(account)
document.write(`<p> El titular de la cuenta es ${account.titular}</p>`);
document.write(`<p> El saldo de la cuenta es ${account.saldo}</p>`);

ingresar("100");
account.ingresar();
document.write(`<p> El saldo de la cuenta es ${account.saldo}</p>`);
document.write(`<p> El saldo de la cuenta es ${account.saldo}</p>`);
extraer("50");
document.write(`<p> El saldo de la cuenta es ${account.saldo}</p>`);
