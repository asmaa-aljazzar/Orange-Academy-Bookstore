const uname = prompt ("What is your name?");
let membershipType = prompt ("Choose a membership type: Student / Regular");

if (membershipType)
    membershipType = membershipType.toLocaleLowerCase ().trim ();

if (membershipType === "student")
    alert ("Welcome " + uname + " You are a Scholar");
else if (membershipType === "regular")
    alert ("Welcome " + uname + " You are a Member");
else
    alert("Welcome " + uname)

confirm ("Click OK for Fiction, or Cancel for Non-Fiction");

let bookTitle = prompt ("Enter the book title");

if (bookTitle)
    alert ("Your request to borrow " + bookTitle + "has been reserved");

console.log ("Username: " + uname);
console.log ("Book title: " + bookTitle);