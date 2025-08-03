import React, { useEffect, useState } from 'react';
import { getPokemons } from '../api';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((res) => {
      setPokemons(res.data.results);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pokémon List</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pokemons.map((poke) => (
          <PokemonCard key={poke.name} name={poke.name} url={poke.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;