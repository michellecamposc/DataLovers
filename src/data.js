export const filterData = (characters, condition) => {
  const charactersHouse = characters.filter(
    (element) => element.house == condition
  );
  return charactersHouse;
};

//Función para ordernar de la A a la Z
export const sortDataUp = (characters) => {
  let filterByAZ = characters.sort((a, b) => a.name.localCompare(b.name));
  return filterByAZ;
};

//Función para ordenar de la Z a la A
export const sortDataDown = (characters) => {
  let filterByZA = characters.sort((a, b) => b.name.localCompare(a.name));
  return filterByZA;
};

/*function sortDataDown(characters) {
  let resultZA = characters.sort((a, b) => {
    a.name > b.name ? -1 : 1;
  });
  return resultZA;
}

export { sortDataDown };*/

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
