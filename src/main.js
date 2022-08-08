import data from "./data/harrypotter/harry.js";

import {filterHouse, filterSpecies} from "./data.js";

const characters = data.characters;
const potions = data.potions;
const spells =  data.spells;
const books = data.books;


console.log(filterHouse(characters, "Gryffindor"));
console.log(filterHouse(characters, "Slytherin"));
console.log(filterHouse(characters, "Ravenclaw"));
console.log(filterHouse(characters, "Hufflepuff"));

// console.log(filterSpecies(characters, "Human"));

// function filterByHouses(){
//   const houseSelect = document.getElementById("houses");
//   houseSelect.addEventListener("change", function(event){ console.log
//     const byHouse = houseSelect.options[houseSelect.selectIndex];
//     const resultHouse = filterHouse(characters,byHouse);

//     const charactersContainer = document.getElementById("charactersContainer");
//     charactersContainer.innerHTML = "";

//     const divCharacters = document.createElement("div");
//     divCharacters.classList.add("divCharacters");
//     resultHouse.forEach((characters) => {
//           const card1 = document.createElement("div");
//           card1.classList.add("divCard1");
//           divCharacters.appendChild(card1);
      
//           const name = document.createElement("h2");
//           name.classList.add("divName");
//           name.textContent = "Name: " + characters.name;
//           card1.appendChild(name);
      
//           const gender = document.createElement("p");
//           gender.classList.add("divGender");
//           gender.textContent = "Gender: " + characters.gender;
//           card1.appendChild(gender);
      
//           const house = document.createElement("p");
//           house.classList.add("divHouse");
//           house.textContent = "House: " + characters.house;
//           card1.appendChild(house);
      
//           const species = document.createElement("p");
//           species.classList.add("divSpecies");
//           species.textContent = "Specie: " + characters.species;
//           card1.appendChild(species);
      
//           const birth = document.createElement("p");
//           birth.classList.add("divBirth");
//           birth.textContent = "Date birth: " + characters.birth;
//           card1.appendChild(birth);
//         });
//         charactersContainer.appendChild(divCharacters);
//         console.log(resultHouse);
//   })
// }
// window.addEventListener("load", filterByHouses);


// //  707 personajes
// function createCharacters(){
//   document.getElementById("houses").addEventListener("change", showCharacters);
// }
// function showCharacters(){
//   const resultHouse = filterHouse(characters);
//   const divCharacters = document.createElement("div");
//   divCharacters.classList.add("divCharacters");
//   resultHouse.forEach((characters) => {
//     const card1 = document.createElement("div");
//           card1.classList.add("divCard1");
//           divCharacters.appendChild(card1);
      
//           const name = document.createElement("h2");
//           name.classList.add("divName");
//           name.textContent = "Name: " + characters.name;
//           card1.appendChild(name);
      
//           const gender = document.createElement("p");
//           gender.classList.add("divGender");
//           gender.textContent = "Gender: " + characters.gender;
//           card1.appendChild(gender);
      
//           const house = document.createElement("p");
//           house.classList.add("divHouse");
//           house.textContent = "House: " + characters.house;
//           card1.appendChild(house);
      
//           const species = document.createElement("p");
//           species.classList.add("divSpecies");
//           species.textContent = "Specie: " + characters.species;
//           card1.appendChild(species);
      
//           const birth = document.createElement("p");
//           birth.classList.add("divBirth");
//           birth.textContent = "Date birth: " + characters.birth;
//           card1.appendChild(birth);
//         });
//         charactersContainer.appendChild(divCharacters);
//   console.log(characters);
  
//     }
//     window.addEventListener("load", createCharacters);


// const booksYear = data.books;
// console.log(data.books[5].id);

//Se puede acceder al alemento de un arreglo
// let booksTitle = data.books[0].title;
// console.log(booksTitle);

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