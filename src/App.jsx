import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await res.json();
      const detailPromises = data.results.map((p) => fetch(p.url).then((r) => r.json()));
      const details = await Promise.all(detailPromises);
      setPokemons(details);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Pokedex</h1>
      {selected ? (
        <PokemonDetail pokemon={selected} onBack={() => setSelected(null)} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => setSelected(pokemon)}
            />
          ))}
        </div>
      )}
    </div>
  );
}