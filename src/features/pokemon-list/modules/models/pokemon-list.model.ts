import { Type } from 'class-transformer';
import { Pokemon } from '~/features/pokemon/models/pokemon.model';
import { NamedAPIResource } from '~/shared/modules/models/named-api-resource.model';
import { PaginatedResponse } from '~/shared/modules/models/paginated-response.model';

export class PokemonList extends PaginatedResponse {
  @Type(() => NamedAPIResource)
  results: Array<NamedAPIResource>;
}

export class PokemonListWithDetails extends PaginatedResponse {
  @Type(() => Pokemon)
  results: Array<Pokemon>;
}
