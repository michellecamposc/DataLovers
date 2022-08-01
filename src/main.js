import data from "./data/harrypotter/harry.js";

//Crearemos el html de la página e imprimiremos la data importada.

// //Se puede acceder al arreglo
// let books = data.books;
// console.log(books);

//let booksTitle = data.books[0].title;clear

//console.log(booksTitle);

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
