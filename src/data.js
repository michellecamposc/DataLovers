// Historia de usuario de personajes
//Función de filtrar la data de personajes
export const filterData = (characters, condition) => {
  const charactersHouse = characters.filter(
    (element) => element.house == condition
  );
  return charactersHouse;
};

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
