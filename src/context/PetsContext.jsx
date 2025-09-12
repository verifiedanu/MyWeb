import React, { createContext, useContext, useState, useEffect } from "react";
import petsData from "../data/pets.json";

export const PetsContext = createContext();

export function PetsProvider({ children }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const savedPets = localStorage.getItem("pets");
    if (savedPets) {
      setPets(JSON.parse(savedPets));
    } else {
      setPets(petsData);
      localStorage.setItem("pets", JSON.stringify(petsData));
    }
  }, []);

  useEffect(() => {
    if (pets.length > 0) {
      localStorage.setItem("pets", JSON.stringify(pets));
    }
  }, [pets]);

  const addPet = (newPet) => {
    setPets((prev) => [...prev, newPet]);
  };

  const deletePet = (id) => {
    setPets((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PetsContext.Provider value={{ pets, addPet, deletePet }}>
      {children}
    </PetsContext.Provider>
  );
}

export const usePets = () => useContext(PetsContext);
