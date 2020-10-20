/* eslint-disable no-console */

import Character from '../Character';

test('class Character - throw (wrong name)', () => {
  expect(() => {
    const character = new Character(10);
    console.log(character);
  }).toThrowError(Error);
});

test('class Character - throw (no name)', () => {
  expect(() => {
    const character = new Character();
    console.log(character);
  }).toThrowError(Error);
});

test('class Character instanceof', () => {
  expect(new Character('Name')).toBeInstanceOf(Character);
});

test('class Character', () => {
  expect(new Character('Name')).toEqual(
    {
      name: 'Name',
      type: 'Character',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
    },
  );
});
