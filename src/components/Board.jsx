import React from "react";
import Card from "./Card";

function Board({ cards, handleCardClick }) {



  return (
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
    {cards.map((card) => (
      <div key={card.id} className="flex justify-center items-center">
        <Card
          id={card.id}
          content={card.content}
          isFlipped={card.isFlipped}
          isMatched={card.isMatched}
          onCardClick={handleCardClick}
        />
      </div>
    ))}
  </div>
);
}

export default Board;
