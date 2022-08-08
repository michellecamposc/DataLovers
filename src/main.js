import data from "./data/harrypotter/harry.js";

import {filterHouse, filterSpecies} from "./data.js";

import { sortDataUp, sortDataDown } from "./data.js";


const characters = data.characters;
const potions = data.potions;
const spells =  data.spells;
const books = data.books;


console.log(filterHouse(characters, "Gryffindor"));
console.log(filterHouse(characters, "Slytherin"));
console.log(filterHouse(characters, "Ravenclaw"));
console.log(filterHouse(characters, "Hufflepuff"));



//Crear un elemento: document.createElement("elemento")
//Añadir class a un elemento: element.classList.add("className")
//Escribir texto en un elemento: element.textContent = texto
//Añadir un elemento a otro: parent.appendChild("element")
//Fragmentos de código: document.createDocumentFragment()

//Mostrar todos los personajes
const charactersContainer = document.getElementById("charactersContainer");
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
  });
  charactersContainer.appendChild(divCharacters);
}
showCharacters();

//Mostrar ordenado de la A-Z la información
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
// console.log(filterSpecies(characters, "Human"));

//Crear un elemento: document.createElement("elemento")
//Añadir class a un elemento: element.classList.add("className")
//Escribir texto en un elemento: element.textContent = texto
//Añadir un elemento a otro: parent.appendChild("element")
//Fragmentos de código: document.createDocumentFragment()

// const charactersContainer = document.getElementById("charactersContainer");
// function showCharacters() {
//   const divCharacters = document.createElement("div");
//   characters.forEach((characters) => {
//     const name = document.createElement("h2");
//     name.classList.add("divName");
//     name.textContent = "Name: " + characters.name;
//     divCharacters.appendChild(name);

//     const gender = document.createElement("p");
//     gender.classList.add("divGender");
//     gender.textContent = "Gender: " + characters.gender;
//     divCharacters.appendChild(gender);

//     const house = document.createElement("p");
//     house.classList.add("divHouse");
//     house.textContent = "House: " + characters.house;
//     divCharacters.appendChild(house);

//     const species = document.createElement("p");
//     species.classList.add("divSpecies");
//     species.textContent = "Specie: " + characters.species;
//     divCharacters.appendChild(species);

//     const birth = document.createElement("p");
//     birth.classList.add("divBirth");
//     birth.textContent = "Date birth: " + characters.birth;
//     divCharacters.appendChild(birth);
//   });
//   charactersContainer.appendChild(divCharacters);
// }
// showCharacters();

function filterByHouses(){
  const houseSelect = document.getElementById("houses");
  houseSelect.addEventListener("change", function(){
    const byHouse = houseSelect.options[houseSelect.selectIndex];
    const resultHouse = filterHouse(characters,byHouse);

    const charactersContainer = document.getElementById("charactersContainer");
    charactersContainer.innerHTML = "";

    const divCharacters = document.createElement("div");
    divCharacters.classList.add("divCharacters");
    resultHouse.forEach((characters) => {
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
        });
        charactersContainer.appendChild(divCharacters);
        console.log(resultHouse);
  })
}
window.addEventListener("load", filterByHouses);

// var x = document.getElementById("houses").options[2];
// console.log(x);

// //  707 personajes
// function createCharacters(){
//   document.getElementById("houses").addEventListener("change", showCharacters, false);
// }
// function showCharacters(){
//   const resultHouse = filterHouse(characters);
//   const divCharacters = document.createElement("div");
//   resultHouse.forEach((characters) => {
//     const card1 = document.createElement("div");
//     card1.classList.add("divCard1");
//     divCharacters.appendChild(card1);

//     const name = document.createElement("h2");
//     name.classList.add("divName");
//     name.textContent = "Name: " + characters.name;
//     card1.appendChild(name);

//     const gender = document.createElement("p");
//     gender.classList.add("divGender");
//     gender.textContent = "Gender: " + characters.gender;
//     card1.appendChild(gender);

//     const house = document.createElement("p");
//     house.classList.add("divHouse");
//     house.textContent = "House: " + characters.house;
//     card1.appendChild(house);

//     const species = document.createElement("p");
//     species.classList.add("divSpecies");
//     species.textContent = "Specie: " + characters.species;
//     card1.appendChild(species);

//     const birth = document.createElement("p");
//     birth.classList.add("divBirth");
//     birth.textContent = "Date birth: " + characters.birth;
//     card1.appendChild(birth);
//   });
//   charactersContainer.appendChild(divCharacters);
//   console.log(characters);
  
//     }
//     window.addEventListener("load", createCharacters, false);



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
//Fragmentos de código: document.createDocumentFragment()

// const charactersContainer = document.getElementById("charactersContainer");
// function showCharacters() {
//   const divCharacters = document.createElement("div");
//   divCharacters.classList.add("divCharacters");
//   characters.forEach((characters) => {
//     const card1 = document.createElement("div");
//     card1.classList.add("divCard1");
//     divCharacters.appendChild(card1);
      
//     const name = document.createElement("h2");
//     name.classList.add("divName");
//     name.textContent = "Name: " + characters.name;
//     card1.appendChild(name);
      
//     const gender = document.createElement("p");
//     gender.classList.add("divGender");
//     gender.textContent = "Gender: " + characters.gender;
//     card1.appendChild(gender);
      
//     const house = document.createElement("p");
//     house.classList.add("divHouse");
//     house.textContent = "House: " + characters.house;
//     card1.appendChild(house);
      
//     const species = document.createElement("p");
//     species.classList.add("divSpecies");
//     species.textContent = "Specie: " + characters.species;
//     card1.appendChild(species);
      
//     const birth = document.createElement("p");
//     birth.classList.add("divBirth");
//     birth.textContent = "Date birth: " + characters.birth;
//     card1.appendChild(birth);
//   });
//   charactersContainer.appendChild(divCharacters);
// }
// showCharacters();