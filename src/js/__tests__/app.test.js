/* eslint-disable linebreak-style */
import Character from '../app';

test('Take damage', () => {
  const example = new Character('test', 'Daemon');
  example.damage(10);
  expect(example.health).toBe(94);
});

test('Take 0 damage', () => {
  const example = new Character('test', 'Daemon');
  example.damage(0);
  expect(example.health).toBe(100);
});

test('Heal', () => {
  const example = new Character('test', 'Daemon');
  example.damage(-10);
  expect(example.health).toBe(106);
});

test('Kill', () => {
  const example = new Character('test', 'Daemon');
  example.damage(300);
  expect(example.health).toBe(0);
});
