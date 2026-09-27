const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", (event) => {
    event.preventDefault();
    const myItem = input.value; // Inside listText
    input.value = "";

    const listItem = document.createElement ("li"); // inside list
    const listText = document.createElement ("span"); // inside listItem
    const listButton = document.createElement ("button"); // inside listItem

    listItem.appendChild(listText);
    listItem.appendChild(listButton);
    listText.textContent = myItem;
    listButton.textContent = "Delete";
    list.appendChild(listItem);

    listItem.addEventListener("click", () => {
        listItem.style.color = "red";
    });


    listButton.addEventListener("click", () => {
        list.removeChild(listItem);
    });
});
