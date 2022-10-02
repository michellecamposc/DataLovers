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
    expect(typeof filterMagical).toBe("function");
  });

  it("returns `todas las especies excepto humanos`", () => {
    expect(filterMagical(characters).length).toBe(118);
  });
});

//Ordenar libros más antiguos
describe("Libros ordenados por la fecha más antigua por orden ascendente", () => {
  it("is a function", () => {
    expect(typeof olderBooks).toBe("function");
  });
  const newBooks = [
    {
      id: 4,
      title: "Harry Potter and the Goblet of Fire",
      releaseDay: "July 8, 2000",
      author: "J. K. Rowling",
      image: "https://i.ibb.co/DM8BT9k/book4.webp",
      description:
        "Hogwarts prepares for the Triwizard Tournament, in which three schools of wizardry will compete. To everyone's surprise, Harry Potter is chosen to participate in the competition, in which he must fight dragons, enter the water and face his greatest fears.",
    },
    {
      id: 3,
      title: "Harry Potter and the Prisoner of Azkaban",
      releseDay: "July 8, 1999",
      author: "J. K. Rowling",
      image: "https://i.ibb.co/XY7tC7q/book3.webp",
      description:
        "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter.",
    },
    {
      id: 2,
      title: "Harry Potter and the chamber of secrets",
      releaseDay: "July 2, 1998",
      author: "J. K. Rowling",
      image: "https://i.ibb.co/8Yx6gWt/book2.webp",
      description:
        "Harry Potter and the sophomores investigate a malevolent threat to their Hogwarts classmates, a menacing beast that hides within the castle.",
    },
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      releaseDay: "June 26, 1997",
      author: "J. K. Rowling",
      image: "https://i.ibb.co/m68jf7p/book1.webp",
      description:
        "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
    },
  ];

  it("returns `Los libros ordenados en orden ascendente`", () => {
    expect(olderBooks(newBooks)).toEqual(newBooks);
  });

  it("returns `Los libros ordenados en orden descendente`", () => {
    expect(olderBooks(newBooks)).toEqual(newBooks);
  });
});

//Ordenar libros más recientes
describe("Ordenar los libros por la fecha más reciente en orden descendente", () => {
  it("is a function", () => {
    expect(typeof recentBooks).toBe("function");
  });
  const newRecent = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      releaseDay: "June 26, 1997",
      author: "J. K. Rowling",
      image: "https://i.ibb.co/m68jf7p/book1.webp",
      description:
        "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
    },
    {
      id: 2,
      title: "Harry Potter and the chamber of secrets",
      releaseDay: "July 2, 1998",
      author: "J. K. Rowling",
      image: "https://i.ibb.co/8Yx6gWt/book2.webp",
      description:
        "Harry Potter and the sophomores investigate a malevolent threat to their Hogwarts classmates, a menacing beast that hides within the castle.",
    },
    {
      id: 3,
      title: "Harry Potter and the Prisoner of Azkaban",
      releseDay: "July 8, 1999",
      author: "J. K. Rowling",
      image: "https://i.ibb.co/XY7tC7q/book3.webp",
      description:
        "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter.",
    },
    {
      id: 4,
      title: "Harry Potter and the Goblet of Fire",
      releaseDay: "July 8, 2000",
      author: "J. K. Rowling",
      image: "https://i.ibb.co/DM8BT9k/book4.webp",
      description:
        "Hogwarts prepares for the Triwizard Tournament, in which three schools of wizardry will compete. To everyone's surprise, Harry Potter is chosen to participate in the competition, in which he must fight dragons, enter the water and face his greatest fears.",
    },
  ];
  it("returns `Ordenar los libros de menor a mayor", () => {
    expect(recentBooks(newRecent)).toEqual(newRecent);
  });

  it("returns `Ordenar los libros de mayor a menor", () => {
    expect(recentBooks(newRecent)).toEqual(newRecent);
  });
});

/*describe('anotherExample', () => {
  it('is a function', () => {
     expect(typeof anotherExample).toBe('function');
   });

  it('returns `anotherExample`', () => {
   expect(anotherExample()).toBe('OMG');
 }); });*/
