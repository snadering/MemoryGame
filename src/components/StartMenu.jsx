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
    if(player1Name.toLowerCase() === player2Name.toLowerCase()){
      setNameError(true);
      return;
    }
    onStartGame(player1Name, player2Name);
  }


    return ( 
        <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <h1 className="text-3xl font-semibold mb-4">Memory Game</h1>
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
          {nameError && <p className="text-red-500 pb-2">Please use different names.</p>}
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={handleStartGame}
          
          >
            Start Game
          </button>
        </div>
      </div>
    </>
     );
}

export default StartMenu;