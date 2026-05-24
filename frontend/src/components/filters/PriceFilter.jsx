import { useState } from 'react';

export default function PriceFilter({ price, onChange }) {
  const handleChange = (index, value) => {
    const newPrice = [...price];
    newPrice[index] = value;
    onChange(newPrice);
  };

  return (
    <div>
      <label className="text-gray-700 font-semibold mb-3 block">Price Range</label>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="0"
            max="1000"
            value={price[0]}
            onChange={(e) => handleChange(0, parseInt(e.target.value))}
            className="flex-1"
          />
          <span className="text-gray-600 font-semibold min-w-12">${price[0]}</span>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="0"
            max="1000"
            value={price[1]}
            onChange={(e) => handleChange(1, parseInt(e.target.value))}
            className="flex-1"
          />
          <span className="text-gray-600 font-semibold min-w-12">${price[1]}</span>
        </div>
      </div>
    </div>
  );
}
