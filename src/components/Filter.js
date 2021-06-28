import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImSearch } from 'react-icons/im';

export default function Filter({ value, onInputChange }) {
  const id = uuidv4();
  return (
    <div>
      <label htmlFor={id}>
        Find contacts by name
        <ImSearch style={{ marginLeft: 5 }} />
      </label>
      <input
        id={id}
        type="text"
        name="filter"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}
