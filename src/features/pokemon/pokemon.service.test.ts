import 'reflect-metadata';

import { http, HttpResponse } from 'msw';
import type { SetupWorker } from 'msw/browser';
import { describe, expect } from 'vitest';
import { HttpError, ParseSchemaError } from '~/shared/modules/errors/errors';
import { pokemon } from '~/tests/mocks/fixtures/pokemon';
import { getPokemon } from './pokemon.service';
import { test } from '~/tests/test-utils';

describe('getPokemon', () => {
  test('should fetch and transform a single pokemon successfully', async ({
    worker,
  }: {
    worker: SetupWorker;
  }) => {
    worker.use(
      http.get('https://pokeapi.co/api/v2/pokemon/:id', () => {
        return HttpResponse.json(pokemon);
      }),
    );

    const result = await getPokemon({ id: '67' }).getOrThrow();

    expect(result.id).toBe(67);
    expect(result.name).toBe('machoke');
    expect(result.types[0].name).toBe('fighting');
  });

  test('should handle invalid pokemon ID', async () => {
    const response = await getPokemon({});
    expect(response.error).toBeInstanceOf(ParseSchemaError);
  });

  test('should handle API errors', async ({
    worker,
  }: {
    worker: SetupWorker;
  }) => {
    worker.use(
      http.get('https://pokeapi.co/api/v2/pokemon/:id', () => {
        return new HttpResponse(null, { status: 404 });
      }),
    );

    const result = await getPokemon({ id: '1' });
    expect(() => result.getOrThrow()).toThrow('Error fetching pokemon');
    expect(result.error).toBeInstanceOf(HttpError);
  });
});
