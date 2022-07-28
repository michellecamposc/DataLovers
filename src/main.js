// import { example } from "./data.js";
// // import data from './data/lol/lol.js';
// import data from "./data/pokemon/pokemon.js";
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

//El botón nos lleva a la segunda página
const firstButton = document.getElementById("first-button");
firstButton.addEventListener("click", goToSecondPage);

function goToSecondPage() {
  // Hide the first page
  const firstPage = document.getElementById("first-page");
  firstPage.style.display = "none";

  // Show the second page
  const secondPage = document.getElementById("second-page");
  secondPage.style.display = "block";
}
