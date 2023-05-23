var nums = [1,2,3];
nums.splice(1,1);
console.log(nums);
nums.pop();
console.log(nums);

let lista = [1,2,3,"unique", "esica", "ana", "Lilian"];
for(let valor of lista){/// para listas es el forof  en incluso para interar un string
    console.log(valor);
}

lista.forEach(valor=>{//tambien sirve para listas
    console.log(valor);
})

let persona={
    nombre: "paul",
    edad: 25,
    isDeveleoper: true
}
let prop ="edad";
console.log(persona[prop]);////la verdad esta parte no entinedo ni mergas


for(let valor in persona){//// para objetos es el for in
    console.log(valor);
    console.log(persona[valor]); 
}

let init=0;
let max=10
while(init<max){console.log(init); init++;}

let star =0
do {
    star++
    console.log(star);
} while (star<max);