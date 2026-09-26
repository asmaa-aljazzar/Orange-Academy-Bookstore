const form = document.querySelector("form");
const unameInput = document.getElementById("uname");
const passInput = document.getElementById("pass");
const confPassInput = document.getElementById("confPass");
const button = document.querySelector("button");

//? Ex1: Add labels
//setAttribute => (attribute name, attribute value)
const unameLabel = document.createElement("label");
unameLabel.textContent = "Username:";
unameLabel.setAttribute("for", "uname");;
// parentNode => Find the parent node that hold that input
//insertBefore => Will go to parent search for the 2nd att and add the 1st att before it.
unameInput.parentNode.insertBefore(unameLabel, unameInput);

const passLabel = document.createElement("label");
passLabel.textContent = "Password:";
passLabel.setAttribute("for", "pass");;
passInput.parentNode.insertBefore(passLabel, passInput);

const confPassLabel = document.createElement("label");
confPassLabel.textContent = "ConfirmPassword:";
confPassLabel.setAttribute("for", "confPass");;
confPassInput.parentNode.insertBefore(confPassLabel, confPassInput);

const requiredMsg = (input, value) => {
    let existingError = input.nextSibling;
    const isErrorPresent = existingError && existingError?.classList?.contains("err-msg");

    if (!value || value.trim() == "") {
        if (!isErrorPresent) {
            const errMsg = document.createElement("span");
            errMsg.textContent = "Required";
            errMsg.style.color = "red";
            errMsg.classList.add("err-msg");
            // nextSibling means go to the next sibling and put it before it
            input.parentNode.insertBefore(errMsg, input.nextSibling);
        }
        return true;
    }
    else
        if (isErrorPresent)
            existingError.remove();
    return false;
}

//? Ex2: Required Input
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const uname = unameInput.value;
    const password = passInput.value;
    const confPassword = confPassInput.value;

    const unameErr = requiredMsg(unameInput, uname);
    const passErr = requiredMsg(passInput, password);
    const confPassErr = requiredMsg(confPassInput, confPassword);

    if (unameErr || passErr || confPassErr)
        return;

    if (notMatchMsg(password, confPassword))
        return;

    form.reset();
});


//? Ex3: Matching password
const notMatchMsg = (password, confPassword) => {
    const existError = confPassInput.nextElementSibling;
    const isErrorPresent = existError && existError.classList.contains("err-msg");

    if (password !== confPassword) {
        if (!isErrorPresent)
        {
            const errMsg = document.createElement ("span");
            errMsg.textContent = "Passwords do not match";
            errMsg.style.color = "red";
            errMsg.classList.add ("err-msg");
            confPassInput.parentNode.insertBefore (errMsg, existError);
        }
            return true;
    }
    else
        if (isErrorPresent)
            existError.remove ();
        return false;
}


