import { useState } from 'react';

export default function DatePicker({ onDateChange, disabledDates = [] }) {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(month, year);

  const days = Array.from({ length: firstDay }, () => null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setMonth(month - 1)}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          ←
        </button>
        <h3 className="font-semibold">
          {new Date(year, month).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </h3>
        <button
          onClick={() => setMonth(month + 1)}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
        {days.map((day, idx) => (
          <button
            key={idx}
            disabled={!day || disabledDates.includes(day)}
            onClick={() => onDateChange(new Date(year, month, day))}
            className={`py-2 rounded text-sm ${
              !day
                ? ''
                : disabledDates.includes(day)
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'hover:bg-blue-100 hover:text-blue-600'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
