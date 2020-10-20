import Magician from '../Magician';
import Daemon from '../Daemon';

describe('Magician methods', () => {
  const magician = new Magician('magician');

  test('Magician attack setter throw (incorrect type - not a number)', () => {
    expect(() => {
      magician.attackAction = true;
    }).toThrowError(Error);
  });

  test('Magician attack setter throw (incorrect type - not an integer)', () => {
    expect(() => {
      magician.attackAction = 3.9;
    }).toThrowError(Error);
  });

  test('Magician attack setter throw (incorrect negative integer value)', () => {
    expect(() => {
      magician.attackAction = -2;
    }).toThrowError(Error);
  });

  test('Magician stoned setter throw', () => {
    expect(() => {
      magician.stonedAction = 0;
    }).toThrowError(Error);
  });

  test('Magician attack getter', () => {
    expect(magician.attackAction).toBe(10);
  });

  test('Magician stoned getter', () => {
    expect(magician.stonedAction).toBe(false);
  });

  test('Magician attack setter without stoned', () => {
    magician.attackAction = 2;
    magician.stonedAction = false;
    expect(magician.attackAction).toBe(9);
  });

  test('Magician stoned setter', () => {
    magician.stonedAction = true;
    expect(magician.stonedAction).toBe(true);
  });

  test('Magician attack setter with stoned', () => {
    magician.attackAction = 2;
    magician.stonedAction = true;
    expect(magician.attackAction).toBe(4);
  });
});

describe('Daemon methods', () => {
  const daemon = new Daemon('daemon');

  test('Daemon attack setter throw (incorrect type - not a number)', () => {
    expect(() => {
      daemon.attackAction = '3';
    }).toThrowError(Error);
  });

  test('Daemon attack setter throw (incorrect type - not an integer)', () => {
    expect(() => {
      daemon.attackAction = 1.0000001;
    }).toThrowError(Error);
  });

  test('Daemon attack setter throw (incorrect negative integer value)', () => {
    expect(() => {
      daemon.attackAction = -5;
    }).toThrowError(Error);
  });

  test('Daemon stoned setter throw', () => {
    expect(() => {
      daemon.stonedAction = undefined;
    }).toThrowError(Error);
  });

  test('Daemon attack getter', () => {
    expect(daemon.attackAction).toBe(10);
  });

  test('Daemon stoned getter', () => {
    expect(daemon.stonedAction).toBe(false);
  });

  test('Daemon attack setter without stoned', () => {
    daemon.attackAction = 4;
    daemon.stonedAction = false;
    expect(daemon.attackAction).toBe(7);
  });

  test('Daemon stoned setter', () => {
    daemon.stonedAction = true;
    expect(daemon.stonedAction).toBe(true);
  });

  test('Daemon attack setter with stoned', () => {
    daemon.attackAction = 4;
    daemon.stonedAction = true;
    expect(daemon.attackAction).toBe(-3);
  });
});
