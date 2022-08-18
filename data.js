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

//Page four sort books
export function olderBooks(books) {
  books.sort((a, b) => {
    return a.id > b.id ? 1 : -1;
  });
}

export function recentBooks(books) {
  books.sort((a, b) => {
    return a.id < b.id ? 1 : -1;
  });
}
