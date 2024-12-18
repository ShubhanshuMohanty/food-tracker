import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  name: string;
  ingredients: string[];
  id:number;
}

const Card: React.FC<CardProps> = ({ image, name, ingredients ,id}) => {
  useEffect(()=>{
    console.log("sm=id=" + id);
    
  })
  return (
    <div className=" text-black dark:text-white  transition-all duration-300">
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
            className="text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1"
          >
            {ingredient}
          </span>
        ))}
      </div>
        <Link to={`recipe/${id}`}>See recipe</Link>
    </div>
  );
};

export default Card;
