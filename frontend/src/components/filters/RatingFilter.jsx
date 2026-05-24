import { useState } from 'react';

export default function RatingFilter({ rating, onChange }) {
  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div>
      <label className="text-gray-700 font-semibold mb-3 block">Rating</label>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((r) => (
          <label key={r} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={r}
              onChange={() => handleChange(r)}
              checked={rating === r}
              className="w-4 h-4"
            />
            <span className="text-yellow-500">{'⭐'.repeat(r)}</span>
            <span className="text-gray-600">& up</span>
          </label>
        ))}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="rating"
            value={0}
            onChange={() => handleChange(0)}
            checked={rating === 0}
            className="w-4 h-4"
          />
          <span className="text-gray-600">All ratings</span>
        </label>
      </div>
    </div>
  );
}
