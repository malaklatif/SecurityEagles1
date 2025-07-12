import React from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

const Calendar = ({ selected, onSelect, className, eventDates = [] }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = React.useState(
    selected ? selected.getMonth() : today.getMonth()
  );
  const [currentYear, setCurrentYear] = React.useState(
    selected ? selected.getFullYear() : today.getFullYear()
  );

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isSelected = (day) => {
    if (!selected) return false;
    return (
      selected.getDate() === day &&
      selected.getMonth() === currentMonth &&
      selected.getFullYear() === currentYear
    );
  };

  const handleSelect = (day) => {
    if (onSelect) {
      onSelect(new Date(currentYear, currentMonth, day));
    }
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <button onClick={handlePrevMonth} className="px-2 py-1 text-blue-500 hover:underline">&lt;</button>
        <span className="font-semibold">
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button onClick={handleNextMonth} className="px-2 py-1 text-blue-500 hover:underline">&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-center mb-1">
        {daysOfWeek.map((d) => (
          <div key={d} className="font-medium text-blue-700">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array(firstDay).fill(null).map((_, i) => (
          <div key={i}></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const hasEvent = eventDates.includes(dateStr);

          return (
            <button
              key={day}
              onClick={() => handleSelect(day)}
              className={`py-1 rounded-full transition-colors flex flex-col items-center ${
                isSelected(day)
                  ? 'bg-blue-500 text-white font-bold'
                  : 'hover:bg-blue-100 text-blue-900'
              }`}
            >
              <span>{day}</span>
              {hasEvent && <span className="w-2 h-2 mt-0.5 rounded-full bg-blue-500 block"></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { Calendar }; 