console.log("Escreva um loop for que imprima os números de 1 a 10.");
console.log(" ");

for (let i = 1; i <= 10; i++)
    console.log(i);

console.log(" ");
console.log("Escreva um loop for que imprima os números pares de 0 a 20.");
console.log(" ");

for (let i = 0; i <= 20; i += 2)
    console.log(i);

console.log(" ");
console.log("Escreva um loop for que imprima os números ímpares de 1 a 19.");
console.log(" ");

for (let i = 1; i <= 19; i += 2)
    console.log(i);

console.log(" ");
console.log("Escreva um loop for que imprima os números de 20 a 1 (em ordem decrescente).");
console.log(" ");

for (let i = 20; i >= 1; i--)
    console.log(i);

console.log(" ");
console.log("Escreva um loop for que imprima os números de 1 a 20, mas para os múltiplos de 3 imprima \"Fizz\" em vez do número,");
console.log("e para os múltiplos de 5 imprima \"Buzz\". Para os números que são múltiplos de 3 e 5, imprima \"FizzBuzz\".");
console.log(" ");

for (let i = 1; i <= 20; i++)
{
    if ( (i % 3) == 0 && (i % 5) == 0 )
        console.log(`FizzBuzz. ${i}`);

    else if ( (i % 3) == 0 )
        console.log(`Fizz. ${i}`);

    else if ( (i % 5) == 0 )
        console.log(`Buzz. ${i}`);

    else
        console.log(i);
}
