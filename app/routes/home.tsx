import { instanceToPlain, plainToInstance } from 'class-transformer';
import { data } from 'react-router';
import { match, P } from 'ts-pattern';
import { Pokemons } from '~/features/pokemon-list/components/PokemonList';
import { PokemonListWithDetails } from '~/features/pokemon-list/modules/models/pokemon-list.model';
import { getPokemonListWithDetails } from '~/features/pokemon-list/modules/pokemon-list.service';
import { HttpError, ParseSchemaError } from '~/shared/modules/errors/errors';
import type { Route } from './+types/home';
import { Pagination } from '~/shared/components/Pagination';
import { parseQueryPaginationSchema } from '~/shared/modules/schemas/query-pagination.schema';

export default function Home({ loaderData }: Route.ComponentProps) {
  const pokemons = plainToInstance(PokemonListWithDetails, loaderData);
  return (
    <div className="my-2 mx-auto max-w-5xl">
      <Pokemons list={pokemons.results} className="mb-4" />
      <Pagination />
    </div>
  );
}

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Pokemons' },
    { name: 'description', content: 'Welcome to the Pokemon world' },
  ];
}

export async function loader({ request: { url } }: Route.LoaderArgs) {
  const { search } = new URL(url);
  const { page } = parseQueryPaginationSchema(
    Object.fromEntries(new URLSearchParams(search)),
  );
  return getPokemonListWithDetails(page).fold(
    (response) => {
      return instanceToPlain(response);
    },
    (e) => {
      return match(e)
        .with(P.instanceOf(ParseSchemaError), (e) => {
          console.log(e);
          throw data({ error: e.detailedErrors }, { status: 400 });
        })
        .with(P.instanceOf(HttpError), (e) => {
          throw data({ error: e.getMessage() }, { status: e.statusCode });
        })
        .otherwise((e) => {
          console.log(e);
          throw data({ error: 'Unknown error' }, { status: 500 });
        });
    },
  );
}
