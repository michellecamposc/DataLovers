import { filterHouse} from '../src/data.js';
import data from "../src/data/harrypotter/harry.js";

describe('filterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  it('returns `los personajes de una casa`', () => {
    const characters = data.characters;
    const house = "Gryffindor";
    expect(filterHouse(characters, house).length).toBe(56);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
