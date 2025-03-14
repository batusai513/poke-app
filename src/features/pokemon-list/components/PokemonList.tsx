import { clsx } from 'clsx';
import { PokemonCard } from './PokemonCard';
import type { Pokemon } from '~/features/pokemon/models/pokemon.model';

interface PokemonsProps {
  list: Array<Pokemon>;
  className?: string;
}

export function Pokemons({ list, className }: PokemonsProps) {
  return (
    <section className={clsx('grid grid-cols-2 gap-x-4 gap-y-8', className)}>
      {list.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </section>
  );
}
