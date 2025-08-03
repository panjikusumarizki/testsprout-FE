import TypeBadge from "./TypeBadge";

export default function PokemonCard({ pokemon, onClick }) {
  return (
    <div
      className="bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer text-center"
      onClick={onClick}
    >
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto w-20 h-20" />
      <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
      <div className="flex justify-center gap-1 mt-1">
        {pokemon.types.map((t) => (
          <TypeBadge key={t.type.name} type={t.type.name} />
        ))}
      </div>
      <p className="text-gray-500 text-sm mt-1">#{pokemon.id.toString().padStart(3, "0")}</p>
    </div>
  );
}
