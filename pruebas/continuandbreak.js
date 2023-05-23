let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
for (let i = 0; i < number.length; i++){
    if(number[i] == 5){
        continue;
    }
    else if(number[i] ==9){
        break;
    }
    console.log(number[i]);
}


let nombre = "paul";/// una demostracion del como sirve un forof
for (const letra of nombre) {
    console.log(letra);
}