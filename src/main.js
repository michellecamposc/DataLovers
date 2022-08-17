import data from "./data/harrypotter/harry.js";
import {
  sortDataUp,
  sortDataDown,
  filterHouse,
  filterHuman,
  filterMagical,
  recentBooks,
  olderBooks,
} from "./data.js";

//Here is the first page (Characters)
const characters = data.characters;
const charactersContainer = document.getElementById("charactersContainer");

function getCards(arrData) {
  const arrResult = [];
  const divCharacter = document.createElement("div");
  divCharacter.classList.add("divCharacters");
  arrData.forEach((element) => {
    const card1 = document.createElement("div");
    card1.classList.add("divCard1");
    if (element.house === "Gryffindor") {
      card1.classList.add("gryffindorCard");
    }
    if (element.house === "Slytherin") {
      card1.classList.add("slytherinCard");
    }
    if (element.house === "Ravenclaw") {
      card1.classList.add("ravenclawCard");
    }
    if (element.house === "Hufflepuff") {
      card1.classList.add("hufflepuffCard");
    }
    if (element.house === null) {
      card1.classList.add("nullCard");
    }
    divCharacter.appendChild(card1);

    const name = document.createElement("h2");
    name.classList.add("divName");
    name.textContent = "Name: " + element.name;
    card1.appendChild(name);

    const gender = document.createElement("p");
    gender.classList.add("divGender");
    gender.textContent = "Gender: " + element.gender;
    card1.appendChild(gender);

    const house = document.createElement("p");
    house.classList.add("divHouse");
    house.textContent = "House: " + element.house;
    card1.appendChild(house);

    const species = document.createElement("p");
    species.classList.add("divSpecies");
    species.textContent = "Specie: " + element.species;
    card1.appendChild(species);

    const birth = document.createElement("p");
    birth.classList.add("divBirth");
    birth.textContent = "Date birth: " + element.birth;
    card1.appendChild(birth);

    const ancestry = document.createElement("p");
    ancestry.classList.add("divAncestry");
    ancestry.textContent = "Ancestry: " + element.ancestry;
    card1.appendChild(ancestry);

    arrResult.push(divCharacter);
  });
  return arrResult;
}

//ShowCharacters function
function showCharacters() {
  const divCharacters = document.createElement("div");
  divCharacters.classList.add("divCharacters");
  characters.forEach((character) => {
    const card1 = document.createElement("div");
    card1.classList.add("divCard1");
    if (character.house === "Gryffindor") {
      card1.classList.add("gryffindorCard");
    }
    if (character.house === "Slytherin") {
      card1.classList.add("slytherinCard");
    }
    if (character.house === "Ravenclaw") {
      card1.classList.add("ravenclawCard");
    }
    if (character.house === "Hufflepuff") {
      card1.classList.add("hufflepuffCard");
    }
    if (character.house === null) {
      card1.classList.add("nullCard");
    }
    divCharacters.appendChild(card1);

    const name = document.createElement("h2");
    name.classList.add("divName");
    name.textContent = "Name: " + character.name;
    card1.appendChild(name);

    const gender = document.createElement("p");
    gender.classList.add("divGender");
    gender.textContent = "Gender: " + character.gender;
    card1.appendChild(gender);

    const house = document.createElement("p");
    house.classList.add("divHouse");
    house.textContent = "House: " + character.house;
    card1.appendChild(house);

    const species = document.createElement("p");
    species.classList.add("divSpecies");
    species.textContent = "Specie: " + character.species;
    card1.appendChild(species);

    const birth = document.createElement("p");
    birth.classList.add("divBirth");
    birth.textContent = "Date birth: " + character.birth;
    card1.appendChild(birth);

    const ancestry = document.createElement("p");
    ancestry.classList.add("divAncestry");
    ancestry.textContent = "Ancestry: " + character.ancestry;
    card1.appendChild(ancestry);
  });
  charactersContainer.appendChild(divCharacters);
}
showCharacters();

//Display information with sortData function
const orderCharacters = document.getElementById("order");
orderCharacters.addEventListener("change", function () {
  if (orderCharacters.value === "order-up") {
    sortDataUp(characters);
    charactersContainer.innerHTML = " ";
    showCharacters();
  } else if (orderCharacters.value === "order-down") {
    sortDataDown(characters);
    charactersContainer.innerHTML = " ";
    showCharacters();
  }
});

