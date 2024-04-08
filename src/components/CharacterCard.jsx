import React from 'react';

// Componente para mostrar información de un personaje.
const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="content-card">
        <h2>{character.name}</h2>
        <p><span>Status:</span> {character.status}</p>
        <p><span>Especie:</span> {character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
