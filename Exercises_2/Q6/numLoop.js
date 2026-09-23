let input = prompt ("Enter any number");
let num;
let allNum = "";
let sum = 0;

if (input === null)
    alert ("Canceled");

num = Number (input);

for (let i = 0; i <= num; i++)
{
    if (i != num)
        allNum += (i + " + ");
    else
        allNum += (i + " =");
    sum += i;
}

console.log(allNum, sum);