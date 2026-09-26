const form = document.querySelector ("form");
const unameInput = document.getElementById ("uname");
const passInput = document.getElementById ("pass");
const confPassInput = document.getElementById ("confPass");
const button = document.querySelector ("button");

//? Ex1: Add labels
//setAttribute => (attribute name, attribute value)
const unameLabel = document.createElement ("label");
unameLabel.textContent = "Username:";
unameLabel.setAttribute ("for", "uname");;
// parentNode => Find the parent node that hold that input
//insertBefore => Will go to parent search for the 2nd att and add the 1st att before it.
unameInput.parentNode.insertBefore (unameLabel, unameInput);

const passLabel = document.createElement ("label");
passLabel.textContent = "Password:";
passLabel.setAttribute ("for", "uname");;
passInput.parentNode.insertBefore (passLabel, passInput);

const confPassLabel = document.createElement ("label");
confPassLabel.textContent = "ConfirmPassword:";
confPassLabel.setAttribute ("for", "uname");;
confPassInput.parentNode.insertBefore (confPassLabel, confPassInput);



