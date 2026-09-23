let num;
do {
    num = prompt ("Enter a number between [ 0 and 100 ]");
    if (num < 0 || num > 100)
        alert ("Error: Invalid number");
} while (num < 0 || num > 100)

for (let i = 0; i <= 20; i += 3)
    result += (i + " ");

console.log(result);