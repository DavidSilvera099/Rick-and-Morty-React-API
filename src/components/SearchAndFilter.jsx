import React, { useState, useEffect } from 'react';

// Componente para búsqueda y filtrado de personajes.
const SearchAndFilter = ({ setNameFilter, setStatusFilter }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setNameFilter(inputValue); // Actualiza el filtro de nombre en el componente padre.
    }, 500); // Espera de 500 ms.

    return () => clearTimeout(timer); // Limpieza al  actualizar el componente.
  }, [inputValue, setNameFilter]);

  return (
    <div className="filters">
      <input
        type="text"
        id="name-filter"
        placeholder="Escribe el nombre del personaje"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado.
      />
      <select
        id="status-filters"
        onChange={(e) => setStatusFilter(e.target.value)} // Actualiza el filtro de estado.
        className="status-width"
      >
        <option value="">Todos</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default SearchAndFilter;
