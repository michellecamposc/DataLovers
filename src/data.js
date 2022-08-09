// Historia de usuario de personajes
//Función de filtrar las casas de los personajes
export const filterGryffindorHouse = (characters) => {
  const charactersHouse = characters.filter((e) => e.house == "Gryffindor");
  console.log(charactersHouse);
  return charactersHouse;
};

//Función para ordernar de la A a la Z
export const sortDataUp = (characters) => {
  let filterByAZ = characters.sort((a, b) => a.name.localeCompare(b.name));
  console.log(filterByAZ);
  return filterByAZ;
};

//Función para ordenar de la Z a la A
export const sortDataDown = (characters) => {
  let filterByZA = characters.sort((a, b) => b.name.localeCompare(a.name));
  console.log(filterByZA);
  return filterByZA;
};

// const filterData = (data) => {
//     const potionName = data.filter((x) => x.name <= "Drowsiness Draught");
//     return potionName;
//   };

//   /*const potionName = data.filter((element) => {
//       //Acá retornaremos la poción que quisieran ordenar los usuarios
//       return element.name(condition);
//     });*/

// const filterData = () => {
//     let result = characters.filter(x => x.gender === "Male" ? x.gender === this.value : x.gender !== "Male")
//     document.getElementById("charactersContainer").innerHTML = results.map(e => `
//     `)
// }