// Filter by houses
const houseSelect = document.getElementById("houses");
houseSelect.addEventListener("change", function () {
  if (houseSelect.value === "Gryffindor") {
    charactersContainer.innerHTML = " ";
    const gryffindorHouse = filterHouse(characters, "Gryffindor");
    const gryffindorResult = getCards(gryffindorHouse);
    gryffindorResult.forEach((element) => {
      charactersContainer.appendChild(element);
    });
  } else if (houseSelect.value === "Slytherin") {
    charactersContainer.innerHTML = " ";
    const slytherinHouse = filterHouse(characters, "Slytherin");
    const slytherinResult = getCards(slytherinHouse);
    slytherinResult.forEach((element) => {
      charactersContainer.appendChild(element);
    });
  } else if (houseSelect.value === "Ravenclaw") {
    charactersContainer.innerHTML = " ";
    const ravenclawHouse = filterHouse(characters, "Ravenclaw");
    const ravenclawResult = getCards(ravenclawHouse);
    ravenclawResult.forEach((element) => {
      charactersContainer.appendChild(element);
    });
  } else if (houseSelect.value === "Hufflepuff") {
    charactersContainer.innerHTML = " ";
    const hufflepuffHouse = filterHouse(characters, "Hufflepuff");
    const hufflepuffResult = getCards(hufflepuffHouse);
    hufflepuffResult.forEach((element) => {
      charactersContainer.appendChild(element);
    });
  } else if (houseSelect.value === "AllHouses") {
    charactersContainer.innerHTML = " ";
    showCharacters();
  }
});

//Filter by species
const specieSelect = document.getElementById("species");
specieSelect.addEventListener("change", function () {
  if (specieSelect.value === "Humans") {
    charactersContainer.innerHTML = " ";
    const humanSpecie = filterHuman(characters);
    const humanResult = getCards(humanSpecie);
    humanResult.forEach((element) => {
      charactersContainer.appendChild(element);
    });
  } else if (specieSelect.value === "Magical") {
    charactersContainer.innerHTML = " ";
    const otherSpecies = filterMagical(characters);
    const otherResult = getCards(otherSpecies);
    otherResult.forEach((element) => {
      charactersContainer.appendChild(element);
    });
  } else if (specieSelect.value === "allSpecies") {
    charactersContainer.innerHTML = " ";
    showCharacters();
  }
});

//Here is the four page (Books)
const books = data.books;
const booksContainer = document.getElementById("books-container");
//Function show books
function showHarryBooks() {
  const divBook = document.createElement("div");
  divBook.classList.add("divBook");
  books.forEach((books) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    divBook.appendChild(bookCard);

    const bookImg = document.createElement("img");
    bookImg.classList.add("divImgBook");
    bookImg.src = books.image;
    bookCard.appendChild(bookImg);

    const title = document.createElement("h2");
    title.classList.add("divBookTitle");
    title.textContent = books.title;
    bookCard.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("divContent");
    author.textContent = "Author: " + books.author;
    bookCard.appendChild(author);

    const releaseDay = document.createElement("p");
    releaseDay.classList.add("divContent");
    releaseDay.textContent = "Release day: " + books.releaseDay;
    bookCard.appendChild(releaseDay);

    const description = document.createElement("p");
    description.classList.add("divContent");
    description.textContent = "Description: " + books.description;
    bookCard.appendChild(description);
  });
  booksContainer.appendChild(divBook);
}
showHarryBooks();

//Sort books function
const sortBooks = document.getElementById("books");
sortBooks.addEventListener("change", function () {
  if (sortBooks.value === "order-oldest") {
    olderBooks(books);
    booksContainer.innerHTML = " ";
    showHarryBooks();
  } else if (sortBooks.value === "order-recent") {
    recentBooks(books);
    booksContainer.innerHTML = " ";
    showHarryBooks();
  }
});

//Go to characters page with a click event
document
  .getElementById("first-button")
  .addEventListener("click", charactersPage);

function charactersPage() {
  // Hide the first page
  document.getElementById("first-page").style.display = "none";
  // Show the second page
  document.getElementById("second-page").style.display = "block";
}

//Go to books page with a click event
document.getElementById("fourth-button").addEventListener("click", booksPage);

function booksPage() {
  // Hide the first page
  document.getElementById("first-page").style.display = "none";
  // Show the second page
  document.getElementById("fourth-page").style.display = "block";
}

