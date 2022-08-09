import data from "./data/harrypotter/harry.js";

import {sortDataUp, sortDataDown, filterHouse, filterSpecies} from "./data.js";

const characters = data.characters;
const potions = data.potions;
const spells =  data.spells;
const books = data.books;


console.log(filterHouse(characters, "Gryffindor"));
console.log(filterHouse(characters, "Slytherin"));
console.log(filterHouse(characters, "Ravenclaw"));
console.log(filterHouse(characters, "Hufflepuff"));
console.log(filterSpecies(characters, "Human"));


//Display all characters function
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
houseSelect.addEventListener("change", function(){
    if (houseSelect.value === "Gryffindor"){
    charactersContainer.innerHTML = " ";
    const house1 = filterHouse(characters, "Gryffindor");
    house1.forEach((characters) => {
      
    const divCharacters = document.createElement("div");
    divCharacters.classList.add("divCharacters");
    charactersContainer.appendChild(divCharacters);

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
    
        console.log(house1);
   
  }
  else if (houseSelect.value === "Slytherin"){
    charactersContainer.innerHTML = " ";
    const house2 = filterHouse(characters, "Slytherin")
    house2.forEach((characters) => {
      
      const divCharacters = document.createElement("div");
      divCharacters.classList.add("divCharacters");
      charactersContainer.appendChild(divCharacters);
  
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
      
          console.log(house2);
  }
  else if (houseSelect.value === "Ravenclaw"){
    charactersContainer.innerHTML = " ";
    const house3 = filterHouse(characters, "Ravenclaw")    
    house3.forEach((characters) => {
      
      const divCharacters = document.createElement("div");
      divCharacters.classList.add("divCharacters");
      charactersContainer.appendChild(divCharacters);
  
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
    console.log(house3);
  }
  else if (houseSelect.value === "Hufflepuff"){
    charactersContainer.innerHTML = " ";
    const house4 = filterHouse(characters, "Hufflepuff")
    house4.forEach((characters) => {
      
      const divCharacters = document.createElement("div");
      divCharacters.classList.add("divCharacters");
      charactersContainer.appendChild(divCharacters);
  
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
    console.log(house4);
  }
  else if (houseSelect.value === "AllHouses"){
    charactersContainer.innerHTML = " ";
    showCharacters()
  }
});

//Mostrar todos los personajes
// const allCharacters = document.getElementById("allCharacters");
// console.log(allCharacters);
// allCharacters.addEventListener("change", function(){
//   if (allCharacters.value === "allCharacters"){
//     // charactersContainer.innerHTML = " ";
//     return showCharacters()
//   }
// });

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

