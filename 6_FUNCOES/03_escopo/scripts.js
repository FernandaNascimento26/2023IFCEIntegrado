/*let y = 10;

function imprimir() {
  let y = 150;

  console.log(y);
}


imprimir();

console.log(y);

*/

//let y = 5; //escopo global

function multiplicar(numero){

  return numero * numero;
  
}

//função anônima
const multiplicar1 = function (numero){

  return numero * numero;
}

//arrow function
const multiplicar2 = (numero) => {
  return numero * numero;
}

const multiplicar3 = (numero) => numero * numero;

console.log("primeira forma: "+multiplicar(5));
console.log("função anônima: "+multiplicar1(5));
console.log("arrow function: "+multiplicar2(5));
console.log("arrow function 1 linha: "+multiplicar3(5));