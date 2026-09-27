const $ = (id) => { return document.getElementById(id) };

const boldText = () => {
    const textDisplay = $("text-display");

    if (textDisplay.style.fontWeight === "bold")
        textDisplay.style.fontWeight = "normal";
    else
        textDisplay.style.fontWeight = "bold";
}

const italicText = () => {
    const textDisplay = $("text-display");

    if (textDisplay.style.fontStyle === "italic")
        textDisplay.style.fontStyle = "normal";
    else
        textDisplay.style.fontStyle = "italic";
}

const alignLeft = () => {
    const textDisplay = $("text-display");
    textDisplay.style.textAlign = "left";
}

const alignCenter = () => {
    const textDisplay = $("text-display");
    textDisplay.style.textAlign = "center";
}

const alignRight = () => {
    const textDisplay = $("text-display");

    textDisplay.style.textAlign = "right";
}

const upperText = () => {
    const textDisplay = $("text-display");

    textDisplay.textContent = textDisplay.textContent.toUpperCase();
}

const lowerText = () => {
    const textDisplay = $("text-display");

    textDisplay.textContent = textDisplay.textContent.toLowerCase();
}

const capitalizeText = () => {
    const textDisplay = $("text-display");

    textDisplay.textContent = textDisplay.textContent.split(" ").map(
        (word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
}

const clearText = () => {
    const textDisplay = $("text-display");

    textDisplay.textContent = textDisplay.textContent = "";
}

const changeTextColor = () => {
    const textDisplay = $("text-display");
    textDisplay.style.color = $("text-color").value;
}

const changeBackgroundColor = () => {
    const textDisplay = $("text-display");
    textDisplay.style.backgroundColor = $("bg-color").value;
}

const changeFontSize = () => {
    const textDisplay = $("text-display");
    textDisplay.style.fontSize = $("font-size").value + "px";
}

const changeFontFamily = () => {
    const textDisplay = $("text-display");
    textDisplay.style.fontFamily = $("font-family").value;
}




window.addEventListener("DOMContentLoaded", () => {
    $("btn-bold").addEventListener("click", boldText);
    $("btn-italic").addEventListener("click", italicText);
    $("btn-left").addEventListener("click", alignLeft);
    $("btn-center").addEventListener("click", alignCenter);
    $("btn-right").addEventListener("click", alignRight);
    $("btn-uppercase").addEventListener("click", upperText);
    $("btn-lowercase").addEventListener("click", lowerText);
    $("btn-capitalize").addEventListener("click", capitalizeText);
    $("btn-clear").addEventListener("click", clearText);
    $("text-color").addEventListener("input", changeTextColor);
    $("bg-color").addEventListener("input", changeBackgroundColor);
    $("font-size").addEventListener("change", changeFontSize);
    $("font-family").addEventListener("change", changeFontFamily);
})