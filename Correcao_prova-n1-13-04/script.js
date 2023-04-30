// Q.1
console.log("Q.1\n");

let input = prompt("Escreva um número: ");

input = parseInt(input);

if (input % 2 == 0)
    console.log(`${input} é par.`);
else
    console.log(`${input} é impar.`);

// ---------------------------------------------------------------------------------------------------------------------------- //
// Q.2
console.log("\nQ.2\n");

input = prompt("Escreva um número: ");
input = parseInt(input);

let i = 0;

while (i <= input)
{
    if (i % 2 == 0)
        console.log(i);
    i++;
}

// ---------------------------------------------------------------------------------------------------------------------------- //
// Q.3
console.log("\nQ.3\n");

let celcius = prompt("Escreva uma temperatura em celcius: ");
celcius = parseInt(celcius);

let fahrenheit = (celcius * 9/5) + 32;
console.log(`${celcius}°c é ${fahrenheit}°f.`);

// ---------------------------------------------------------------------------------------------------------------------------- //
// Q.4
console.log("\nQ.4\n");

input = prompt("Escreva uma frase: ");
let letras = 0;

console.log(`A frase ${input} têm ${input.length} letras (contando espaços).`);

for (let l = 0; l < input.length; l++)
{
    if (input[l] != ' ')
        letras++;
}

console.log(`E têm ${letras} letras (sem contar espaços).`);

// ---------------------------------------------------------------------------------------------------------------------------- //
// Q.5
console.log("\nQ.5\n");

let dia = 0;

do
{
    dia = prompt("Escreva um número de 1 a 7: ");
    dia = parseInt(dia);

    if (dia < 0 || dia > 7)
        console.log(`${dia} não é um número entre 1 e 7!`);
    else
        break;
    
} while (true);

switch (dia)
{
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda");
        break;

    case 3:
        console.log("Terça");
        break;

    case 4:
        console.log("Quarta");
        break;
    
    case 5:
        console.log("Quinta");
        break;

    case 6:
        console.log("Sexta");
        break;

    case 7:
        console.log("Sábado");
        break;
}