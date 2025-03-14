import {
  array,
  boolean,
  nullable,
  number,
  object,
  parse,
  picklist,
  string,
  type InferOutput,
} from 'valibot';
import { NamedAPIResourceSchema } from '~/shared/modules/schemas/named-api-resource.schema';

/* Esquema de la habilidad interna de un Pokémon */
export const PokemonAbilitySchema = object({
  is_hidden: boolean(
    "El campo 'is_hidden' es obligatorio y debe ser verdadero o falso.",
  ),
  slot: number("El campo 'slot' es obligatorio y debe ser un número."),
  ability: NamedAPIResourceSchema,
});

/* Esquema para una forma */
export const FormSchema = object({
  name: string(
    'El nombre de la forma es obligatorio y debe ser una cadena de texto.',
  ),
  url: string(
    'La URL de la forma es obligatoria y debe ser una cadena de texto.',
  ),
});

/* Esquema para game indices */
export const GameIndexSchema = object({
  game_index: number(
    'El índice del juego es obligatorio y debe ser un número.',
  ),
  version: NamedAPIResourceSchema,
});

/* Esquema para cada objeto dentro de held_items.version_details */
export const HeldItemVersionDetailSchema = object({
  rarity: number('La rareza es obligatoria y debe ser un número.'),
  version: NamedAPIResourceSchema,
});

/* Esquema para held_items */
export const HeldItemSchema = object({
  item: NamedAPIResourceSchema,
  version_details: array(
    HeldItemVersionDetailSchema,
    "El campo 'version_details' debe ser un arreglo.",
  ),
});

/* Esquema para cada objeto dentro de moves.version_group_details */
export const MoveVersionGroupDetailSchema = object({
  level_learned_at: number(
    'El nivel de aprendizaje es obligatorio y debe ser un número.',
  ),
  version_group: NamedAPIResourceSchema,
  move_learn_method: NamedAPIResourceSchema,
});

/* Esquema para moves */
export const MoveSchema = object({
  move: NamedAPIResourceSchema,
  version_group_details: array(
    MoveVersionGroupDetailSchema,
    "El campo 'version_group_details' debe ser un arreglo.",
  ),
});

/* Esquema para cries */
export const CriesSchema = object({
  latest: string(
    "El campo 'latest' es obligatorio en cries y debe ser una cadena de texto.",
  ),
  legacy: nullable(string("El campo 'legacy' debe ser una cadena de texto.")),
});

/* Esquema para stats */
export const StatSchema = object({
  base_stat: number(
    "El campo 'base_stat' es obligatorio y debe ser un número.",
  ),
  effort: number("El campo 'effort' es obligatorio y debe ser un número."),
  stat: object({
    ...NamedAPIResourceSchema.entries,
    name: picklist([
      'hp',
      'attack',
      'defense',
      'special-attack',
      'special-defense',
      'speed',
    ]),
  }),
});

/* Esquema para types */
export const PokemonTypeSchema = object({
  slot: number(
    "El campo 'slot' en 'types' es obligatorio y debe ser un número.",
  ),
  type: object({
    ...NamedAPIResourceSchema.entries,
    name: picklist([
      'normal',
      'fighting',
      'flying',
      'poison',
      'ground',
      'rock',
      'bug',
      'ghost',
      'steel',
      'fire',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'dark',
      'fairy',
      'stellar',
      'unknown',
    ]),
  }),
});

/* Esquema para past_types */
export const PastTypeSchema = object({
  generation: NamedAPIResourceSchema,
  types: array(
    PokemonTypeSchema,
    "El campo 'types' en past_types debe ser un arreglo.",
  ),
});

/* ===========================
   Esquemas para Sprites
   =========================== */

/* Esquemas para "other" dentro de sprites */
export const DreamWorldSpritesSchema = object({
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en dream_world y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en dream_world debe ser una cadena de texto o nulo.",
    ),
  ),
});

export const HomeSpritesSchema = object({
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en home y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en home debe ser una cadena de texto o nulo.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en home y debe ser una cadena de texto.",
    ),
  ),
  front_shiny_female: nullable(
    string(
      "El campo 'front_shiny_female' en home debe ser una cadena de texto o nulo.",
    ),
  ),
});

export const OfficialArtworkSpritesSchema = object({
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en official-artwork y debe ser una cadena de texto.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en official-artwork y debe ser una cadena de texto.",
    ),
  ),
});

