import type { PokemonSchemaOutput } from '~/features/pokemon/schemas/pokemon.schema';

export const pokemon: PokemonSchemaOutput = {
  abilities: [
    {
      ability: {
        name: 'guts',
        url: 'https://pokeapi.co/api/v2/ability/62/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'no-guard',
        url: 'https://pokeapi.co/api/v2/ability/99/',
      },
      is_hidden: false,
      slot: 2,
    },
    {
      ability: {
        name: 'steadfast',
        url: 'https://pokeapi.co/api/v2/ability/80/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 142,
  cries: {
    latest:
      'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/67.ogg',
    legacy:
      'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/67.ogg',
  },
  forms: [
    {
      name: 'machoke',
      url: 'https://pokeapi.co/api/v2/pokemon-form/67/',
    },
  ],
  game_indices: [
    {
      game_index: 41,
      version: {
        name: 'red',
        url: 'https://pokeapi.co/api/v2/version/1/',
      },
    },
    {
      game_index: 41,
      version: {
        name: 'blue',
        url: 'https://pokeapi.co/api/v2/version/2/',
      },
    },
    {
      game_index: 41,
      version: {
        name: 'yellow',
        url: 'https://pokeapi.co/api/v2/version/3/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'gold',
        url: 'https://pokeapi.co/api/v2/version/4/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'silver',
        url: 'https://pokeapi.co/api/v2/version/5/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'crystal',
        url: 'https://pokeapi.co/api/v2/version/6/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'ruby',
        url: 'https://pokeapi.co/api/v2/version/7/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'sapphire',
        url: 'https://pokeapi.co/api/v2/version/8/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'emerald',
        url: 'https://pokeapi.co/api/v2/version/9/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'firered',
        url: 'https://pokeapi.co/api/v2/version/10/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'diamond',
        url: 'https://pokeapi.co/api/v2/version/12/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'pearl',
        url: 'https://pokeapi.co/api/v2/version/13/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'black',
        url: 'https://pokeapi.co/api/v2/version/17/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'white',
        url: 'https://pokeapi.co/api/v2/version/18/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'black-2',
        url: 'https://pokeapi.co/api/v2/version/21/',
      },
    },
    {
      game_index: 67,
      version: {
        name: 'white-2',
        url: 'https://pokeapi.co/api/v2/version/22/',
      },
    },
  ],
  height: 15,
  held_items: [
    {
      item: {
        name: 'focus-band',
        url: 'https://pokeapi.co/api/v2/item/207/',
      },
      version_details: [
        {
          rarity: 5,
          version: {
            name: 'firered',
            url: 'https://pokeapi.co/api/v2/version/10/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'leafgreen',
            url: 'https://pokeapi.co/api/v2/version/11/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'omega-ruby',
            url: 'https://pokeapi.co/api/v2/version/25/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version/26/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'sun',
            url: 'https://pokeapi.co/api/v2/version/27/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'moon',
            url: 'https://pokeapi.co/api/v2/version/28/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'ultra-sun',
            url: 'https://pokeapi.co/api/v2/version/29/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'ultra-moon',
            url: 'https://pokeapi.co/api/v2/version/30/',
          },
        },
      ],
    },
  ],
  id: 67,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/67/encounters',
  moves: [
    {
      move: {
        name: 'karate-chop',
        url: 'https://pokeapi.co/api/v2/move/2/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mega-punch',
        url: 'https://pokeapi.co/api/v2/move/5/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'fire-punch',
        url: 'https://pokeapi.co/api/v2/move/7/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'ice-punch',
        url: 'https://pokeapi.co/api/v2/move/8/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'thunder-punch',
        url: 'https://pokeapi.co/api/v2/move/9/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mega-kick',
        url: 'https://pokeapi.co/api/v2/move/25/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'headbutt',
        url: 'https://pokeapi.co/api/v2/move/29/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'tackle',
        url: 'https://pokeapi.co/api/v2/move/33/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'legends-arceus',
            url: 'https://pokeapi.co/api/v2/version-group/24/',
          },
        },
      ],
    },
    {
      move: {
        name: 'body-slam',
        url: 'https://pokeapi.co/api/v2/move/34/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'take-down',
        url: 'https://pokeapi.co/api/v2/move/36/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: {
        name: 'double-edge',
        url: 'https://pokeapi.co/api/v2/move/38/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 66,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 66,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'legends-arceus',
            url: 'https://pokeapi.co/api/v2/version-group/24/',
          },
        },
      ],
    },
    {
      move: {
        name: 'leer',
        url: 'https://pokeapi.co/api/v2/move/43/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'flamethrower',
        url: 'https://pokeapi.co/api/v2/move/53/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'submission',
        url: 'https://pokeapi.co/api/v2/move/66/',
      },
      version_group_details: [
        {
          level_learned_at: 52,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 61,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 61,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'low-kick',
        url: 'https://pokeapi.co/api/v2/move/67/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'counter',
        url: 'https://pokeapi.co/api/v2/move/68/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
      ],
    },
    {
      move: {
        name: 'seismic-toss',
        url: 'https://pokeapi.co/api/v2/move/69/',
      },
      version_group_details: [
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 48,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 48,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'strength',
        url: 'https://pokeapi.co/api/v2/move/70/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'earthquake',
        url: 'https://pokeapi.co/api/v2/move/89/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'fissure',
        url: 'https://pokeapi.co/api/v2/move/90/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: {
        name: 'dig',
        url: 'https://pokeapi.co/api/v2/move/91/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'toxic',
        url: 'https://pokeapi.co/api/v2/move/92/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rage',
        url: 'https://pokeapi.co/api/v2/move/99/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mimic',
        url: 'https://pokeapi.co/api/v2/move/102/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
      ],
    },
    {
      move: {
        name: 'double-team',
        url: 'https://pokeapi.co/api/v2/move/104/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'light-screen',
        url: 'https://pokeapi.co/api/v2/move/113/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'focus-energy',
        url: 'https://pokeapi.co/api/v2/move/116/',
      },
      version_group_details: [
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bide',
        url: 'https://pokeapi.co/api/v2/move/117/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'metronome',
        url: 'https://pokeapi.co/api/v2/move/118/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'fire-blast',
        url: 'https://pokeapi.co/api/v2/move/126/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'skull-bash',
        url: 'https://pokeapi.co/api/v2/move/130/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rest',
        url: 'https://pokeapi.co/api/v2/move/156/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rock-slide',
        url: 'https://pokeapi.co/api/v2/move/157/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'substitute',
        url: 'https://pokeapi.co/api/v2/move/164/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'thief',
        url: 'https://pokeapi.co/api/v2/move/168/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'snore',
        url: 'https://pokeapi.co/api/v2/move/173/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'curse',
        url: 'https://pokeapi.co/api/v2/move/174/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
      ],
    },
    {
      move: {
        name: 'reversal',
        url: 'https://pokeapi.co/api/v2/move/179/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'protect',
        url: 'https://pokeapi.co/api/v2/move/182/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mach-punch',
        url: 'https://pokeapi.co/api/v2/move/183/',
      },
      version_group_details: [
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'legends-arceus',
            url: 'https://pokeapi.co/api/v2/version-group/24/',
          },
        },
      ],
    },
    {
      move: {
        name: 'scary-face',
        url: 'https://pokeapi.co/api/v2/move/184/',
      },
      version_group_details: [
        {
          level_learned_at: 52,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mud-slap',
        url: 'https://pokeapi.co/api/v2/move/189/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'foresight',
        url: 'https://pokeapi.co/api/v2/move/193/',
      },
      version_group_details: [
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'detect',
        url: 'https://pokeapi.co/api/v2/move/197/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
      ],
    },
    {
      move: {
        name: 'endure',
        url: 'https://pokeapi.co/api/v2/move/203/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'swagger',
        url: 'https://pokeapi.co/api/v2/move/207/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'attract',
        url: 'https://pokeapi.co/api/v2/move/213/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sleep-talk',
        url: 'https://pokeapi.co/api/v2/move/214/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'return',
        url: 'https://pokeapi.co/api/v2/move/216/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'frustration',
        url: 'https://pokeapi.co/api/v2/move/218/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'dynamic-punch',
        url: 'https://pokeapi.co/api/v2/move/223/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 59,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 59,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 59,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 59,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 59,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 54,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 54,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'encore',
        url: 'https://pokeapi.co/api/v2/move/227/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'vital-throw',
        url: 'https://pokeapi.co/api/v2/move/233/',
      },
      version_group_details: [
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 24,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 24,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'hidden-power',
        url: 'https://pokeapi.co/api/v2/move/237/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'cross-chop',
        url: 'https://pokeapi.co/api/v2/move/238/',
      },
      version_group_details: [
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 60,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 60,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rain-dance',
        url: 'https://pokeapi.co/api/v2/move/240/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sunny-day',
        url: 'https://pokeapi.co/api/v2/move/241/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rock-smash',
        url: 'https://pokeapi.co/api/v2/move/249/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'legends-arceus',
            url: 'https://pokeapi.co/api/v2/version-group/24/',
          },
        },
      ],
    },
    {
      move: {
        name: 'facade',
        url: 'https://pokeapi.co/api/v2/move/263/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'focus-punch',
        url: 'https://pokeapi.co/api/v2/move/264/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'helping-hand',
        url: 'https://pokeapi.co/api/v2/move/270/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'role-play',
        url: 'https://pokeapi.co/api/v2/move/272/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'superpower',
        url: 'https://pokeapi.co/api/v2/move/276/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 48,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'revenge',
        url: 'https://pokeapi.co/api/v2/move/279/',
      },
      version_group_details: [
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'brick-break',
        url: 'https://pokeapi.co/api/v2/move/280/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'knock-off',
        url: 'https://pokeapi.co/api/v2/move/282/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'secret-power',
        url: 'https://pokeapi.co/api/v2/move/290/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rock-tomb',
        url: 'https://pokeapi.co/api/v2/move/317/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bulk-up',
        url: 'https://pokeapi.co/api/v2/move/339/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'legends-arceus',
            url: 'https://pokeapi.co/api/v2/version-group/24/',
          },
        },
      ],
    },
    {
      move: {
        name: 'wake-up-slap',
        url: 'https://pokeapi.co/api/v2/move/358/',
      },
      version_group_details: [
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'natural-gift',
        url: 'https://pokeapi.co/api/v2/move/363/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'close-combat',
        url: 'https://pokeapi.co/api/v2/move/370/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'legends-arceus',
            url: 'https://pokeapi.co/api/v2/version-group/24/',
          },
        },
      ],
    },
    {
      move: {
        name: 'payback',
        url: 'https://pokeapi.co/api/v2/move/371/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'fling',
        url: 'https://pokeapi.co/api/v2/move/374/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'poison-jab',
        url: 'https://pokeapi.co/api/v2/move/398/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'vacuum-wave',
        url: 'https://pokeapi.co/api/v2/move/410/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'focus-blast',
        url: 'https://pokeapi.co/api/v2/move/411/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bullet-punch',
        url: 'https://pokeapi.co/api/v2/move/418/',
      },
      version_group_details: [
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'legends-arceus',
            url: 'https://pokeapi.co/api/v2/version-group/24/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rock-climb',
        url: 'https://pokeapi.co/api/v2/move/431/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'captivate',
        url: 'https://pokeapi.co/api/v2/move/445/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'double-hit',
        url: 'https://pokeapi.co/api/v2/move/458/',
      },
      version_group_details: [
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'legends-arceus',
            url: 'https://pokeapi.co/api/v2/version-group/24/',
          },
        },
      ],
    },
    {
      move: {
        name: 'smack-down',
        url: 'https://pokeapi.co/api/v2/move/479/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'heavy-slam',
        url: 'https://pokeapi.co/api/v2/move/484/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'low-sweep',
        url: 'https://pokeapi.co/api/v2/move/490/',
      },
      version_group_details: [
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'round',
        url: 'https://pokeapi.co/api/v2/move/496/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'incinerate',
        url: 'https://pokeapi.co/api/v2/move/510/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'retaliate',
        url: 'https://pokeapi.co/api/v2/move/514/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bulldoze',
        url: 'https://pokeapi.co/api/v2/move/523/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'work-up',
        url: 'https://pokeapi.co/api/v2/move/526/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'dual-chop',
        url: 'https://pokeapi.co/api/v2/move/530/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'confide',
        url: 'https://pokeapi.co/api/v2/move/590/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'power-up-punch',
        url: 'https://pokeapi.co/api/v2/move/612/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'stomping-tantrum',
        url: 'https://pokeapi.co/api/v2/move/707/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'coaching',
        url: 'https://pokeapi.co/api/v2/move/811/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
  ],
  name: 'machoke',
  order: 108,
  past_abilities: [],
  past_types: [],
  species: {
    name: 'machoke',
    url: 'https://pokeapi.co/api/v2/pokemon-species/67/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/67.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/67.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/67.png',
    front_shiny_female: null,
    other: {
      'dream_world': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/67.svg',
        front_female: null,
      },
      'home': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/67.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/67.png',
        front_shiny_female: null,
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/67.png',
      },
      'showdown': {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/67.gif',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/67.gif',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/67.gif',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/67.gif',
        front_shiny_female: null,
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/67.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/67.png',
          //@ts-expect-error TODO: Fix this
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/67.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/67.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/67.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/67.png',
        },
        'yellow': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/67.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/67.png',
          //@ts-expect-error TODO: Fix this
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/67.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/67.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/67.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/67.png',
        },
      },
      'generation-ii': {
        crystal: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/67.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/67.png',
          //@ts-expect-error TODO: Fix this
          back_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/67.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/67.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/67.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/67.png',
          front_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/67.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/67.png',
        },
        gold: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/67.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/67.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/67.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/67.png',
          //@ts-expect-error TODO: Fix this
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/67.png',
        },
        silver: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/67.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/67.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/67.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/67.png',
          //@ts-expect-error TODO: Fix this
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/67.png',
        },
      },
      'generation-iii': {
        'emerald': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/67.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/67.png',
        },
        'firered-leafgreen': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/67.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/67.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/67.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/67.png',
        },
        'ruby-sapphire': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/67.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/67.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/67.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/67.png',
        },
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/67.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/67.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/67.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/67.png',
          front_shiny_female: null,
        },
        'heartgold-soulsilver': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/67.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/67.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/67.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/67.png',
          front_shiny_female: null,
        },
        'platinum': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/67.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/67.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/67.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/67.png',
          front_shiny_female: null,
        },
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/67.gif',
            back_female: null,
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/67.gif',
            back_shiny_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/67.gif',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/67.gif',
            front_shiny_female: null,
          },
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/67.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/67.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/67.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/67.png',
          front_shiny_female: null,
        },
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/67.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/67.png',
          front_shiny_female: null,
        },
        'x-y': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/67.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/67.png',
          front_shiny_female: null,
        },
      },
      'generation-vii': {
        'icons': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/67.png',
          front_female: null,
        },
        'ultra-sun-ultra-moon': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/67.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/67.png',
          front_shiny_female: null,
        },
      },
      'generation-viii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/67.png',
          front_female: null,
        },
      },
    },
  },
  stats: [
    {
      base_stat: 80,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 100,
      effort: 2,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 70,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'fighting',
        url: 'https://pokeapi.co/api/v2/type/2/',
      },
    },
  ],
  weight: 705,
};
