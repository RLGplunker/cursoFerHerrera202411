interface cuentaBancariaPersona{
    dni: string;
    saldo: number;
    modificarSaldo: (importe: number) =>  void;
}

const cuentaPepe: cuentaBancariaPersona = {
    dni: '58877878',
    saldo: 25000,
    modificarSaldo(importe: number) {
        this.saldo += importe;
    }
}

console.log({cuentaPepeSaldo: cuentaPepe.saldo});
console.log("añade 1000 de saldo");
cuentaPepe.modificarSaldo(1000);
console.log({cuentaPepeSaldo: cuentaPepe.saldo});

let numero: number = 8;
console.log({numero: `${numero}`});

export{};