export const ShowdownSpritesSchema = object({
  back_default: nullable(
    string(
      "El campo 'back_default' es obligatorio en showdown y debe ser una cadena de texto.",
    ),
  ),
  back_female: nullable(
    string(
      "El campo 'back_female' en showdown debe ser una cadena de texto o nulo.",
    ),
  ),
  back_shiny: nullable(
    string(
      "El campo 'back_shiny' es obligatorio en showdown y debe ser una cadena de texto.",
    ),
  ),
  back_shiny_female: nullable(
    string(
      "El campo 'back_shiny_female' en showdown debe ser una cadena de texto o nulo.",
    ),
  ),
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en showdown y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en showdown debe ser una cadena de texto o nulo.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en showdown y debe ser una cadena de texto.",
    ),
  ),
  front_shiny_female: nullable(
    string(
      "El campo 'front_shiny_female' en showdown debe ser una cadena de texto o nulo.",
    ),
  ),
});

export const OtherSpritesSchema = object({
  'dream_world': DreamWorldSpritesSchema,
  'home': HomeSpritesSchema,
  'official-artwork': OfficialArtworkSpritesSchema,
  'showdown': ShowdownSpritesSchema,
});

/* Esquemas para cada generación dentro de sprites. */

/* Generation I */
export const GenerationIRedBlueSchema = object({
  back_default: nullable(
    string(
      "El campo 'back_default' es obligatorio en generation-i red-blue y debe ser una cadena de texto.",
    ),
  ),
  back_gray: nullable(
    string(
      "El campo 'back_gray' es obligatorio en generation-i red-blue y debe ser una cadena de texto.",
    ),
  ),
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en generation-i red-blue y debe ser una cadena de texto.",
    ),
  ),
  front_gray: nullable(
    string(
      "El campo 'front_gray' es obligatorio en generation-i red-blue y debe ser una cadena de texto.",
    ),
  ),
});

export const GenerationIYellowSchema = object({
  back_default: nullable(
    string(
      "El campo 'back_default' es obligatorio en generation-i yellow y debe ser una cadena de texto.",
    ),
  ),
  back_gray: nullable(
    string(
      "El campo 'back_gray' es obligatorio en generation-i yellow y debe ser una cadena de texto.",
    ),
  ),
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en generation-i yellow y debe ser una cadena de texto.",
    ),
  ),
  front_gray: nullable(
    string(
      "El campo 'front_gray' es obligatorio en generation-i yellow y debe ser una cadena de texto.",
    ),
  ),
});

export const GenerationISchema = object({
  'red-blue': GenerationIRedBlueSchema,
  'yellow': GenerationIYellowSchema,
});

/* Generation II */
export const GenIISpriteSchema = object({
  back_default: nullable(
    string(
      "El campo 'back_default' es obligatorio en generation-ii y debe ser una cadena de texto.",
    ),
  ),
  back_shiny: nullable(
    string(
      "El campo 'back_shiny' es obligatorio en generation-ii y debe ser una cadena de texto.",
    ),
  ),
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en generation-ii y debe ser una cadena de texto.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en generation-ii y debe ser una cadena de texto.",
    ),
  ),
});

export const GenerationIISchema = object({
  crystal: GenIISpriteSchema,
  gold: GenIISpriteSchema,
  silver: GenIISpriteSchema,
});

/* Generation III */
export const GenerationIIIEmeraldSchema = object({
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en generation-iii emerald y debe ser una cadena de texto.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en generation-iii emerald y debe ser una cadena de texto.",
    ),
  ),
});

export const GenerationIIIFireRedLeafGreenSchema = object({
  back_default: nullable(
    string(
      "El campo 'back_default' es obligatorio en generation-iii firered-leafgreen y debe ser una cadena de texto.",
    ),
  ),
  back_shiny: nullable(
    string(
      "El campo 'back_shiny' es obligatorio en generation-iii firered-leafgreen y debe ser una cadena de texto.",
    ),
  ),
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en generation-iii firered-leafgreen y debe ser una cadena de texto.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en generation-iii firered-leafgreen y debe ser una cadena de texto.",
    ),
  ),
});

/* Para ruby-sapphire se usa la misma estructura que firered-leafgreen */
export const GenerationIIIRubySapphireSchema =
  GenerationIIIFireRedLeafGreenSchema;

