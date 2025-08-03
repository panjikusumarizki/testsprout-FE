import TypeBadge from "./TypeBadge";
import StatBar from "./StatBar";

export default function PokemonDetail({ pokemon, onBack }) {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <button
        className="text-blue-500 underline mb-4"
        onClick={onBack}
      >
        ← Back to list
      </button>
      <div className="text-center">
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} className="w-48 mx-auto" />
        <h2 className="text-3xl font-bold capitalize">{pokemon.name}</h2>
        <p className="text-gray-500">#{pokemon.id.toString().padStart(3, "0")}</p>
        <div className="flex justify-center gap-2 mt-2">
          {pokemon.types.map((t) => (
            <TypeBadge key={t.type.name} type={t.type.name} />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Base Stats</h3>
        {pokemon.stats.map((stat) => (
          <StatBar key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
        ))}
      </div>
    </div>
  );
}