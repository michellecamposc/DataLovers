
//Función de filtrar la data de personajes
// export const filterData = (characters, condition) => {
//   const charactersHouse = characters.filter(
//     (element) => element.house == condition
//   );
//   return charactersHouse;
// };

//Funtion filter by houses
export const filterHouse = (characters, condition) => {
  const charactersHouse = characters.filter(
    (element) => element.house == condition
  );
  return charactersHouse;
};

//Funtion filter by species
export const filterSpecies = (characters, condition) => {
  const charactersSpecies = characters.filter(
    (element) => element.species == condition
  );
  return charactersSpecies;
};

//Function to order from A to Z
export const sortDataUp = (characters) => {
  let filterByAZ = characters.sort((a, b) => a.name.localeCompare(b.name));
  console.log(filterByAZ);
  return filterByAZ;
};

//Function to order from Z to A
export const sortDataDown = (characters) => {
  let filterByZA = characters.sort((a, b) => b.name.localeCompare(a.name));
  console.log(filterByZA);
  return filterByZA;
};