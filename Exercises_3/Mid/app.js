
const heading = document.querySelector("h1");
const p = document.querySelector("p");

//? Ex4: Count words
const wordCount = p.innerHTML.trim().split(" ").length;
//? insertAdjacentElement Values: 
// element.insertAdjacentElement//*("beforebegin", newElement);
// element.insertAdjacentElement//*("afterbegin", newElement);
// element.insertAdjacentElement//*("beforeend", newElement);
// element.insertAdjacentElement//*("afterend", newElement);

//? Ex1 Highlight words over 8 characters.
const highlighted = p.innerHTML.split(" ").map(
    (word) => {
        // Strip punctuation to accurately test length
        const cleanWord = word.replace(/[^\w]/g, '');
        if (cleanWord.length > 8)
            return `<mark>${word}</mark>`;
        return word;
    }
). join (' ');
p.innerHTML = highlighted;

//? Ex3: Put each sentence on a new line
const formatted = p.innerHTML.split (".").join (".<br/>");
p.innerHTML = formatted;

//? Ex2: Display google link after heading
const link = document.createElement("a");
link.href = "https://google.com/";
link.textContent = "https://google.com/";
heading.insertAdjacentElement("afterend", link);

//? Ex4: Display words count after heading 
const countElement = document.createElement("p");
countElement.textContent = `Word Count: ${wordCount}`;
heading.insertAdjacentElement("afterend", countElement);

