export interface PokemonCard {
  data: Data
}

export interface Data {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  hp: string
  types: string[]
  evolvesFrom: string
  evolvesTo: string[]
  attacks: Attack[]
  weaknesses: Resistance[]
  resistances: Resistance[]
  retreatCost: string[]
  convertedRetreatCost: number
  set: Set
  number: string
  artist: string
  rarity: string
  nationalPokedexNumbers: number[]
  legalities: Legalities
  images: DataImages
  tcgplayer: Tcgplayer
  cardmarket: Cardmarket
}

export interface Attack {
  name: string
  cost: string[]
  convertedEnergyCost: number
  damage: string
  text: string
}

export interface Cardmarket {
  url: string
  updatedAt: string
  prices: Record<string, number>
}

export interface DataImages {
  small: string
  large: string
}

export interface Legalities {
  unlimited: string
}

export interface Resistance {
  type: string
  value: string
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
  normal: Normal
  reverseHolofoil: Normal
}

export interface Normal {
  low: number
  mid: number
  high: number
  market: number
  directLow: null
}
