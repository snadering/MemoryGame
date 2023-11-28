

const initialCards = [
    { id: 1, content: "A", isFlipped: false, isMatched: false },
    { id: 2, content: "A", isFlipped: false, isMatched: false },
    { id: 3, content: "B", isFlipped: false, isMatched: false },
    { id: 4, content: "B", isFlipped: false, isMatched: false },
    { id: 5, content: "C", isFlipped: false, isMatched: false },
    { id: 6, content: "C", isFlipped: false, isMatched: false },
    { id: 7, content: "D", isFlipped: false, isMatched: false },
    { id: 8, content: "D", isFlipped: false, isMatched: false },
    { id: 9, content: "E", isFlipped: false, isMatched: false },
    { id: 10, content: "E", isFlipped: false, isMatched: false },
    { id: 11, content: "F", isFlipped: false, isMatched: false },
    { id: 12, content: "F", isFlipped: false, isMatched: false },
    { id: 13, content: "G", isFlipped: false, isMatched: false },
    { id: 14, content: "G", isFlipped: false, isMatched: false },
    { id: 15, content: "H", isFlipped: false, isMatched: false },
    { id: 16, content: "H", isFlipped: false, isMatched: false },
];


function shuffleCards(arrayOfCards){

        for (let i = arrayOfCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayOfCards[i], arrayOfCards[j]] = [arrayOfCards[j], arrayOfCards[i]];
        }
        return arrayOfCards;
}

export function getShuffledCards(){
    return shuffleCards([...initialCards]);
}

