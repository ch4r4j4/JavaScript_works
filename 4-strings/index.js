let nombre="Paul";
let apellido="Charaja";
let estudiante= nombre.concat(" ",apellido);
console.log(estudiante);
let estudianteMayus= estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus=estudiante.toLowerCase();
console.log(estudianteMinus);

let largeText=estudiante.length;
console.log(largeText);

let fLname=nombre.charAt(0);
console.log(fLname);
let fLapellido= apellido.charAt(0);
console.log(fLapellido);

let sinEspacios=estudiante.trim();
console.log(sinEspacios);

let verified=estudiante.includes(nombre);
console.log(verified);