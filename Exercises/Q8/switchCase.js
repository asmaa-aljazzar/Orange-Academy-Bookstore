let str = prompt("Enter Any Text");
let result = "";

if (str) {
    let i = 0;
    let char;
    while (i < str.length) {
        char = str[i];
        if (char >= 'a' && char <= 'z')
            result += char.toUpperCase();
        else if (char >= 'A' && char <= 'Z')
            result += char.toLowerCase();
        else
            result += char;
        i++;
    }
}

console.log("Input: " + str);
console.log("Output: " + result);