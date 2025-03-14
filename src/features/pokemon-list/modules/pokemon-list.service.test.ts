import 'reflect-metadata';

import { http, HttpResponse } from 'msw';
import type { SetupWorker } from 'msw/browser';
import { describe, expect } from 'vitest';
import { HttpError } from '~/shared/modules/errors/errors';
import { pokemon } from '~/tests/mocks/fixtures/pokemon';
import { test } from '~/tests/test-utils';
import {
  getPokemonList,
  getPokemonListWithDetails,
} from './pokemon-list.service';

const mockPokemonListResponse = {
  count: 2,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
  ],
};

describe('Pokemon Service', () => {
  describe('getPokemonList', () => {
    test('should fetch and transform pokemon list successfully', async ({
      worker,
    }: {
      worker: SetupWorker;
    }) => {
      worker.use(
        http.get('https://pokeapi.co/api/v2/pokemon/', () => {
          return HttpResponse.json(mockPokemonListResponse);
        }),
      );

      const result = await getPokemonList(0).getOrThrow();

      expect(result.count).toBe(2);
      expect(result.results).toHaveLength(2);
      expect(result.results[0].name).toBe('bulbasaur');
    });

    test('should handle API errors', async ({
      worker,
    }: {
      worker: SetupWorker;
    }) => {
      worker.use(
        http.get('https://pokeapi.co/api/v2/pokemon/', () => {
          return new HttpResponse(null, { status: 404 });
        }),
      );

      const result = await getPokemonList(0);
      expect(() => result.getOrThrow()).toThrow('Error fetching pokemon list');
      expect(result.error).toBeInstanceOf(HttpError);
    });
  });

  describe('getPokemonListWithDetails', () => {
    test('should fetch list and details for each pokemon', async ({
      worker,
    }: {
      worker: SetupWorker;
    }) => {
      // Mock the list request
      worker.use(
        http.get('https://pokeapi.co/api/v2/pokemon/', () => {
          return HttpResponse.json(mockPokemonListResponse);
        }),
        http.get('https://pokeapi.co/api/v2/pokemon/1', () => {
          return HttpResponse.json({ ...pokemon, id: 1, name: 'bulbasaur' });
        }),
        http.get('https://pokeapi.co/api/v2/pokemon/2', () => {
          return HttpResponse.json({ ...pokemon, id: 2, name: 'ivysaur' });
        }),
      );

      const result = await getPokemonListWithDetails(0).getOrThrow();

      expect(result.results).toHaveLength(2);
      expect(result.results[0].name).toBe('bulbasaur');
      expect(result.results[1].name).toBe('ivysaur');
    });

    test('should handle errors in pokemon list fetch', async ({
      worker,
    }: {
      worker: SetupWorker;
    }) => {
      worker.use(
        http.get('https://pokeapi.co/api/v2/pokemon/', () => {
          return new HttpResponse(null, { status: 404 });
        }),
      );

      expect((await getPokemonListWithDetails(0)).error).toBeInstanceOf(
        HttpError,
      );
    });

    test('should handle errors in individual pokemon fetch', async ({
      worker,
    }: {
      worker: SetupWorker;
    }) => {
      worker.use(
        http.get('https://pokeapi.co/api/v2/pokemon/', () => {
          return HttpResponse.json(mockPokemonListResponse);
        }),
        http.get('https://pokeapi.co/api/v2/pokemon/:id', () => {
          return new HttpResponse(null, { status: 404 });
        }),
      );

      const result = await getPokemonListWithDetails(0);
      expect(() => result.getOrThrow()).toThrow('Error fetching pokemon');
      expect(result.error).toBeInstanceOf(HttpError);
    });
  });
});
