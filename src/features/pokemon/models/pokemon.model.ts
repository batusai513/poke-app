import { Type } from 'class-transformer';
import { NamedAPIResource } from '~/shared/modules/models/named-api-resource.model';
import {
  decimetresToCentimetres,
  hectogramsToGrams,
} from '~/shared/utils/meassureUnits';
import { maxStats, pokemonColorsPerType } from '../pokemon.constants';

// ===============================
// Clases para objetos básicos de Pokémon
// ===============================

// Habilidad de un Pokémon
export class PokemonAbility {
  is_hidden: boolean;
  slot: number;

  @Type(() => NamedAPIResource)
  ability: NamedAPIResource;
}

// Forma del Pokémon
export class Form {
  name: string;
  url: string;
}

// Game index
export class GameIndex {
  game_index: number;

  @Type(() => NamedAPIResource)
  version: NamedAPIResource;
}

// Detalle de versión en held_items
export class HeldItemVersionDetail {
  rarity: number;

  @Type(() => NamedAPIResource)
  version: NamedAPIResource;
}

// Objeto held_item
export class HeldItem {
  @Type(() => NamedAPIResource)
  item: NamedAPIResource;

  @Type(() => HeldItemVersionDetail)
  version_details: Array<HeldItemVersionDetail>;
}

// Detalle de grupo de versión en moves
export class MoveVersionGroupDetail {
  level_learned_at: number;

  @Type(() => NamedAPIResource)
  version_group: NamedAPIResource;

  @Type(() => NamedAPIResource)
  move_learn_method: NamedAPIResource;
}

// Movimiento del Pokémon
export class Move {
  @Type(() => NamedAPIResource)
  move: NamedAPIResource;

  @Type(() => MoveVersionGroupDetail)
  version_group_details: Array<MoveVersionGroupDetail>;
}

// Cries
export class Cries {
  latest: string;
  legacy: string | null;
}

export class PokemonStatDetail {
  name:
    | 'hp'
    | 'attack'
    | 'defense'
    | 'special-attack'
    | 'special-defense'
    | 'speed';
  url: string;
}

// Estadística
export class Stat {
  base_stat: number;
  effort: number;

  @Type(() => PokemonStatDetail)
  stat: PokemonStatDetail;

  get name() {
    return this.stat.name;
  }

  get reducedName() {
    const { name } = this;
    if (!name.includes('-')) {
      return name;
    }

    const [first, last] = name.split('-');
    return `${first.slice(0, 2)}. ${last.slice(0, 3)}`;
  }

  get normalizedStatValue() {
    const maxStatValue = maxStats[this.stat.name];
    return (this.base_stat / maxStatValue) * 100;
  }
}

export class PokemonTypeDetail {
  name:
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy'
    | 'stellar'
    | 'unknown';
  url: string;
}

// Tipo del Pokémon
export class PokemonType {
  slot: number;

  @Type(() => PokemonTypeDetail)
  type: PokemonTypeDetail;

  get name() {
    return this.type.name;
  }

  get color() {
    return pokemonColorsPerType[this.type.name];
  }
}

// Past types (tipos anteriores)
export class PastType {
  @Type(() => NamedAPIResource)
  generation: NamedAPIResource;

  @Type(() => PokemonType)
  types: Array<PokemonType>;
}

// ===============================
// Clases para Sprites
// ===============================

// Sprites "other"

// Dream World
export class DreamWorld {
  front_default: string;
  front_female: string | null;
}

// Home
export class Home {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

// Official Artwork
export class OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

// Showdown
export class Showdown {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

// Otros sprites
export class OtherSprites {
  @Type(() => DreamWorld)
  'dream_world': DreamWorld;

  @Type(() => Home)
  'home': Home;

  // Nota: la clave en JSON es "official-artwork", se mapea a officialArtwork
  @Type(() => OfficialArtwork)
  'official-artwork': OfficialArtwork;

  @Type(() => Showdown)
  'showdown': Showdown;
}

// Sprites por generación

// Generation I
export class GenerationIRedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export class GenerationIYellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export class GenerationI {
  @Type(() => GenerationIRedBlue)
  redBlue: GenerationIRedBlue;

  @Type(() => GenerationIYellow)
  yellow: GenerationIYellow;
}

// Generation II (Crystal, Gold y Silver comparten la misma estructura)
export class GenIIEntry {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export class GenerationII {
  @Type(() => GenIIEntry)
  crystal: GenIIEntry;

