let availableBooks = ["Clean Code", "JS for Beginners", "C# in Depth", "Web Design"];
let bookPrices = [20, 15, 30, 10];

const form = document.getElementById("membership-form");

const validateMemship = (memshipType, memshipError) => {
  const formattedType = memshipType?.trim().toLowerCase();

  if (!formattedType || (formattedType !== "student" && formattedType !== "regular")) {
    if (memshipError) {
      memshipError.textContent = "Please select a valid membership type.";
    }
    return false;
  }

  return true;
};

const bookExist = (bookTitle, bookTitleError) => {
  const index = availableBooks.findIndex(
    (book) => book.trim().toLowerCase() === bookTitle.toLowerCase()
  );

  if (index === -1 && bookTitleError) {
    bookTitleError.textContent = "Book is out of stock.";
    return false;
  }

  return true;
};

//* Using createTextNode will make it not delete strong and replace it just append
//* instead of using textContent
const displayUserCard = (userData) => {
    const card = document.getElementById ("result-card");
    card.classList.remove ("hidden" );
    card.classList.add ("visible");

    //? Card Data
    const uname = userData[0];
    const memshipType = userData[1];
    const bookGenre = userData[2];
    const bookTitle = userData[3];


    // Username
    const unameP = document.createElement ("p");
    const unameStrong = document.createElement ("strong");
    unameStrong.textContent = "Username: "
    unameP.append (unameStrong);
    unameP.appendChild (document.createTextNode (uname));
    card.appendChild (unameP);  
 
    // Membership
    const memP = document.createElement ("p");
    const memStrong = document.createElement ("strong");
    memStrong.textContent = "Membership Type: "
    memP.append (memStrong);
    memP.appendChild (document.createTextNode (memshipType));
    card.appendChild (memP);

    // Book Genre
    const genreP = document.createElement ("p");
    const genreStrong = document.createElement ("strong");
    genreStrong.textContent = "Book Genre: ";
    genreP.append (genreStrong);
    genreP.appendChild (document.createTextNode (bookGenre));
    card.appendChild (genreP);

    // Book 
    const titleP = document.createElement ("p");
    const titleStrong = document.createElement ("strong");
    titleStrong.textContent = "Book Genre: ";
    titleP.append (titleStrong);
    titleP.appendChild (document.createTextNode (bookTitle));
    card.appendChild (titleP);   
}


form.addEventListener("submit", (event) => {

  event.preventDefault();

  const memshipError = document.getElementById("memshipError");
  const bookTitleError = document.getElementById("bookTitleError");

  memshipError.textContent = "";
  bookTitleError.textContent = "";

  const uname = document.getElementById("uname").value.trim();
  const memshipType = document.getElementById("memship").value;
  const bookGenre = document.getElementById("genre").value.trim();
  const bookTitle = document.getElementById("title").value.trim();

  if (!validateMemship(memshipType, memshipError)) {
    return;
  }

  if (!bookExist(bookTitle, bookTitleError)) {
    return;
  }

  const userData = [
    uname,
    memshipType.toLowerCase(),
    bookGenre,
    bookTitle
  ];

  displayUserCard (userData);

  form.reset();
});

// //* Applying discount based on membership type.
// const applyDiscount = (userData) => {
//     if (!userData || !Array.isArray(userData) || !userData[1])
//         return [];

//     let newArr = [...userData];

//     if (userData[1] === "student")
//         newArr.push("20% Discount");
//     else
//         newArr.push("No Discount");
//     return newArr;
// }

// userData = applyDiscount(userData);

// const addNewGenre = (genre) => {
//     availableGenres.push(genre);
// }

// for (let genre of availableGenres) {
//     console.log(`- We: offer: [${genre}]`);
// }


// const startShopping = () => {
//     let cartBooks = [];
//     let cartPrices = [];
//     let itemNumber = 1;
//     let index;

//     let input = prompt(`Enter Book[${itemNumber}] name (or type 'checkout' to finish)`);
//     while (input != null && input.trim().toLowerCase() !== "checkout") {
//         const userSearch = input.trim ().toLowerCase ();

//         index = availableBooks.findIndex(
//             (book) => book.trim ().toLowerCase () === userSearch);

//         if (index === -1)
//             alert("Book is out of stock.")
//         else {
//             cartBooks.push(availableBooks[index]);
//             cartPrices.push(bookPrices[index]);
//             itemNumber++;
//         }

//         input = prompt(`Enter Book[${itemNumber}] name (or type 'checkout' to finish)`);

//     }
//     return [cartBooks, cartPrices];
// }

// const calculateTotal = (pricesArray, membershipType) => {
//     let total = 0;
    
//     for (let price of pricesArray)
//         total += price;
//     if (membershipType === "student")
//         total -= (total * 0.20);
//     return total;
// }

// const validMembership = getValidMembership (membershipType);
// const cart = startShopping();
// let cartBooks = cart[0];
// let cartPrices = cart[1];
// let total = calculateTotal (cartPrices, membershipType);

// console.log("========[ Bonus ]========");
// console.log(`Username: ${userData[0]} | Membership type: ${membershipType}`);
// itemNumber = 1;
// for (let book of cartBooks)
//     console.log(`${itemNumber}- ${book}`);
// console.log(`Total Price: ${total}`);
