
import { Product, TaxCalculationOptions, taxCalculationDesestructurada_v3 } from '../01-repasos/07-desestructuracion_functions';

const tax:number = 0.1;


const phone: Product = {
    description: 'samsum-1',
    price: 200.2
}

const tablet: Product =  {
    description: 'tablet-2',
    price: 400.2   
}

let listaProductos: Product[] = [];
listaProductos.push(phone);
listaProductos.push(tablet);

const taxCalculationOptions: TaxCalculationOptions = {
    tax: tax,
    products: listaProductos   
}
        
   
let  [totalNeto, totalImpuestos] = taxCalculationDesestructurada_v3(taxCalculationOptions);

   
console.log("Factura: totalNeto: {0} total impuestos: {1}", totalNeto, totalImpuestos);

//NOTA: 
// compruebo que no sólo sale este log, sin también todos los logs de 07-desestructuracion_functions.ts
// que no están encapsulados dentro de funciones 
// Cuando se importa una función de un módulo, se ejecuta todo su módulo, por eso han salido los 
// console.logs 
   
   