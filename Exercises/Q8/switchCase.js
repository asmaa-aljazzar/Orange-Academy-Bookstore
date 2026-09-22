let str = prompt("Enter Any Text");
let result = "";

if (str) {
    let char;
    for (let i = 0; i < str.length; i++) {
        char = str[i];
        if (char >= 'a' && char <= 'z')
            result += char.toUpperCase();
        else if (char >= 'A' && char <= 'Z')
            result += char.toLowerCase();
        else
            result += char;
    }
}

console.log("Input: " + str);
console.log("Output: " + result);