export const GenerationIIISchema = object({
  'emerald': GenerationIIIEmeraldSchema,
  'firered-leafgreen': GenerationIIIFireRedLeafGreenSchema,
  'ruby-sapphire': GenerationIIIRubySapphireSchema,
});

/* Generation IV */
export const GenIVSpriteSchema = object({
  back_default: nullable(
    string(
      "El campo 'back_default' es obligatorio en generation-iv y debe ser una cadena de texto.",
    ),
  ),
  back_female: nullable(
    string(
      "El campo 'back_female' en generation-iv debe ser una cadena de texto o nulo.",
    ),
  ),
  back_shiny: nullable(
    string(
      "El campo 'back_shiny' es obligatorio en generation-iv y debe ser una cadena de texto.",
    ),
  ),
  back_shiny_female: nullable(
    string(
      "El campo 'back_shiny_female' en generation-iv debe ser una cadena de texto o nulo.",
    ),
  ),
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en generation-iv y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en generation-iv debe ser una cadena de texto o nulo.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en generation-iv y debe ser una cadena de texto.",
    ),
  ),
  front_shiny_female: nullable(
    string(
      "El campo 'front_shiny_female' en generation-iv debe ser una cadena de texto o nulo.",
    ),
  ),
});

export const GenerationIVSchema = object({
  'diamond-pearl': GenIVSpriteSchema,
  'heartgold-soulsilver': GenIVSpriteSchema,
  'platinum': GenIVSpriteSchema,
});

/* Generation V */
export const AnimatedSpriteSchema = object({
  back_default: nullable(
    string(
      "El campo 'back_default' es obligatorio en animated y debe ser una cadena de texto.",
    ),
  ),
  back_female: nullable(
    string(
      "El campo 'back_female' en animated debe ser una cadena de texto o nulo.",
    ),
  ),
  back_shiny: nullable(
    string(
      "El campo 'back_shiny' es obligatorio en animated y debe ser una cadena de texto.",
    ),
  ),
  back_shiny_female: nullable(
    string(
      "El campo 'back_shiny_female' en animated debe ser una cadena de texto o nulo.",
    ),
  ),
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en animated y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en animated debe ser una cadena de texto o nulo.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en animated y debe ser una cadena de texto.",
    ),
  ),
  front_shiny_female: nullable(
    string(
      "El campo 'front_shiny_female' en animated debe ser una cadena de texto o nulo.",
    ),
  ),
});

export const GenerationVBlackWhiteSchema = object({
  animated: AnimatedSpriteSchema,
  back_default: nullable(
    string(
      "El campo 'back_default' es obligatorio en generation-v black-white y debe ser una cadena de texto.",
    ),
  ),
  back_female: nullable(
    string(
      "El campo 'back_female' en generation-v black-white debe ser una cadena de texto o nulo.",
    ),
  ),
  back_shiny: nullable(
    string(
      "El campo 'back_shiny' es obligatorio en generation-v black-white y debe ser una cadena de texto.",
    ),
  ),
  back_shiny_female: nullable(
    string(
      "El campo 'back_shiny_female' en generation-v black-white debe ser una cadena de texto o nulo.",
    ),
  ),
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en generation-v black-white y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en generation-v black-white debe ser una cadena de texto o nulo.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en generation-v black-white y debe ser una cadena de texto.",
    ),
  ),
  front_shiny_female: nullable(
    string(
      "El campo 'front_shiny_female' en generation-v black-white debe ser una cadena de texto o nulo.",
    ),
  ),
});

export const GenerationVSchema = object({
  'black-white': GenerationVBlackWhiteSchema,
});

/* Generation VI */
export const GenerationVISpriteSchema = object({
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en generation-vi y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en generation-vi debe ser una cadena de texto o nulo.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en generation-vi y debe ser una cadena de texto.",
    ),
  ),
  front_shiny_female: nullable(
    string(
      "El campo 'front_shiny_female' en generation-vi debe ser una cadena de texto o nulo.",
    ),
  ),
});

export const GenerationVISchema = object({
  'omegaruby-alphasapphire': GenerationVISpriteSchema,
  'x-y': GenerationVISpriteSchema,
});

/* Generation VII */
export const GenerationVIIIconsSchema = object({
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en generation-vii icons y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en generation-vii icons debe ser una cadena de texto o nulo.",
    ),
  ),
});

