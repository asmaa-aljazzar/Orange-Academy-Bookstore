let uname = prompt("What is your name?");
if (uname && uname !== "")
    uname = uname.trim ();
let membershipType;
let userBook = [];

do {
    membershipType = prompt("Choose a membership type: Student / Regular");
    if (membershipType !== "")
        membershipType = membershipType.toLocaleLowerCase().trim();
}
while (!membershipType || membershipType === "" || (membershipType !== "student" && membershipType !== "regular"));

const validateMembership = (membershipType, uname) =>{
    if (membershipType === "student" && uname !== "")
        alert("Welcome " + uname + " You are a Scholar");
    else
        alert("Welcome " + uname + " You are a Member");
}

validateMembership (membershipType, uname);

let bookGenre = prompt("Choose Fiction, Non-Fiction genre");
if (bookGenre && bookGenre !== "")
    bookGenre = bookGenre.trim ();

let bookTitle = prompt("Enter the book title");
if (bookTitle && bookTitle != "")
    alert("Your request to borrow" + bookTitle + "has been reserved");

if (uname && uname !== "")
    console.log("Username: " + uname);

if (bookTitle && bookTitle !== "")
    console.log("Book title: " + bookTitle);

const collectData = (uname, membershipType, bookGenre, bookTitle) => {
    if (uname != "" && uname
        && membershipType
        && bookGenre && bookGenre != "" 
        && bookTitle && bookTitle != "")
        return [uname, membershipType, bookGenre, bookTitle];
    return [];
}

userBook = collectData (uname, membershipType, bookGenre, bookTitle);

let i = 0;
while (i < userBook.length){
    console.log(userBook[i]);
    i++;
}