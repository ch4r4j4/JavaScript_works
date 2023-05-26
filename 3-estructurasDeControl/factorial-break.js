let factorial=1;
let contador=1;
let name='Paul';
let nombre= 'el nombre de mi paruiente es, ${name} bienvenido';
while(true){
    if(contador<=10){
        factorial=factorial*contador;
        console.log(factorial);
        contador++;
    }else{
        break;
    }
}

console.log(nombre)