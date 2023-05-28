
/* function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}

function temperatureConverterMenu() {
  const option = prompt("Escolha uma opção:\n1. Celsius para Fahrenheit\n2. Fahrenheit para Celsius");

  if (option === "1") {
    const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
    const fahrenheit = celsiusToFahrenheit(celsius);
    alert(celsius + " graus Celsius equivalem a " + fahrenheit + " graus Fahrenheit.");
  } else if (option === "2") {
    const fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
    const celsius = fahrenheitToCelsius(fahrenheit);
    alert(fahrenheit + " graus Fahrenheit equivalem a " + celsius + " graus Celsius.");
  } else {
    alert("Opção inválida. Por favor, escolha uma opção válida.");
  }
}

temperatureConverterMenu();
*/

/* ----------------------------------------------------2----------------------------------------------------------------------------------------------*/
/*
function soma(a, b, c) {
  return a + b + c;
}

function media(a, b, c) {
  const resultadoSoma = soma(a, b, c);
  const media = resultadoSoma / 3;
  return media;
}

const numero1 = parseInt(prompt("Digite o primeiro número:"));
const numero2 = parseInt(prompt("Digite o segundo número:"));
const numero3 = parseInt(prompt("Digite o terceiro número:"));

const resultadoSoma = soma(numero1, numero2, numero3);
const resultadoMedia = media(numero1, numero2, numero3);

console.log("A soma dos três números é: " + resultadoSoma);
console.log("A média dos três números é: " + resultadoMedia);
*/

/* ----------------------------------------------------3----------------------------------------------------------------------------------------------*/
/*
function encontrarMaiorNumero(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

function encontrarMenorNumero(num1, num2, num3) {
  return Math.min(num1, num2, num3);
}

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const numero3 = parseFloat(prompt("Digite o terceiro número:"));

const maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);
const menorNumero = encontrarMenorNumero(numero1, numero2, numero3);

console.log("O maior número é: " + maiorNumero);
console.log("O menor número é: " + menorNumero);

/* ----------------------------------------------------4----------------------------------------------------------------------------------------------*/
/* 
function isPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

const n = parseInt(prompt("Digite um número inteiro positivo:"));

console.log("Números primos de 1 até " + n + ":");

for (let i = 2; i <= n; i++) {
  if (isPrimo(i)) {
    console.log(i);
  }
}

*/
/* ----------------------------------------------------5----------------------------------------------------------------------------------------------*/


function isNumeroPerfeito(numero) {
  let somaFatores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      somaFatores += i;
    }
  }

  return somaFatores === numero;
}

function mostrarNumerosPerfeitosAteN(n) {
  for (let i = 1; i <= n; i++) {
    if (isNumeroPerfeito(i)) {
      console.log(i);
    }
  }
}

const n = parseInt(prompt("Digite um número inteiro:"));

console.log("Números perfeitos até " + n + ":");

mostrarNumerosPerfeitosAteN(n);