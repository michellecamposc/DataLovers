//Funtion filter by houses
export const filterHouse = (characters, house) => {
  const charactersHouse = characters.filter(
    (element) => element.house === house
  );
  return charactersHouse;
};

//Funtion filter by species (Humans ands magical ones)
export const filterHuman = (characters, condition) => {
  const charactersSpecies = characters.filter(
    (element) => element.species == condition
  );
  return charactersSpecies;
};

export const filterMagical = (characters, condition) => {
  const charactersSpecies = characters.filter(
    (element) => element.species !== condition
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

//Page four

//Function sort Books (oldest)
export const olderBooks = (books) => {
  let lastBook = books.sort((a, b) => a.id > b.id);
  return lastBook;
};
console.log(olderBooks);

//Function sort Books (recent)
export const recentBooks = (books) => {
  let firstBook = books.sort((a, b) => b.id < a.id);
  return firstBook;
};
