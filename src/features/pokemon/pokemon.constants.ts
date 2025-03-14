import type { PokemonSchemaOutput } from './schemas/pokemon.schema';

export const pokemonColorsPerType: Record<
  PokemonSchemaOutput['types'][number]['type']['name'],
  string
> = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#F7D02C',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD',
  stellar: '#CFCFCF',
  unknown: '#DDDDDD',
};

/*
  Basado en:
    HP: 255 (máximo teórico, aunque el más alto es Blissey con 255)
    Attack: 190 (aproximado, considerando Pokémon como Kartana)
    Defense: 230 (aproximado, considerando Pokémon como Shuckle)
    Sp. Att: 194 (aproximado, considerando Pokémon como Calyrex)
    Sp. Def: 230 (aproximado, considerando Pokémon como Shuckle)
    Speed: 180 (aproximado, considerando Pokémon como Regieleki)
*/
export const maxStats = {
  'hp': 255,
  'attack': 190,
  'defense': 230,
  'special-attack': 194,
  'special-defense': 230,
  'speed': 180,
};
