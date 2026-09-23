let input = prompt ("Enter any number");

if (input === null)
    alert ("Canceled");

let num = Number (input);
let allNum = "";
let counter = 0;
let sum = 0;
let average;



for (let i = 0; i <= num; i++)
{
    if (i != num)
        allNum += (i + " + ");
    else
        allNum += (i + " =");
    sum += i;
    counter += 1;
}

average = sum / counter;

console.log("Avarage is => ", average);