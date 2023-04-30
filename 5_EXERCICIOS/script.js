console.log("6.\n");

let string = "Hello World!";
let temDinheiro = false;
let decimal = 5.3256;
let inteiro = 10;

// ----------------------------------------------------------------------------- //
console.log("\n7.\n");
// ----------------------------------------------------------------------------- //

let age = 24;

if (age >= 18)
    console.log("Come in.");

else
    console.log("Go away.");

// ----------------------------------------------------------------------------- //
console.log("\n8.\n");
// ----------------------------------------------------------------------------- //

const name = "Emilly";

if (name == "Emilly")
    console.log("Welcome Emilly!");

// ----------------------------------------------------------------------------- //
console.log("\n9.\n");
// ----------------------------------------------------------------------------- //

console.log(Math.pow(2, 2));
console.log(Math.pow(3, 2));
console.log(Math.pow(18, 2));

// ----------------------------------------------------------------------------- //
console.log("\n10.\n");
// ----------------------------------------------------------------------------- //

let carVelocity = 200;

if (carVelocity > 80)
    console.log("You're going above the speed limit!");

else if (carVelocity < 80)
    console.log("You're too slow!");

// ----------------------------------------------------------------------------- //
console.log("\n11.\n");
// ----------------------------------------------------------------------------- //

let hasCNH = true;
age = 23;

if (age > 18 && hasCNH)
    console.log("You can drive!");

else if (age > 18 && hasCNH == false)
    console.log("You can't drive!");

else if (age < 18 && hasCNH == false)
    console.log("You definetly can't drive!");

// ----------------------------------------------------------------------------- //
console.log("\n12.\n");
// ----------------------------------------------------------------------------- //

let j = 0;

while (j <= 10)
{
    console.log(j);
    j++;
}

// ----------------------------------------------------------------------------- //
console.log("\n13.\n");
// ----------------------------------------------------------------------------- //

for (let i = 100; i >= 50; i--)
    console.log(i);

// ----------------------------------------------------------------------------- //
console.log("\n14.\n");
// ----------------------------------------------------------------------------- //

for (let i = 0; i <= 50; i++)
{
    if (i % 2 == 0)
        console.log(`${i} is even.`);

    else
        console.log(`${i} is odd.`);
}

// ----------------------------------------------------------------------------- //
console.log("\n15.CHALLENGE!!!!!!\n");
// ----------------------------------------------------------------------------- //

let input;

do
{
    input = prompt('Type a number (or type "exit" to leave): ');

    if (input == "exit")
        break;

    input = parseInt(input);

    if (input <= 1)
    {
        console.log(`${input} is not a prime number.`);
        continue;
    }

    else if (input == 2)
    {
        console.log(`${input} is a prime number.`);
        continue;
    }

    // Check if input is divisible by other numbers.
    let isPrime = true;

    for (let i = 2; i < input - 1; i++)
    {
        if (input % i == 0)
        {
            console.log(`${input} is not a prime number.`);
            isPrime = false;
            break;
        }
    }

    if (isPrime)
        console.log(`${input} is a prime number.`);

} while (true)
