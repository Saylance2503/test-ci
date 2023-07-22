/* eslint-disable linebreak-style */
import { checkHealthStatus, sortHeroesByHealth } from '../app';

test("Должна возвращать 'healthy' для здоровья больше 50", () => {
  const character = { name: 'Маг', health: 90 };
  expect(checkHealthStatus(character)).toBe('healthy');
});

test("Должна возвращать 'wounded' для здоровья от 50 до 15", () => {
  const character = { name: 'Маг', health: 30 };
  expect(checkHealthStatus(character)).toBe('wounded');
});

test("Должна возвращать 'critical' для здоровья меньше 15", () => {
  const character = { name: 'Маг', health: 10 };
  expect(checkHealthStatus(character)).toBe('critical');
});

test('Должна сортировать героев по уровню здоровья в порядке убывания', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = sortHeroesByHealth(heroes);

  const expectedSortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortedHeroes).toEqual(expectedSortedHeroes);
});
