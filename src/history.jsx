import React, { useContext } from 'react';
import { PetsContext } from './context/PetsContext';

export default function History() {
  const { pets } = useContext(PetsContext);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Adoption History (Mock)</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} from <strong>{pet.shelter}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
