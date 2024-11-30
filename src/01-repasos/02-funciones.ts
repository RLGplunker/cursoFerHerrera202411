interface  persona{
    ape1: string;
    ape2: string; 
    nombre: string;
}
const juan: persona = { ape1: 'lopez', ape2: 'lopez', nombre: 'juan'};
const sumaSumeros = (a: number, b: number ): string => {
    // obsoleto return (a + b).ToString();
    return `${ a + b}`; 
}

const frutas: string[] = ['manzana', 'pera'];

console.log ({sumaSumeros}); //<-- a sí se ve muy bien la consola 
console.log({juan}); //<-- console.table hace que se vea tabulada la consola 
console.table(frutas);

export {};