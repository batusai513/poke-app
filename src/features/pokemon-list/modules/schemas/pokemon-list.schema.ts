import { parse, type InferOutput } from 'valibot';
import type { PokemonSchemaOutput } from '~/features/pokemon/schemas/pokemon.schema';
import { NamedAPIResourceSchema } from '~/shared/modules/schemas/named-api-resource.schema';
import { createPaginatedResponseSchema } from '~/shared/modules/schemas/paginated-response.schema';

const PokemonListSchema = createPaginatedResponseSchema(NamedAPIResourceSchema);

export type PokemonListSchemaOutput = InferOutput<typeof PokemonListSchema>;

export type PokemontListSchemaWithDetail = Omit<
  PokemonListSchemaOutput,
  'results'
> & {
  results: PokemonSchemaOutput[];
};

export function parsePokemonListSchema(
  response: unknown,
): PokemonListSchemaOutput {
  return parse(PokemonListSchema, response);
}
