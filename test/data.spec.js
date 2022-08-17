import {
  sortDataUp,
  filterHouse,
  sortDataDown,
  filterHuman,
  filterMagical,
  olderBooks,
  recentBooks,
} from "../src/data.js";
import data from "../src/data/harrypotter/harry.js";
const characters = data.characters;
//Filtrar personajes de Gryffindor
describe("filtra los personajes de Gryffindor", () => {
  it("is a function", () => {
    expect(typeof filterHouse).toBe("function");
  });
  it("returns `la cantidad de personajes Gryffindor`", () => {
    const house = "Gryffindor";
    expect(filterHouse(characters, house).length).toBe(56);
  });
});

//Filtrar personajes de Slytherin
describe("filtra los personajes Slytherin", () => {
  it("is a function", () => {
    expect(typeof filterHouse).toBe("function");
  });

  it("returns `los personajes de Slytherin`", () => {
    const house = "Slytherin";
    expect(filterHouse(characters, house).length).toBe(36);
  });
});

//Filtrar personajes de Ravenclaw
describe("filtra los personajes Ravenclaw", () => {
  it("is a function", () => {
    expect(typeof filterHouse).toBe("function");
  });

  it("returns `los personajes de Ravenclaw`", () => {
    const house = "Ravenclaw";
    expect(filterHouse(characters, house).length).toBe(29);
  });
});

//Filtrar personajes de Hufflepuff
describe("filtra los personajes Hufflepuff", () => {
  it("is a function", () => {
    expect(typeof filterHouse).toBe("function");
  });

  it("returns `los personajes de una casa`", () => {
    const house = "Hufflepuff";
    expect(filterHouse(characters, house).length).toBe(23);
  });
});

//Ordenar personajes A-Z
describe("Ordenar por orden alfabético los personajes(A-Z)", () => {
  it("is a function", () => {
    expect(typeof sortDataUp).toBe("function");
  });
  it("returns `Los personajes ordenados de la A-Z`", () => {
    expect(sortDataUp(characters)).toEqual(characters);
  });
});

//Ordenar personajes Z-A
describe("Ordenar por orden alfabético los personajes(Z-A)", () => {
  it("is a function", () => {
    expect(typeof sortDataDown).toBe("function");
  });

  it("returns `Los personajes ordenados de la Z-A`", () => {
    expect(sortDataDown(characters)).toEqual(characters);
  });
});

//Filtrar humanos
describe("filtra solo humanos", () => {
  it("is a function", () => {
    expect(typeof filterHuman).toBe("function");
  });

  it("returns `solo la especie de humanos`", () => {
    expect(filterHuman(characters).length).toBe(589);
  });
});

//Filtrar el resto de especies
describe("filtra el resto de especies excepto humanos", () => {
  it("is a function", () => {
    expect(typeof filterHuman).toBe("function");
  });

  it("returns `todas las especies excepto humanos`", () => {
    expect(filterMagical(characters).length).toBe(118);
  });
});

const books = data.books;
//Ordenar libros más antiguos
describe("Libros ordenados por la fecha más antigua por orden ascendente", () => {
  it("is a function", () => {
    expect(typeof olderBooks).toBe("function");
  });
  const idBooks = books.id;
  it("returns `Los libros ordenados en orden ascendente`", () => {
    expect(olderBooks(books, idBooks)).toEqual(idBooks);
  });
});

//Ordenar libros más recientes
describe("Ordenar los libros por la fecha más reciente en orden descendente", () => {
  it("is a function", () => {
    expect(typeof recentBooks).toBe("function");
  });

  it("returns `Ordenar los libros de menor a mayor", () => {
    expect(recentBooks(books)).toEqual();
  });
});

/*describe('anotherExample', () => {
  it('is a function', () => {
     expect(typeof anotherExample).toBe('function');
   });

  it('returns `anotherExample`', () => {
   expect(anotherExample()).toBe('OMG');
 }); });*/
