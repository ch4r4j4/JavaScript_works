class Mascota{
    constructor(peso, edad){
        this.peso =peso;
        this.edad = edad;
    }        
}

let charpi = new Mascota(15,14);

console.log(charpi);

for (const iterator of Object.keys(charpi)) {
     console.log(charpi[iterator]);
}