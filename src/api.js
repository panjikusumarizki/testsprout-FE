import axios from 'axios';

export const getPokemons = (limit = 20) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);

export const getPokemonDetail = (url) =>
  axios.get(url);