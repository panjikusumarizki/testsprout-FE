import React from "react";

export default function StatBar({ name, value }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm">
        <span className="capitalize">{name}</span>
        <span>{value}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div className="h-full bg-green-500 rounded" style={{ width: `${value / 2}%` }}></div>
      </div>
    </div>
  );
}