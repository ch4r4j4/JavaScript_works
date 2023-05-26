let factorial=1;
let contador=1;
while(true){
    if(contador<=10){
        factorial=factorial*contador;
        console.log(factorial);
        contador++;
    }else{
        break;
    }
}