export const UltraSunUltraMoonSchema = object({
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en ultra-sun-ultra-moon y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en ultra-sun-ultra-moon debe ser una cadena de texto o nulo.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en ultra-sun-ultra-moon y debe ser una cadena de texto.",
    ),
  ),
  front_shiny_female: nullable(
    string(
      "El campo 'front_shiny_female' en ultra-sun-ultra-moon debe ser una cadena de texto o nulo.",
    ),
  ),
});

export const GenerationVIISchema = object({
  'icons': GenerationVIIIconsSchema,
  'ultra-sun-ultra-moon': UltraSunUltraMoonSchema,
});

/* Generation VIII */
export const GenerationVIIISchema = object({
  icons: GenerationVIIIconsSchema,
});

/* Esquema para versions */
export const VersionsSchema = object({
  'generation-i': GenerationISchema,
  'generation-ii': GenerationIISchema,
  'generation-iii': GenerationIIISchema,
  'generation-iv': GenerationIVSchema,
  'generation-v': GenerationVSchema,
  'generation-vi': GenerationVISchema,
  'generation-vii': GenerationVIISchema,
  'generation-viii': GenerationVIIISchema,
});

/* Esquema principal de Sprites */
export const SpritesSchema = object({
  back_default: nullable(
    string(
      "El campo 'back_default' es obligatorio en sprites y debe ser una cadena de texto.",
    ),
  ),
  back_female: nullable(
    string(
      "El campo 'back_female' en sprites debe ser una cadena de texto o nulo.",
    ),
  ),
  back_shiny: nullable(
    string(
      "El campo 'back_shiny' es obligatorio en sprites y debe ser una cadena de texto.",
    ),
  ),
  back_shiny_female: nullable(
    string(
      "El campo 'back_shiny_female' en sprites debe ser una cadena de texto o nulo.",
    ),
  ),
  front_default: nullable(
    string(
      "El campo 'front_default' es obligatorio en sprites y debe ser una cadena de texto.",
    ),
  ),
  front_female: nullable(
    string(
      "El campo 'front_female' en sprites debe ser una cadena de texto o nulo.",
    ),
  ),
  front_shiny: nullable(
    string(
      "El campo 'front_shiny' es obligatorio en sprites y debe ser una cadena de texto.",
    ),
  ),
  front_shiny_female: nullable(
    string(
      "El campo 'front_shiny_female' en sprites debe ser una cadena de texto o nulo.",
    ),
  ),
  other: OtherSpritesSchema,
  versions: VersionsSchema,
});

/* ===========================
   Esquema principal del Pokémon
   =========================== */

export const PokemonSchema = object({
  id: number("El campo 'id' es obligatorio y debe ser un número."),
  name: string(
    "El campo 'name' es obligatorio y debe ser una cadena de texto.",
  ),
  base_experience: number(
    "El campo 'base_experience' es obligatorio y debe ser un número.",
  ),
  height: number("El campo 'height' es obligatorio y debe ser un número."),
  is_default: boolean(
    "El campo 'is_default' es obligatorio y debe ser verdadero o falso.",
  ),
  order: number("El campo 'order' es obligatorio y debe ser un número."),
  weight: number("El campo 'weight' es obligatorio y debe ser un número."),
  abilities: array(
    PokemonAbilitySchema,
    "El campo 'abilities' debe ser un arreglo.",
  ),
  forms: array(FormSchema, "El campo 'forms' debe ser un arreglo."),
  game_indices: array(
    GameIndexSchema,
    "El campo 'game_indices' debe ser un arreglo.",
  ),
  held_items: array(
    HeldItemSchema,
    "El campo 'held_items' debe ser un arreglo.",
  ),
  location_area_encounters: string(
    "El campo 'location_area_encounters' es obligatorio y debe ser una cadena de texto.",
  ),
  moves: array(MoveSchema, "El campo 'moves' debe ser un arreglo."),
  species: NamedAPIResourceSchema,
  sprites: SpritesSchema,
  cries: CriesSchema,
  stats: array(StatSchema, "El campo 'stats' debe ser un arreglo."),
  types: array(PokemonTypeSchema, "El campo 'types' debe ser un arreglo."),
  past_types: array(
    PastTypeSchema,
    "El campo 'past_types' debe ser un arreglo.",
  ),
});

export type PokemonSchemaOutput = InferOutput<typeof PokemonSchema>;

export function parsePokemonSchema(payload: unknown): PokemonSchemaOutput {
  return parse(PokemonSchema, payload);
}