  @Type(() => GenIIEntry)
  gold: GenIIEntry;

  @Type(() => GenIIEntry)
  silver: GenIIEntry;
}

// Generation III
export class GenerationIIIEmerald {
  front_default: string;
  front_shiny: string;
}

export class GenerationIIIFireRedLeafGreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

// Para ruby-sapphire se utiliza la misma estructura que firered-leafgreen
export type GenerationIIIRubySapphire = GenerationIIIFireRedLeafGreen;

export class GenerationIII {
  @Type(() => GenerationIIIEmerald)
  emerald: GenerationIIIEmerald;

  @Type(() => GenerationIIIFireRedLeafGreen)
  fireredLeafgreen: GenerationIIIFireRedLeafGreen;

  @Type(() => GenerationIIIFireRedLeafGreen)
  rubySapphire: GenerationIIIRubySapphire;
}

// Generation IV
export class GenIV {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export class GenerationIV {
  @Type(() => GenIV)
  diamondPearl: GenIV;

  @Type(() => GenIV)
  heartgoldSoulsilver: GenIV;

  @Type(() => GenIV)
  platinum: GenIV;
}

// Generation V
export class Animated {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export class GenerationVBlackWhite {
  @Type(() => Animated)
  animated: Animated;
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export class GenerationV {
  @Type(() => GenerationVBlackWhite)
  blackWhite: GenerationVBlackWhite;
}

// Generation VI
export class GenVISprite {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export class GenerationVI {
  @Type(() => GenVISprite)
  omegarubyAlphasapphire: GenVISprite;

  @Type(() => GenVISprite)
  xy: GenVISprite;
}

// Generation VII
export class GenerationVIIIcons {
  front_default: string;
  front_female: string | null;
}

export class UltraSunUltraMoon {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export class GenerationVII {
  @Type(() => GenerationVIIIcons)
  icons: GenerationVIIIcons;

  @Type(() => UltraSunUltraMoon)
  ultraSunUltraMoon: UltraSunUltraMoon;
}

// Generation VIII
export class GenerationVIII {
  @Type(() => GenerationVIIIcons)
  icons: GenerationVIIIcons; // Se reutiliza la misma estructura que GenerationVIIIcons
}

// Versions: agrupa todas las generaciones
export class Versions {
  @Type(() => GenerationI)
  'generation-i': GenerationI;

  @Type(() => GenerationII)
  'generation-ii': GenerationII;

  @Type(() => GenerationIII)
  'generation-iii': GenerationIII;

  @Type(() => GenerationIV)
  'generation-iv': GenerationIV;

  @Type(() => GenerationV)
  'generation-v': GenerationV;

  @Type(() => GenerationVI)
  'generation-vi': GenerationVI;

  @Type(() => GenerationVII)
  'generation-vii': GenerationVII;

  @Type(() => GenerationVIII)
  'generation-viii': GenerationVIII;
}

// Sprites principal
export class Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;

  @Type(() => OtherSprites)
  other: OtherSprites;

  @Type(() => Versions)
  versions: Versions;
}

// ===============================
// Clase principal del Pokémon
// ===============================
export class Pokemon {
  id: number;
  name: string;
  base_experience: number;
  // The height of the Pokémon in decimetres.
  height: number;
  is_default: boolean;
  order: number;
  // The weight of the Pokémon in hectograms
  weight: number;
  location_area_encounters: string;

  @Type(() => PokemonAbility)
  abilities: Array<PokemonAbility>;

  @Type(() => Form)
  forms: Array<Form>;

  @Type(() => GameIndex)
  game_indices: Array<GameIndex>;

  @Type(() => HeldItem)
  held_items: Array<HeldItem>;

  @Type(() => Move)
  moves: Array<Move>;

  @Type(() => NamedAPIResource)
  species: NamedAPIResource;

  @Type(() => Sprites)
  sprites: Sprites;

  @Type(() => Cries)
  cries: Cries;

  @Type(() => Stat)
  stats: Array<Stat>;

  @Type(() => PokemonType)
  types: Array<PokemonType>;

  @Type(() => PastType)
  past_types: Array<PastType>;

  get formattedName() {
    return this.name.replaceAll('-', ' ');
  }

  get heightInCentimeters() {
    return decimetresToCentimetres(this.height);
  }

  get weightInGrams() {
    return hectogramsToGrams(this.weight);
  }
}
