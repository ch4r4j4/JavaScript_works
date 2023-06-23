let names = ['Analy','Paul', 'almendra',5,90];
console.log(names);

const lista1 = ["holas","jkdn",48,55,2,5,7,7];
const lista2 = ["holas","jkdn",48,55,2,5,7,7];

const lista3= lista1.concat(lista2);
console.log(lista3);

console.log(...lista3);

///factor de propagacion
const lista4 = [...lista1,...lista2]
console.log(lista4);

const lista5=[lista1,lista2]
console.log(lista5);