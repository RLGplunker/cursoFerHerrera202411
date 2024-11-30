//Tengo este array

const tabFrutas: string [] = ['manzana', 'naranja'];

//puedo desestructurarlo así: 

const [p1, p2 , p3 = 'No Existe', p4 = 'No Existe']: string[]  = ['manzana', 'naranja'];

console.log('fruta-4', p4);
console.log('fruta-3', p3);

//también se puede desestructurar así si sólo me importa el segundo indice

const [, segundoElemento , , ]: string[]  = ['manzana', 'naranja'];

console.log('segundo elemento: ', segundoElemento)


