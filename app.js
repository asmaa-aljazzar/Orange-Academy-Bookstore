//* Declerations
let uname = prompt("What is your name?");
if (uname && uname !== "")
    uname = uname.trim();
let membershipType;
let userData = [];
let availableGenres = ["Fiction", "Science", "History", "Biography"];
let availableBooks = ["Clean Code", "JS for Beginners", "C# in Depth", "Web Design"];
let bookPrices = [20, 15, 30, 10];


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
if (bookTitle && bookTitle != "") {
    bookTitle = bookTitle.trim().toLowerCase();
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
    if (!userData || !Array.isArray(userData) || !userData[1])
        return [];

    let newArr = [...userData];

    if (userData[1] === "student")
        newArr.push("20% Discount");
    else
        newArr.push("No Discount");
    return newArr;
}

userData = applyDiscount(userData);

const addNewGenre = (genre) => {
    availableGenres.push(genre);
}

for (let genre of availableGenres) {
    console.log(`- We: offer: [${genre}]`);
}

const getValidMembership = (membershipType) => {
    if (membershipType !== "student" && membershipType !== "regular")
        return "";
    return membershipType;
}

const startShopping = () => {
    let cartBooks = [];
    let cartPrices = [];
    let itemNumber = 1;
    let index;

    let input = prompt(`Enter Book[${itemNumber}] name (or type 'checkout' to finish)`);
    while (input != null && input.trim().toLowerCase() !== "checkout") {
        const userSearch = input.trim ().toLowerCase ();

        index = availableBooks.findIndex(
            (book) => book.trim ().toLowerCase () === userSearch);

        if (index === -1)
            alert("Book is out of stock.")
        else {
            cartBooks.push(availableBooks[index]);
            cartPrices.push(bookPrices[index]);
            itemNumber++;
        }

        input = prompt(`Enter Book[${itemNumber}] name (or type 'checkout' to finish)`);

    }
    return [cartBooks, cartPrices];
}

const calculateTotal = (pricesArray, membershipType) => {
    let total = 0;
    
    for (let price of pricesArray)
        total += price;
    if (membershipType === "student")
        total -= (total * 0.20);
    return total;
}

const validMembership = getValidMembership (membershipType);
const cart = startShopping();
let cartBooks = cart[0];
let cartPrices = cart[1];
let total = calculateTotal (cartPrices, membershipType);

console.log("========[ Bonus ]========");
console.log(`Username: ${userData[0]} | Membership type: ${membershipType}`);
itemNumber = 1;
for (let book of cartBooks)
    console.log(`${itemNumber}- ${book}`);
console.log(`Total Price: ${total}`);
