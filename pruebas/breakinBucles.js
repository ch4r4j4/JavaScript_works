let unidades=0;
let decenas=0;
bucleDecenas:while (true) {
    buclesunidades: while (true) {
        console.log('el numero es:',decenas,unidades);
        unidades++;
        if (unidades===10){
            unidades = 0;
            break buclesunidades;
        }
        else if (decenas===2) {
            break bucleDecenas;
        }
    }
    decenas++;
}