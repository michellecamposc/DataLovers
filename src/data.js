// const characters = data.characters;

export const filterHouse = (characters, condition) => {
  const charactersHouse = characters.filter(
    (element) => element.house == condition
  );
  return charactersHouse;
};

export const filterSpecies = (characters, condition) => {
  const charactersSpecies = characters.filter(
    (element) => element.species == condition
  );
  return charactersSpecies;
};




//Filtros para personajes:


//Nombre, Genero, Casa, especies, fec. nac

// const filterData = (data) => {
//     const potionName = data.filter((x) => x.name <= "Drowsiness Draught");
//     return potionName;
//   };

//   /*const potionName = data.filter((element) => {
//       //Acá retornaremos la poción que quisieran ordenar los usuarios
//       return element.name(condition);
//     });*/

// const sortBooksUp = books.sort((a, b)=> {
//     if (a.id < b.id) {
//         return -1;
//     }
//     if (a.id > b.id) {
//         return 1;
//     }
//     return 0;

// });
// console.log(sortBooksUp);

// const sortBooksDown = books.sort((a, b)=> {
// if (b.id < a.id) {
// return -1;
// }
// if (b.id > a.id) {
// return 1;
// }
// return 0;

// });
// console.log(sortBooksDown);

// export {sortBooksUp,sortBooksDown};

// const filterData = () => {
//     let result = characters.filter(x => x.gender === "Male" ? x.gender === this.value : x.gender !== "Male")
//     document.getElementById("charactersContainer").innerHTML = results.map(e => `
//     `)
// }
