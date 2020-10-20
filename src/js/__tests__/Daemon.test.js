/* eslint-disable no-console */

import Daemon from '../Daemon';

test('class Daemon - throw (wrong name)', () => {
  expect(() => {
    const daemon = new Daemon(10);
    console.log(daemon);
  }).toThrowError(Error);
});

test('class Daemon - throw (no name)', () => {
  expect(() => {
    const daemon = new Daemon();
    console.log(daemon);
  }).toThrowError(Error);
});

test('class Daemon instanceof', () => {
  expect(new Daemon('Name')).toBeInstanceOf(Daemon);
});

test('class Daemon', () => {
  expect(new Daemon('Name')).toEqual(
    {
      name: 'Name',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
      stoned: false,
    },
  );
});
