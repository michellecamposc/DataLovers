//Funtion filter by houses
export const filterHouse = (characters, house) => {
  const charactersHouse = characters.filter(
    (element) => element.house === house
  );
  return charactersHouse;
};

//Function filter by species (Humans and magical ones)
export const filterHuman = (characters) => {
  const charactersSpecies = characters.filter(
    (element) => element.species === "Human"
  );
  return charactersSpecies;
};

export const filterMagical = (characters) => {
  const charactersSpecies = characters.filter(
    (element) => element.species !== "Human"
  );
  return charactersSpecies;
};

//Function to order from A to Z (mejorarla)
/*export const sortDataUp = (data,sortBy,sortOrder) => {
  let filterByAZ = data.sort((a, b) => a.sortBy.localeCompare(b.sortBy));
} */

export const sortDataUp = (characters) => {
  const filterByAZ = characters.sort((a, b) => a.name.localeCompare(b.name));
  return filterByAZ;
};

//Function to order from Z to A
export const sortDataDown = (characters) => {
  const filterByZA = characters.sort((a, b) => b.name.localeCompare(a.name));
  return filterByZA;
};

//Page four sort books
const comparador = (a, b) => {
  return a.id > b.id ? 1 : -1;
};

export function olderBooks(books) {
  return books.sort(comparador);
}

export function recentBooks(books) {
  return books.reverse(comparador);
}
