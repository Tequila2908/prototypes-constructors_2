
/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
import types from './types';

export default function Character(name, type) {
  const stringType = String(type);
  const stringName = String(name);
  if (stringName.length < 2 || stringName.length > 10) {
    throw new Error('Поле name должно содержать от 2 до 10 символов');
  } else {
    this.name = stringName;
    for (const option in types) {
      if (option === stringType) {
        this.type = stringType;
      } else if (types.Options.indexOf(stringType) === -1) {
        throw new Error('Неверный тип персонажа');
      }
    }
  }
  this.health = 100;
  this.level = 1;
  this.attack = types[stringType].attack;
  this.protection = types[stringType].protection;
}
Character.prototype = {
  damage(points) {
    if (this.health > 0) this.health -= points * (1 - this.protection / 100);
    if (this.health < 0) this.health = 0;
  },
};
