const array = ["hola", "a", "b", "c", "d", "e", "f",1,4,5,6,89];

console.log(array.slice(0,5));

const array2 = array.slice(2,-1);
console.log(array2);
///complestar la leccion .find y foreach
/// no se que cambios realizatr en este momento

array.find(valor =>{
    if(valor=="a"){
        console.log("si existe");
    }
})

const listaobjetos = [
    {name: "Paul"  ,edad:35},
    {name: "Any", edad:35}
]


const objeto = listaobjetos.find(o => {
    if(o.name==="Any"){
        console.log("si existe");
    }
});

///
let arraycadena =["valor", "amor","any",5,7,"kdc"];
arraycadena.forEach(valor => {
    if (valor=="any")console.log("si me ama");
})

/// funione con map() reduce(), y filter()
let listaname=["Paul","Anything","Almendra","Mama","Papa","yeni","Uriel"]

let newArray=listaname.map((valor, i) => {
    return `${i+1}-${valor}`;
})

console.log(newArray);