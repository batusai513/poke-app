import { plainToInstance } from 'class-transformer';
import { AsyncResult, Result } from 'typescript-result';
import { getPokemon } from '~/features/pokemon/pokemon.service';
import {
  createRequestError,
  createValidationError,
  type ServiceError,
} from '~/shared/modules/errors/errors';
import { httpClient } from '~/shared/utils/httpClient';
import {
  PokemonList,
  PokemonListWithDetails,
} from './models/pokemon-list.model';
import {
  parsePokemonListSchema,
  type PokemonListSchemaOutput,
} from './schemas/pokemon-list.schema';

export function getPokemonListWithDetails(
  page: number,
): AsyncResult<PokemonListWithDetails, ServiceError | Error> {
  return getPokemonList(page)
    .mapCatching((response) => {
      return AsyncResult.all(
        getPokemonIdsFromResponse(response).map((id) => {
          return getPokemon({ id });
        }),
      ).then((r) => {
        return {
          ...response,
          results: r.map((i) => i.getOrThrow()),
        };
      });
    })
    .map((response) => {
      return plainToInstance(PokemonListWithDetails, response);
    });
}

export function getPokemonList(
  page: number,
): AsyncResult<PokemonListSchemaOutput, ServiceError> {
  return Result.try(
    () => {
      return httpClient
        .get('pokemon/', { searchParams: { offset: 20 * page } })
        .json()
        .then((r) => {
          return r;
        });
    },
    (e) => createRequestError(e, { httpError: `Error fetching pokemon list` }),
  )
    .mapCatching(parsePokemonListSchema, createValidationError)
    .map((response) => {
      return plainToInstance(PokemonList, response);
    });
}

function getPokemonIdsFromResponse(response: PokemonListSchemaOutput) {
  return response.results
    .map(({ url }) => {
      return getPokemonIdFromUrl(url);
    })
    .filter((i): i is string => !!i);
}

function getPokemonIdFromUrl(url: string): string | undefined {
  return url
    .split('/')
    .filter((item) => !!item)
    .at(-1);
}
