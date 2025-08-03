const colors = {
  grass: "bg-green-400",
  fire: "bg-red-400",
  water: "bg-blue-400",
  poison: "bg-purple-400",
  flying: "bg-indigo-300",
  bug: "bg-lime-400",
  normal: "bg-gray-400",
  electric: "bg-yellow-300 text-black",
  ground: "bg-yellow-700",
  // tambah sesuai kebutuhan
};

export default function TypeBadge({ type }) {
  return (
    <span
      className={`px-2 py-1 text-xs font-semibold text-white rounded ${
        colors[type] || "bg-gray-500"
      }`}
    >
      {type}
    </span>
  );
}