import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Фильтр по имени <input type="text" value={value} onChange={onChange} />
    </label>
  );
};