const header = document.querySelector ("h1");
const form = document.querySelector("form");
const unameInput = document.getElementById("uname");
const passInput = document.getElementById("pass");
const confPassInput = document.getElementById("confPass");
const button = document.querySelector("button");
button.disabled = true;

const unameLabel = document.createElement("label");
unameLabel.textContent = "Username:";
unameLabel.setAttribute("for", "uname");;
unameInput.parentNode.insertBefore(unameLabel, unameInput);

const passLabel = document.createElement("label");
passLabel.textContent = "Password:";
passLabel.setAttribute("for", "pass");;
passInput.parentNode.insertBefore(passLabel, passInput);

const confPassLabel = document.createElement("label");
confPassLabel.textContent = "ConfirmPassword:";
confPassLabel.setAttribute("for", "confPass");;
confPassInput.parentNode.insertBefore(confPassLabel, confPassInput);

const isValidInput = (value) => {
    if (!value || value.trim() === "")
        return false;
    return true;
}

const handlePasswordMismatch = (password, confPassword) => {
    const existError = confPassInput.nextElementSibling;
    const isErrorPresent = existError && existError.classList.contains("err-msg");

    if (password !== confPassword) {
        if (!isErrorPresent) {
            const errMsg = document.createElement("span");
            errMsg.textContent = "Passwords do not match";
            errMsg.style.color = "red";
            errMsg.classList.add("err-msg");
            confPassInput.parentNode.insertBefore(errMsg, existError);
        }
        return true;
    }
    else
        if (isErrorPresent)
            existError.remove();
    return false;
}

const validateForm = () => {
    const uname = unameInput.value;
    const password = passInput.value;
    const confPassword = confPassInput.value;

    const isValidUsername = isValidInput(uname);
    const isValidPass = isValidInput(password);
    const isValidConfPass = isValidInput(confPassword);
    const isPassMismatch = handlePasswordMismatch (password, confPassword);

    const isFormValid = isValidUsername && isValidPass && isValidConfPass && !isPassMismatch;
    
    button.disabled = !isFormValid;
}

form.addEventListener("input", validateForm);


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const successMsg = document.createElement ("span");
    successMsg.textContent = "Form Submited Successfully!";
    successMsg.style.color = "#00c24e";
    header.parentNode.insertBefore (successMsg, form);

    form.reset();
    
    button.disabled = true;
});




