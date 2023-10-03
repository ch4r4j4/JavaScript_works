class Mascota{
    constructor(peso, edad){
        this.peso =peso;
        this.edad = edad;
    }        
}

let charpi = new Mascota(15,14);

console.log(charpi);

for (const iterator of Object.keys(charpi)) {
    console.log(`${iterator}: ${charpi[iterator]}`);
}


/*var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(){
    for (const iterator of dairy){
        console.log(iterator);
    }

logDairy();*/

