/* eslint-disable import/prefer-default-export */

export function checkHealthStatus(character) {
  const { health } = character;

  if (health > 50) {
    return 'healthy';
  } if (health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

export function sortHeroesByHealth(heroes) {
  return heroes.slice().sort((a, b) => b.health - a.health);
}
