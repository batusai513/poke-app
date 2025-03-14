import { clsx } from 'clsx';
import { AudioWaveform } from 'lucide-react';
import { useRef } from 'react';
import type { Pokemon } from '~/features/pokemon/models/pokemon.model';
import { Progress } from '~/shared/components/Progress';

export interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const pokemonColors = pokemon.types.map((i) => i.color);
  const bg =
    pokemon.types.length > 1
      ? `linear-gradient(45deg, ${pokemonColors.join(',')})`
      : pokemonColors.at(0);
  const border =
    pokemon.types.length > 1
      ? {
          borderImageSlice: 1,
          borderImageSource: `linear-gradient(to left, ${pokemonColors.join(
            ',',
          )})`,
        }
      : { borderColor: bg };
  return (
    <article
      className={clsx(
        'grid grid-cols-[auto_minmax(200px,_1fr)] gap-2 border-3 p-2',
      )}
      style={border}
    >
      <img
        style={{
          background: bg,
        }}
        width={156}
        height={96}
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
        className="object-contain h-full"
      />
      <div>
        <header className="inline-flex gap-2 mb-2">
          <PokemonTypes types={pokemon.types} />
          <h2>{pokemon.formattedName}</h2>
          <PokemonCries src={pokemon.cries.latest} />
        </header>
        <div className="grid grid-cols-1 gap-1 mb-3">
          {pokemon.stats.map((stat) => {
            return (
              <div key={stat.name}>
                <span
                  className={clsx('capitalize text-sm', {
                    uppercase: stat.name === 'hp',
                  })}
                >
                  {stat.reducedName} : {stat.base_stat}
                </span>
                <Progress size={stat.normalizedStatValue} />
              </div>
            );
          })}
        </div>
        <p className="text-xs">Abilities:</p>
        <ul className="grid grid-cols-2 gap-x-2 mb-3">
          {pokemon.abilities
            .filter((i) => !i.is_hidden)
            .map((ability) => {
              return (
                <li key={ability.ability.name} className="">
                  {ability.ability.name.split('-').join(' ')}
                </li>
              );
            })}
        </ul>
      </div>
    </article>
  );
}

function PokemonCries({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        void audioRef.current?.play();
      }}
    >
      <AudioWaveform className="w-4 h-4" />
      <audio
        crossOrigin="anonymous"
        loop={false}
        ref={audioRef}
        autoPlay={false}
      >
        <source src={src} type="audio/ogg"></source>
      </audio>
    </button>
  );
}

interface PokemonTypesProps {
  types: Pokemon['types'];
  className?: string;
}

function PokemonTypes({ types, className }: PokemonTypesProps) {
  return types.map((type) => {
    return (
      <div
        className={clsx(className, 'inline-flex gap-3 items-center')}
        key={type.name}
      >
        <span
          className="inline-flex text-sm items-center justify-center p-1 rounded-full border-solid border-2 w-6 h-6"
          title={type.name}
          style={{ color: type.color }}
        >
          <svg className="icon">
            <use xlinkHref={`pokemon-types.svg#icon-${type.name}`}></use>
          </svg>
        </span>{' '}
      </div>
    );
  });
}
