import 'reflect-metadata';
import { describe, expect, it } from 'vitest';
import { plainToInstance } from 'class-transformer';
import { Pokemon, PokemonType, Stat } from './pokemon.model';
import { pokemonColorsPerType } from '../pokemon.constants';

describe('Pokemon Model', () => {
  describe('Pokemon', () => {
    const mockPokemonData = {
      id: 25,
      name: 'pikachu',
      height: 4,
      weight: 60,
      stats: [
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/',
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: 'special-defense',
            url: 'https://pokeapi.co/api/v2/stat/5/',
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: 'electric',
            url: 'https://pokeapi.co/api/v2/type/13/',
          },
        },
      ],
    };

    it('should transform plain object to Pokemon instance', () => {
      const pokemon = plainToInstance(Pokemon, mockPokemonData);

      expect(pokemon).toBeInstanceOf(Pokemon);
      expect(pokemon.name).toBe('pikachu');
      expect(pokemon.id).toBe(25);
    });

    it('should convert height to centimeters', () => {
      const pokemon = plainToInstance(Pokemon, mockPokemonData);
      expect(pokemon.heightInCentimeters).toBe(40); // 4 decimetres = 40 centimetres
    });

    it('should convert weight to grams', () => {
      const pokemon = plainToInstance(Pokemon, mockPokemonData);
      expect(pokemon.weightInGrams).toBe(6000); // 60 hectograms = 6000 grams
    });
  });

  describe('PokemonType', () => {
    const mockTypeData = {
      slot: 1,
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
    };

    it('should get type name correctly', () => {
      const type = plainToInstance(PokemonType, mockTypeData);
      expect(type.name).toBe('fire');
    });

    it('should get correct color for type', () => {
      const type = plainToInstance(PokemonType, mockTypeData);
      expect(type.color).toBe(pokemonColorsPerType['fire']);
    });
  });

  describe('Stat', () => {
    it('should get stat name correctly', () => {
      const mockStatData = {
        base_stat: 100,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      };

      const stat = plainToInstance(Stat, mockStatData);
      expect(stat.name).toBe('attack');
    });

    it('should reduce compound stat names correctly', () => {
      const mockStatData = {
        base_stat: 95,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      };

      const stat = plainToInstance(Stat, mockStatData);
      expect(stat.reducedName).toBe('sp. att');
    });

    it('should not reduce simple stat names', () => {
      const mockStatData = {
        base_stat: 90,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      };

      const stat = plainToInstance(Stat, mockStatData);
      expect(stat.reducedName).toBe('speed');
    });

    it('should normalize stat values correctly', () => {
      const testCases = [
        {
          input: {
            base_stat: 100,
            effort: 0,
            stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
          },
          expected: (100 / 255) * 100,
        },
        {
          input: {
            base_stat: 150,
            effort: 0,
            stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
          },
          expected: (150 / 190) * 100,
        },
        {
          input: {
            base_stat: 180,
            effort: 0,
            stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
          },
          expected: (180 / 230) * 100,
        },
        {
          input: {
            base_stat: 170,
            effort: 0,
            stat: {
              name: 'special-attack',
              url: 'https://pokeapi.co/api/v2/stat/4/',
            },
          },
          expected: (170 / 194) * 100,
        },
        {
          input: {
            base_stat: 200,
            effort: 0,
            stat: {
              name: 'special-defense',
              url: 'https://pokeapi.co/api/v2/stat/5/',
            },
          },
          expected: (200 / 230) * 100,
        },
        {
          input: {
            base_stat: 160,
            effort: 0,
            stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
          },
          expected: (160 / 180) * 100,
        },
      ];

      testCases.forEach(({ input, expected }) => {
        const stat = plainToInstance(Stat, input);
        expect(stat.normalizedStatValue).toBeCloseTo(expected, 2);
      });
    });
  });
});
