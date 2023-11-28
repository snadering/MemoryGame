import React, { useRef } from "react";
import { useState } from "react";

function StartMenu({ onStartGame }) {
  const player1NameRef = useRef(null);
  const player2NameRef = useRef(null);
  const [nameError, setNameError] = useState(false);

  const handleStartGame = () => {
    setNameError(false);
    const player1Name = player1NameRef.current.value;
    const player2Name = player2NameRef.current.value;
    if (player1Name.toLowerCase() === player2Name.toLowerCase()) {
      setNameError(true);
      return;
    }
    onStartGame(player1Name, player2Name);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <h1
            className="relative overflow-hidden text-4xl font-bold text-transparent py-2 px-4 rounded-md bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text"
            style={{
              backgroundImage: 'url("src/assets/card-backside-image.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            Memory Game
          </h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Player 1"
              ref={player1NameRef}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Player 2"
              ref={player2NameRef}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {nameError && <p className="text-red-500 pb-2">Invalid names</p>}
          <button
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat h-12 w-32 text-white text-lg font-semibold py-2 px-4 rounded-md"
            style={{
              backgroundImage: 'url("src/assets/card-backside-image.png")',
            }}
            onClick={handleStartGame}
          >
            <span className="">Start Game</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default StartMenu;
