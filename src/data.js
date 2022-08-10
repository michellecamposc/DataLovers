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
  return filterByAZ;
};

//Function to order from Z to A
export const sortDataDown = (characters) => {
  let filterByZA = characters.sort((a, b) => b.name.localeCompare(a.name));
  return filterByZA;
};
