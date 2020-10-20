import Character from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }

  get stonedAction() {
    return this.c_stoned !== undefined ? this.c_stoned : this.stoned;
  }

  set stonedAction(value) {
    if (typeof value !== 'boolean') throw new Error('Некорректный тип входного параметра. Требуется булево значение');
    this.c_stoned = value;
  }

  get attackAction() {
    return this.c_attack !== undefined ? this.c_attack : this.attack;
  }

  set attackAction(value) {
    if (!(Number.isInteger(value) && value > 0)) throw new Error('Некорректный тип входного параметра. Требуется целое положительное число');
    this.c_attack = this.attack * (1 - (value - 1) * 0.1);
    if (this.c_stoned) this.c_attack -= Math.log2(value) * 5;
  }
}
