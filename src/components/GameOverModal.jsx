import React from "react";

function GameOverModal({ onPlayAgain, onQuit, playerMatches, playerNames }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">

      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Game Over!</h2>

        <p className="mb-4">
          {playerNames.player1}: {playerMatches.player1Matches || 0}
        </p>
        <p className="mb-4">
         {playerNames.player2}: {playerMatches.player2Matches || 0}
        </p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onPlayAgain}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Play Again
          </button>
          <button
            onClick={onQuit}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Quit
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameOverModal;
