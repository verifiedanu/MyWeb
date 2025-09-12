import React from "react";
import { motion } from "framer-motion";
import { usePets } from "./context/PetsContext";

export default function Home() {
  const { pets } = usePets();

  return (
    <div className="p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🐾 Available Pets for Adoption
      </h1>

      {/* Grid with 2 columns */}
      <div className="grid grid-cols-2 gap-6 justify-items-center">
        {pets.map((pet) => (
          <motion.div
            key={pet.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white shadow-md rounded-xl border border-gray-200 flex flex-col items-center p-3 w-36"
          >
            {/* Image box with fixed size */}
            <div className="h-32 w-32 overflow-hidden rounded-lg border-2 border-gray-300 mb-2 flex items-center justify-center">
              <img
                src={pet.photo}
                alt={pet.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Pet info */}
            <h2 className="text-sm font-semibold text-gray-700 text-center">
              {pet.name}
            </h2>
            <p className="text-xs text-gray-500 text-center">{pet.shelter}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
