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

let ingresos = [];
let extracciones = [];
let nuevoSaldo = [];

let account = {
    titular: 'Alex',
    saldo: '0',
    
    ingresar: (cantidad)=> {
        document.write(`<p>Usted acaba de ingresar $${cantidad}</p>`);
    },
    extraer: (cantidad)=> {
        document.write(`<p> Usted acaba de extraer $${cantidad}</p>`);
    },
    informar: (cantidad) => {
        document.write(`<p> El saldo actual de la cuenta es $${cantidad}</p>`);
        
        // this.saldo.push(this.ingresar);
        // console.log(informar);
        // this.saldo.push(this.extraer);
        // console.log(informar);
        //     let estadoCuenta = function {
            //         if (this.saldo =< this.ingresar){
                //             math.floor(this.ingresar - this.extraer)
                //         } else 
                //     }
                //     document.write(`<p> El saldo de la cuenta es $${estadoCuenta}</p>`);
            }
        }
        
        console.log(account)
        document.write(`<h4>Detalles de la cuenta</h4>`)
        document.write(`<p> El titular de la cuenta es ${account.titular}</p>`);
        document.write(`<h4>Estado de la cuenta</h4>`)
        document.write(`<p> El saldo inicial de la cuenta es ${account.saldo}</p>`);
        
        
        document.write(`<h4>Ultimas transacciones</h4>`)
        
        document.write(`<h5>Ingresos</h5>`)
        account.ingresar("100");
        ingresos.push = account.ingresar; 
        
        document.write(`<h5>Extracciones</h5>`)
        account.extraer("50");
        extracciones = account.extraer; 

        
        
        document.write(`<h4>Estado acutal</h4>`)
        nuevoSaldo = Ingresos - Extracciones;
account.informar(nuevoSaldo);