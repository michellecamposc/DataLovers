import data from "./data/harrypotter/harry.js";

import {
  sortDataUp,
  sortDataDown,
  filterHouse,
  filterHuman,
  filterMagical,
} from "./data.js";

const characters = data.characters;
const potions = data.potions;
const spells = data.spells;
const books = data.books;

//Creating HTML elements
const charactersContainer = document.getElementById("charactersContainer");
function getCards(arrData) {
  const arrResult = [];
  const divCharacter = document.createElement("div");
  divCharacter.classList.add("divCharacters");
  arrData.forEach((element) => {
    const card1 = document.createElement("div");
    card1.classList.add("divCard1");
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
  characters.forEach((characters) => {
    const card1 = document.createElement("div");
    card1.classList.add("divCard1");
    divCharacters.appendChild(card1);

    const name = document.createElement("h2");
    name.classList.add("divName");
    name.textContent = "Name: " + characters.name;
    card1.appendChild(name);

    const gender = document.createElement("p");
    gender.classList.add("divGender");
    gender.textContent = "Gender: " + characters.gender;
    card1.appendChild(gender);

    const house = document.createElement("p");
    house.classList.add("divHouse");
    house.textContent = "House: " + characters.house;
    card1.appendChild(house);

    const species = document.createElement("p");
    species.classList.add("divSpecies");
    species.textContent = "Specie: " + characters.species;
    card1.appendChild(species);

    const birth = document.createElement("p");
    birth.classList.add("divBirth");
    birth.textContent = "Date birth: " + characters.birth;
    card1.appendChild(birth);

    const ancestry = document.createElement("p");
    ancestry.classList.add("divAncestry");
    ancestry.textContent = "Ancestry: " + characters.ancestry;
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
    const humanSpecie = filterHuman(characters, "Human");
    const humanResult = getCards(humanSpecie);
    humanResult.forEach((element) => {
      charactersContainer.appendChild(element);
    });
  } else if (specieSelect.value === "Magical") {
    charactersContainer.innerHTML = " ";
    const otherSpecie = filterMagical(characters, "Human");
    const otherResult = getCards(otherSpecie);
    otherResult.forEach((element) => {
      charactersContainer.appendChild(element);
    });
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

//Crear un elemento: document.createElement("elemento")
//Añadir class a un elemento: element.classList.add("className")
//Escribir texto en un elemento: element.textContent = texto
//Añadir un elemento a otro: parent.appendChild("element")
