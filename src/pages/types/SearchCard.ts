// To parse this data:
//
//   import { Convert, PokemonCard } from "./file";
//
//   const pokemonCard = Convert.toPokemonCard(json);

export interface PokemonCard {
  data: Datum[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export interface Datum {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  hp: string
  types: RetreatCost[]
  evolvesFrom: string
  abilities?: Ability[]
  attacks: Attack[]
  weaknesses: Weakness[]
  retreatCost: RetreatCost[]
  convertedRetreatCost: number
  set: Set
  number: string
  artist: string
  rarity: string
  nationalPokedexNumbers: number[]
  legalities: Legalities
  images: DatumImages
  tcgplayer: Tcgplayer
  cardmarket: Cardmarket
  flavorText?: string
  level?: string
  regulationMark?: string
}

export interface Ability {
  name: string
  text: string
  type: string
}

export interface Attack {
  name: string
  cost: RetreatCost[]
  convertedEnergyCost: number
  damage: string
  text: string
}

export enum RetreatCost {
  Colorless = 'Colorless',
  Water = 'Water',
}

export interface Cardmarket {
  url: string
  updatedAt: string
  prices: Record<string, number>
}

export interface DatumImages {
  small: string
  large: string
}

export interface Legalities {
  unlimited: Expanded
  expanded?: Expanded
  standard?: Expanded
}

export enum Expanded {
  Legal = 'Legal',
}

export interface Set {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legalities
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: SetImages
}

export interface SetImages {
  symbol: string
  logo: string
}

export interface Tcgplayer {
  url: string
  updatedAt: string
  prices: Prices
}

export interface Prices {
  normal?: Holofoil
  reverseHolofoil: Holofoil
  holofoil?: Holofoil
}

export interface Holofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: number | null
}

export interface Weakness {
  type: string
  value: string
}

// Converts JSON strings to/from your types
export class Convert {
  public static toPokemonCard (json: string): PokemonCard {
    return JSON.parse(json)
  }

  public static pokemonCardToJson (value: PokemonCard): string {
    return JSON.stringify(value)
  }
}
