import data from "./data/harrypotter/harry.js";

import {filterData} from "./data.js";

const characters = data.characters;
console.log(filterData(characters,"Gryffindor"));

//Crear un elemento: document.createElement("elemento")
//Añadir class a un elemento: element.classList.add("className")
//Escribir texto en un elemento: element.textContent = texto
//Añadir un elemento a otro: parent.appendChild("element")
//Fragmentos de código: document.createDocumentFragment()

const charactersContainer = document.getElementById("charactersContainer");
function showCharacters(){
const divCharacters = document.createElement("div");
  characters.forEach(characters => {
    const name = document.createElement("h2");
    name.classList.add("divName");
    name.textContent = characters.name;
    divCharacters.appendChild(name);

    const gender = document.createElement("h3");
    gender.classList.add("divGender");
    gender.textContent = characters.gender;
    divCharacters.appendChild(gender);

    const house = document.createElement("h3");
    house.classList.add("divHouse");
    house.textContent = characters.house;
    divCharacters.appendChild(house);

    const species = document.createElement("p");
    species.classList.add("divSpecies");
    species.textContent = characters.species;
    divCharacters.appendChild(species);

    const birth = document.createElement("p");
    birth.classList.add("divBirth");
    birth.textContent = characters.birth;
    divCharacters.appendChild(birth);
  })
  charactersContainer.appendChild(divCharacters);
}
  showCharacters()


// //.Filter: Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
// const potionName = potions.filter((x) => x.id <= "50");
// //console.log(potionName);

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
document
  .getElementById("fourth-button")
  .addEventListener("click", booksPage);

function booksPage() {
  // Hide the first page
  document.getElementById("first-page").style.display = "none";
  // Show the second page
  document.getElementById("fourth-page").style.display = "block";
}
