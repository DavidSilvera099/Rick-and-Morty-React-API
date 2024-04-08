import React, { useState, useEffect } from 'react';
import './App.css';
import SearchAndFilter from "./components/SearchAndFilter";
import CharacterCard from "./components/CharacterCard"; 

function App() {
  // Estados para personajes y filtros de búsqueda.
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Llamada a la API.
  const getCharacters = async (name = '', status = '') => {
    let url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`); // Error si la respuesta no es exitosa.
      }
      const data = await response.json();
      setCharacters(data.results || []);
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Ha ocurrido un error al cargar los personajes'); 
    }
  };

  // Actualiza personajes cuando los filtros cambian.
  useEffect(() => {
    getCharacters(nameFilter, statusFilter);
  }, [nameFilter, statusFilter]);

  return (
    <>
      <h1>Rick and Morty</h1>
      <SearchAndFilter setNameFilter={setNameFilter} setStatusFilter={setStatusFilter} />
      <div className="container">
        <div id="characters">
        {characters.length ? characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        )) : <h2 id="mns-not-found">No se encontraron personajes con ese nombre.</h2>}
        </div>
      </div>
    </>
  );
}

export default App;
