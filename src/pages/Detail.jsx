import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemon(res.data);
    });
  }, [id]);

  if (!pokemon) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600">← Back</Link>
      <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </div>
  );
};

export default Detail;