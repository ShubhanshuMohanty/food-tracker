import React from "react";

interface CardProps {
  image: string;
  name: string;
  ingredients: string[];
}

const Card: React.FC<CardProps> = ({ image, name, ingredients }) => {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 max-w-sm mx-auto">
          {/* Image */}
          <img
            src={image}
            alt={name}
            className="rounded-t-lg w-full object-cover h-48"
          />

          {/* Name */}
          <h2 className="text-xl font-bold mt-4">{name}</h2>

          {/* Ingredients Row */}
          <div className="mt-2 flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="text-sm bg-gray-700 rounded-full px-3 py-1"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;
