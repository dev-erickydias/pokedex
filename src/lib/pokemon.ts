export interface PokemonStat {
  base_stat: number;
  stat: { name: string };
}

export interface PokemonType {
  type: { name: string };
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
  stats: PokemonStat[];
  height: number;
  weight: number;
}

export async function fetchPokemon(id: number): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.json();
}

export async function fetchBatch(offset: number, limit: number): Promise<Pokemon[]> {
  const promises = [];
  for (let i = offset + 1; i <= offset + limit; i++) {
    promises.push(fetchPokemon(i));
  }
  return Promise.all(promises);
}

export const TYPE_COLORS: Record<string, { bg: string; text: string; glow: string }> = {
  normal:   { bg: "rgba(168,168,120,0.15)", text: "#c8c8a0", glow: "rgba(168,168,120,0.3)" },
  fire:     { bg: "rgba(240,128,48,0.15)",  text: "#f0a060", glow: "rgba(240,128,48,0.3)" },
  water:    { bg: "rgba(104,144,240,0.15)", text: "#88b0f0", glow: "rgba(104,144,240,0.3)" },
  electric: { bg: "rgba(248,208,48,0.15)",  text: "#f0d860", glow: "rgba(248,208,48,0.3)" },
  grass:    { bg: "rgba(120,200,80,0.15)",  text: "#90d068", glow: "rgba(120,200,80,0.3)" },
  ice:      { bg: "rgba(152,216,216,0.15)", text: "#a0d8d8", glow: "rgba(152,216,216,0.3)" },
  fighting: { bg: "rgba(192,48,40,0.15)",   text: "#d06860", glow: "rgba(192,48,40,0.3)" },
  poison:   { bg: "rgba(160,64,160,0.15)",  text: "#c080c0", glow: "rgba(160,64,160,0.3)" },
  ground:   { bg: "rgba(224,192,104,0.15)", text: "#d8c078", glow: "rgba(224,192,104,0.3)" },
  flying:   { bg: "rgba(168,144,240,0.15)", text: "#b0a0f0", glow: "rgba(168,144,240,0.3)" },
  psychic:  { bg: "rgba(248,88,136,0.15)",  text: "#f888a8", glow: "rgba(248,88,136,0.3)" },
  bug:      { bg: "rgba(168,184,32,0.15)",  text: "#b8c838", glow: "rgba(168,184,32,0.3)" },
  rock:     { bg: "rgba(184,160,56,0.15)",  text: "#c8b850", glow: "rgba(184,160,56,0.3)" },
  ghost:    { bg: "rgba(112,88,152,0.15)",  text: "#9878b8", glow: "rgba(112,88,152,0.3)" },
  dragon:   { bg: "rgba(112,56,248,0.15)",  text: "#9878f8", glow: "rgba(112,56,248,0.3)" },
  dark:     { bg: "rgba(112,88,72,0.15)",   text: "#a89888", glow: "rgba(112,88,72,0.3)" },
  steel:    { bg: "rgba(184,184,208,0.15)", text: "#b8b8d0", glow: "rgba(184,184,208,0.3)" },
  fairy:    { bg: "rgba(238,153,172,0.15)", text: "#ee99ac", glow: "rgba(238,153,172,0.3)" },
};

export const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SP.ATK",
  "special-defense": "SP.DEF",
  speed: "SPD",
};

export function getStatColor(value: number): string {
  if (value < 50) return "#ff3d5a";
  if (value < 80) return "#ff9800";
  if (value < 110) return "#f0d860";
  return "#4caf50";
}
