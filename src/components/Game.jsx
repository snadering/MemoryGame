import React, { useState, useEffect, useRef } from "react";
import Board from "./Board";
import GameOverModal from "./GameOverModal";
import StartMenu from "./StartMenu";
import { getShuffledCards } from "../utils/cardUtils";

function Game() {
  const [cards, setCards] = useState(getShuffledCards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [startMenu, setStartMenu] = useState(true);
  const [playerNames, setPlayerNames] = useState({
    player1: "",
    player2: "",
  });
  const [currentPlayer, setCurrentPlayer] = useState("player1");
  const [playerMatches, setPlayerMatches] = useState({
    player1Matches: 0,
    player2Matches: 0,
  });


  const handleStartGame = (player1Name, player2Name) => {
    setPlayerNames({
      player1: player1Name,
      player2: player2Name,
    });
    setCards(getShuffledCards);
    setFlippedCards([]);
    setIsLocked(false);
    setGameOver(false);
    setPlayerMatches({ player1Matches: 0, player2Matches: 0 });
    setStartMenu(false);
  };

  const handlePlayAgain = () => {
    setCards(getShuffledCards);
    setFlippedCards([]);
    setIsLocked(false);
    setGameOver(false);
    setPlayerMatches({ player1Matches: 0, player2Matches: 0 });
  };

  const handleQuit = () => {
    setStartMenu(true);
    setGameOver(false);
  };

  const handleCardClick = (clickedCardId) => {
    const clickedCardIndex = cards.findIndex(
      (card) => card.id === clickedCardId
    );
    const clickedCard = cards[clickedCardIndex];

    if (clickedCard.isFlipped || clickedCard.isMatched || isLocked) {
      return;
    } else {
      setFlippedCards((prevFlippedCards) => [
        ...prevFlippedCards,
        clickedCardId,
      ]);
    }

    let updatedCards = [...cards];
    updatedCards[clickedCardIndex] = { ...clickedCard, isFlipped: true };
    setCards(updatedCards);
  };

  useEffect(() => {
    // Check for matches if two cards are flipped
    if (flippedCards.length === 2) {
      const [firstCardId, secondCardId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstCardId);
      const secondCard = cards.find((card) => card.id === secondCardId);

      if (firstCard.content === secondCard.content) {
        const updatedPlayerMatches =
          currentPlayer === "player1"
            ? {
                ...playerMatches,
                player1Matches: playerMatches.player1Matches + 1,
              }
            : {
                ...playerMatches,
                player2Matches: playerMatches.player2Matches + 1,
              };

        setPlayerMatches(updatedPlayerMatches);

        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCardId || card.id === secondCardId
              ? { ...card, isFlipped: true, isMatched: true }
              : card
          )
        );
        //Reset flipped cards
        setFlippedCards([]);
      } else {
        // Switching between turns
        setCurrentPlayer((prevCurrentPlayer) => {
          setCurrentPlayer(
            prevCurrentPlayer === "player1" ? "player2" : "player1"
          );
        });
        //Lock the screen and stall for 1 seconds,
        // when the second card has been turned
        setIsLocked(true);
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCardId || card.id === secondCardId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setIsLocked(false);
          setFlippedCards([]);
        }, 1500);
      }
    }
  }, [flippedCards, cards, playerMatches]);

  useEffect(() => {
    // Check if all cards are matched
    const isAllCardsMatched = cards.every((card) => card.isMatched);
    if (isAllCardsMatched) {
      console.log("GameOver - All cards matched");
      setGameOver(true);
    }
  }, [cards]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        {startMenu && (
          <>
            <StartMenu onStartGame={handleStartGame} />
          </>
        )}

        {!gameOver && !startMenu && (
          <>
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
            <div className="flex justify-center w-full p-2">
              <div className="w-1/2 flex justify-center">
                <h2>
                  {playerNames.player1}: {playerMatches.player1Matches}
                </h2>
              </div>
              <div className="w-1/2 flex justify-center">
                <h2>
                  {playerNames.player2}: {playerMatches.player2Matches}
                </h2>
              </div>
            </div>
            <Board 
                cards={cards}
                handleCardClick={handleCardClick}
                currentPlayer={currentPlayer}
                />
          </>
        )}
        {gameOver && (
          <GameOverModal
            onPlayAgain={handlePlayAgain}
            onQuit={handleQuit}
            playerMatches={playerMatches}
            playerNames={playerNames}
          />
        )}
      </div>
    </div>
  );
}

export default Game;
