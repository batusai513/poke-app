import { plainToInstance } from 'class-transformer';
import { Result } from 'typescript-result';
import {
  createValidationError,
  createRequestError,
} from '~/shared/modules/errors/errors';
import { httpClient } from '~/shared/utils/httpClient';
import { Pokemon } from './models/pokemon.model';
import { parsePokemonRequestSchema } from './schemas/pokemon-request.schema';
import { parsePokemonSchema } from './schemas/pokemon.schema';

export function getPokemon(payload: unknown) {
  return Result.try(() => {
    return parsePokemonRequestSchema(payload);
  }, createValidationError)
    .mapCatching(
      ({ id }) => {
        return httpClient.get(`pokemon/${id}`).json();
      },
      (e) => {
        return createRequestError(e, {
          httpError: `Error fetching pokemon`,
        });
      },
    )
    .mapCatching(parsePokemonSchema, createValidationError)
    .map((item) => {
      return plainToInstance(Pokemon, item);
    });
}
