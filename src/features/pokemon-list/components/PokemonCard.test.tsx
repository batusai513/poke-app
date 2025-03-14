import 'reflect-metadata';

import { page } from '@vitest/browser/context';
import { plainToInstance } from 'class-transformer';
import { describe, expect, it } from 'vitest';
import { Pokemon } from '~/features/pokemon/models/pokemon.model';
import { pokemon as mockPokemonData } from '~/tests/mocks/fixtures/pokemon';
import { render } from '~/tests/test-utils';
import { PokemonCard } from './PokemonCard';

describe('PokemonCard', () => {
  const pokemon = plainToInstance(Pokemon, mockPokemonData);

  it('renders pokemon name and image', async () => {
    const { getByText } = render(<PokemonCard pokemon={pokemon} />);

    await expect.element(getByText('machoke')).toBeInTheDocument();
    const image = page.getByAltText('machoke') as unknown as HTMLImageElement;
    await expect.element(image).toBeInTheDocument();
    await expect
      .element(image)
      .toHaveAttribute('src', pokemon.sprites.front_default);
  });

  it('renders pokemon image with correct colors', async () => {
    const { getByAltText } = render(<PokemonCard pokemon={pokemon} />);

    const image = getByAltText('machoke');
    await expect.element(image).toBeInTheDocument();
    await expect.element(image).toHaveStyle({ backgroundColor: '#c22e28' });
  });

  it('renders stats with progress bars', () => {
    render(<PokemonCard pokemon={pokemon} />);

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    pokemon.stats.forEach(async (stat) => {
      await expect
        .element(page.getByText(`${stat.reducedName} : ${stat.base_stat}`))
        .toBeInTheDocument();
    });
  });

  it('renders non-hidden abilities only', async () => {
    render(<PokemonCard pokemon={pokemon} />);

    // Should show non-hidden ability
    await expect.element(page.getByText('guts')).toBeInTheDocument();
    await expect.element(page.getByText('no guard')).toBeInTheDocument();
    // Should not show hidden ability
    await expect.element(page.getByText('steadfast')).not.toBeInTheDocument();
  });

  it('renders audio player for pokemon cry', async () => {
    const { container } = render(<PokemonCard pokemon={pokemon} />);
    const audioElement = container.querySelector(
      'audio',
    ) as unknown as HTMLAudioElement;
    await expect.element(audioElement).toBeInTheDocument();
    expect(audioElement.querySelector('source')?.src).toBe(
      pokemon.cries.latest,
    );
  });

  it('applies gradient background for multi-type pokemon', async () => {
    const multiTypePokemon = plainToInstance(Pokemon, {
      ...mockPokemonData,
      types: [
        {
          slot: 1,
          type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
          color: '#EE8130',
        },
        {
          slot: 2,
          type: { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
          color: '#A98FF3',
        },
      ],
    });

    const { container } = render(<PokemonCard pokemon={multiTypePokemon} />);

    await expect
      .element(container.getElementsByTagName('article')[0])
      .toHaveStyle({
        borderImageSource: 'linear-gradient(to left, #ee8130, #a98ff3)',
      });
  });
});
