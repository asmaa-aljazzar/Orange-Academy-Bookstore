//* Declerations
let uname = prompt("What is your name?");
if (uname && uname !== "")
    uname = uname.trim();
let membershipType;
let userData = [];
let availableGenres = ["Fiction", "Science", "History", "Biography"];

//* Ask user for membership
do {
    membershipType = prompt("Choose a membership type: Student / Regular");
    if (membershipType && membershipType !== "")
        membershipType = membershipType.toLocaleLowerCase().trim();
}
while (!membershipType || membershipType === "" || (membershipType !== "student" && membershipType !== "regular"));

const validateMembership = (membershipType, uname) => {
    if (membershipType === "student" && uname && uname !== "")
        alert("Welcome " + uname + " You are a Scholar");
    else if (uname && uname !== "")
        alert("Welcome " + uname + " You are a Member");
}

validateMembership(membershipType, uname);

//* Ask user for genre
let bookGenre = prompt("Choose Fiction, Non-Fiction genre");
if (bookGenre && bookGenre !== "")
    bookGenre = bookGenre.trim();

//* Ask user for book title
let bookTitle = prompt("Enter the book title");
if (bookTitle && bookTitle != "")
{
    bookTitle = bookTitle.trim ().toLowerCase ();
    alert(`Your request to borrow ${bookTitle} has been reserved`);
}

console.log("========[ EX1 ]========");
if (uname && uname !== "")
    console.log("Username: " + uname);

if (bookTitle && bookTitle !== "")
    console.log("Book title: " + bookTitle);

//* Save all data in an array
const collectData = (uname, membershipType, bookGenre, bookTitle) => {
    if (uname != "" && uname
        && membershipType
        && bookGenre && bookGenre != ""
        && bookTitle && bookTitle != "")
        return [uname, membershipType, bookGenre, bookTitle];
    return [];
}

userData = collectData(uname, membershipType, bookGenre, bookTitle);

//* Print the array of data
console.log("========[ EX2 ]========");
let i = 0;
while (i < userData.length) {
    console.log(userData[i]);
    i++;
}

//* Applying discount based on membership type.
const applyDiscount = (userData) => {
    if ( !userData  || !Array.isArray(userData) || !userData[1])
        return [];

    let newArr = [...userData];

    if (userData[1] === "student")
        newArr.push ("20% Discount");
    else
        newArr.push ("No Discount");
    return newArr;
}

userData = applyDiscount(userData);

const addNewGenre = (genre) => {
    availableGenres.push (genre);
}

for (genre of availableGenres){
    console.log(`- We: offer: [${genre}]`);
}