import { object, parse } from 'valibot';
import { StringNumberSchema } from '~/shared/modules/schemas/utils';

const PokemonRequestSchema = object({
  id: StringNumberSchema,
});

export function parsePokemonRequestSchema(payload: unknown) {
  return parse(PokemonRequestSchema, payload);
}
