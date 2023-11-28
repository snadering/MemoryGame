import React from "react";

function Card({ id, content, isFlipped, isMatched, onCardClick }) {
  function handleClick() {
    if (!isFlipped && !isMatched) {
      onCardClick(id);
    }
  }

  return (
    <div
      className={`relative w-32 h-40 bg-blue-500 border border-blue-700 rounded-md cursor-pointer transition ${
        isFlipped ? "transform rotate-y-180" : ""
      } ${isMatched ? "opacity-50" : ""}`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {isFlipped || isMatched ? (
          <div className="text-white">{content}</div>
        ) : (
          <div className="text-white">BACKSIDE</div>
        )}
      </div>
    </div>
  );
}

export default Card;
