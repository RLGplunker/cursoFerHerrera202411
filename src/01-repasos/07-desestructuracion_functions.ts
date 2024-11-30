//-------------------------------------------------------------------------
// Objetivo: 
// > la funcioón taxCalculation, se trata de hacer desestructuración
//    la versión desestructurada es taxCalculationDesestructurada
//    la versión intermedia desestructurada es taxCalculationDesestructurada_v3
//    la versión mejorada desestructurada es taxCalculationDesestructurada_v3
//-------------------------------------------------------------------------
export interface Product{
    description: string;
    price: number;
}

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const phone: Product = {
    description: 'samsum-1',
    price: 200.2
}

const tablet: Product =  {
    description: 'tablet-2',
    price: 400.2   
}

const cestaCompra: Product[] = [phone, tablet];
const tax = 0.15;

function taxCalculation (options: TaxCalculationOptions): number[]{

    let totalNeto = 0;
    let totalImpuestos = 0;

    options.products.forEach(x => {
        totalNeto += x.price;
        totalImpuestos  += totalNeto * tax;
    });

    return [totalNeto, totalImpuestos];
}

//-----------------------------------------------
// a continuación versión desestructurada 
// Nota el retorno de la función lo he cambiado para que sea más legible
// aunque el resultado sea el mismo 
//-----------------------------------------------
function taxCalculationDesestructurada(options: TaxCalculationOptions): [number, number]{
    
    let totalNeto = 0;
    let totalImpuestos = 0;

    const { products: productosCesta} = options;
    
    // productosCesta.forEach ((x)=> {
    //     totalNeto += x.price;
    //     totalImpuestos  += totalNeto * tax;
    // });
    //---------------------------------------------------------------------------------------------------
    // Se podría desestructurar más el forEach
    // ({price}) viene de: (x) =>    Como x es de tipo Producto se puede escoger su propiedad {price}
    //---------------------------------------------------------------------------------------------------
    productosCesta.forEach (({price})=> {
        totalNeto += price;
        totalImpuestos  += totalNeto * options.tax;
    });

    return [totalNeto, totalImpuestos];

}

//-----------------------------------------------
function taxCalculationDesestructurada_v2({tax, products}: TaxCalculationOptions): [number, number]{
    
    let totalNeto = 0;
    let totalImpuestos = 0;
    
    products.forEach (({price})=> {
        totalNeto += price;
        totalImpuestos  += totalNeto * tax;
    });

    return [totalNeto, totalImpuestos];

}
export function taxCalculationDesestructurada_v3(options: TaxCalculationOptions): [number, number]{
    
    let totalNeto = 0;
    let totalImpuestos = 0;
    
    const {tax, products} = options;
    

    products.forEach (({price})=> {
        totalNeto += price;
        totalImpuestos  += totalNeto * tax;
    });

    return [totalNeto, totalImpuestos];

}

//-----------------------------------------------
// RESULTADOS COMO LOGS
//-----------------------------------------------
const costeProductos: number[] = taxCalculation({tax: tax, products: cestaCompra});

console.log("[***** Coste compra: VERSIÓN SIN DESESTRUCTURACIÓN **********************]");
console.log("Precio Productos", costeProductos[0]);
console.log("Impuesto Productos", costeProductos[1]);


console.log("[***** Coste compra: VERSIÓN CON DESESTRUCTURACIÓN **********************]");
const [neto, impuestos] = taxCalculationDesestructurada({tax: tax, products: cestaCompra});
console.log("neto -> ", neto);
console.log("impuestos -> ", impuestos);


console.log("[***** Coste compra: VERSIÓN CON DESESTRUCTURACIÓN-V2 **********************]");
const [neto2, impuestos2] = taxCalculationDesestructurada_v2({tax: tax, products: cestaCompra});
console.log("neto -> ", neto);
console.log("impuestos -> ", impuestos);


console.log("[***** Coste compra: VERSIÓN CON DESESTRUCTURACIÓN-V3 **********************]");
const [neto3, impuestos3] = taxCalculationDesestructurada_v3({tax: tax, products: cestaCompra});
console.log("neto -> ", neto);
console.log("impuestos -> ", impuestos);


//export {Product, TaxCalculationOptions, taxCalculationDesestructurada_v3}
     //<-- He tenido que poner en tsconfig.json   "isolatedModules": false,
     // con valor true me daba error: cannot-re-export-a-type-when-using-the-isolatedmodules 
     // PERO: Si pongo los exports a nivel de interface y a nivel de función
     // puedo dejar en tsconfig.json   "isolatedModules": true,

//NOTA:
// Se puede poner todo el export aquí, pero lo voy a hacer al modo de .net (backend):
// poniendo el export en cada interfaz y en cada función
// por tanto dejo comentado el export que está justo arriba de este comentario 