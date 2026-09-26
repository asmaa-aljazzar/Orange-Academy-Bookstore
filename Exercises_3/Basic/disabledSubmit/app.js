const form = document.querySelector("form");
const unameInput = document.getElementById("uname");
const passInput = document.getElementById("pass");
const confPassInput = document.getElementById("confPass");
const button = document.querySelector("button");

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
    if (!value || value.trim () === "")
        return false;
    return true;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const uname = unameInput.value;
    const password = passInput.value;
    const confPassword = confPassInput.value;

    const validUsername = isValidInput (uname); 
    const validPass = isValidInput (password); 
    const validConfPass = isValidInput (confPassword); 

    if (!validUsername || !validPass || !validConfPass)
    {
        button.disabled = true;
        return ;
    }

    if (notMatchMsg(password, confPassword))
        return;
    button.disabled = false;
    console.log(`Form Submited: ${uname} ${password} ${confPassword}`);
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


