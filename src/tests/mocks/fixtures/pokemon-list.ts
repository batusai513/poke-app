import type { PokemonListSchemaOutput } from '~/features/pokemon-list/modules/schemas/pokemon-list.schema';

export const pokemonList: PokemonListSchemaOutput = {
  count: 1,
  next: null,
  previous: null,
  results: [{ name: 'machoke', url: 'https://pokeapi.co/api/v2/pokemon/67/' }],
};
