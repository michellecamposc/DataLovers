
import data from "./data/harrypotter/harry.js"; //por qué se llama data y no default?

// Se puede acceder al arreglo
// let books = data.books;
// console.log(books);

//Se puede acceder a los elementos de un arreglo en específico
let booksTitle = data.books[0].title;
console.log(booksTitle);




//El botón nos lleva a la segunda página
const firstButton = document.getElementById("first-button");
firstButton.addEventListener("click", goToSecondPage);

function goToSecondPage() {
  // Hide the first page
  document.getElementById("first-page").style.display = "none";
  // Show the second page
  document.getElementsByClassName("second-page").style.display = "block"; 
  
}

