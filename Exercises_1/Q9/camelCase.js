let str = prompt("Enter any text");
let result = "";

str = str.trim();

if (str) {
    if (str[0] >= 'A' && str[0] <= 'Z')
        result += str[0].toLowerCase();
    else
        result += str[0];

    let char;
    for (let i = 1; i < str.length; i++) {
        char = str[i];
        if (str[i - 1] === " ") {
            if (char !== " " && (char >= 'a' && char <= 'z'))
                result += str[i].toUpperCase();
            else if (char !== " ")
                result += char;
            i++;
        }

    }

}

console.log("Input: " + str);
console.log("Output: " + result);