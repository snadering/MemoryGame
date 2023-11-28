import React from "react";
import "animate.css"; 

function Card({ id, content, isFlipped, isMatched, onCardClick, pattern }) {
  const cardClasses = `relative w-32 h-40 bg-transparent rounded-md cursor-pointer border-2 border-black transform transition ${
    isFlipped ? "animate__animated animate__flipInY" : ""
  } ${isMatched ? "opacity-50" : ""}`;

  function handleClick() {
    if (!isFlipped && !isMatched) {
      onCardClick(id);
    }
  }

  return (
    <div className={cardClasses} onClick={handleClick}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex items-center justify-center h-full">
          {isFlipped ?
          <img 
          src={`src/assets/patterns/${pattern}.jpeg`}
          alt="Card Pattern"
          className="object-cover w-full h-full rounded"/> : 
          <img 
          src="src/assets/card-backside-image.png"
          alt="Card Backside"
          className="object-cover w-full h-full rounded"/>}
        </div>
      </div>
    </div>
  );
}

export default Card;
