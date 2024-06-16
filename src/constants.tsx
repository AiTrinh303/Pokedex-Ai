import {
  blue,
  brown,
  cyan,
  deepPurple,
  green,
  grey,
  lime,
  orange,
  pink,
  purple,
  red,
  yellow,
} from "@mui/material/colors";
import { IndexedType } from "./interfaces/pokemon.interface";

export const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2";
export const POKEMON_API_POKEMON_URL = `${POKEMON_API_BASE_URL}/pokemon`;
export const POKEMON_IMAGES_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const POKEMON_TYPES: IndexedType[] = [
  {
    name: "normal",
    url: "https://pokeapi.co/api/v2/type/1/",
    color: brown[100],
  },
  {
    name: "fighting",
    url: "https://pokeapi.co/api/v2/type/2/",
    color: red[800],
  },
  {
    name: "flying",
    url: "https://pokeapi.co/api/v2/type/3/",
    color: purple[300],
  },
  {
    name: "poison",
    url: "https://pokeapi.co/api/v2/type/4/",
    color: purple[500],
  },
  {
    name: "ground",
    url: "https://pokeapi.co/api/v2/type/5/",
    color: brown[300],
  },
  {
    name: "rock",
    url: "https://pokeapi.co/api/v2/type/6/",
    color: brown[500],
  },
  {
    name: "bug",
    url: "https://pokeapi.co/api/v2/type/7/",
    color: lime[500],
  },
  {
    name: "ghost",
    url: "https://pokeapi.co/api/v2/type/8/",
    color: deepPurple[700],
  },
  {
    name: "steel",
    url: "https://pokeapi.co/api/v2/type/9/",
    color: grey[500],
  },
  {
    name: "fire",
    url: "https://pokeapi.co/api/v2/type/10/",
    color: orange[500],
  },
  {
    name: "water",
    url: "https://pokeapi.co/api/v2/type/11/",
    color: blue[500],
  },
  {
    name: "grass",
    url: "https://pokeapi.co/api/v2/type/12/",
    color: green[500],
  },
  {
    name: "electric",
    url: "https://pokeapi.co/api/v2/type/13/",
    color: yellow[700],
  },
  {
    name: "psychic",
    url: "https://pokeapi.co/api/v2/type/14/",
    color: pink[600],
  },
  {
    name: "ice",
    url: "https://pokeapi.co/api/v2/type/15/",
    color: cyan[500],
  },
  {
    name: "dragon",
    url: "https://pokeapi.co/api/v2/type/16/",
    color: deepPurple[500],
  },
  {
    name: "dark",
    url: "https://pokeapi.co/api/v2/type/17/",
    color: grey[800],
  },
  {
    name: "fairy",
    url: "https://pokeapi.co/api/v2/type/18/",
    color: pink[300],
  },
];
