let input;
let num;

do {
    input = prompt ("Enter a number between [ 0 and 100 ]");
    if (input === null)
    {
        alert ("Error");
        break;
    }
    num = Number (input);
    if (input.trim() = "" || isNaN () || num < 0 || num > 100)
        alert ("Error: Invalid number");
} while (input.trim() = "" || isNaN () || num < 0 || num > 100)