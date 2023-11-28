

const initialCards = [
    { id: 1, content: "A", isFlipped: false, isMatched: false, pattern: "pattern1"},
    { id: 2, content: "A", isFlipped: false, isMatched: false, pattern: "pattern1"},
    { id: 3, content: "B", isFlipped: false, isMatched: false, pattern: "pattern2"},
    { id: 4, content: "B", isFlipped: false, isMatched: false, pattern: "pattern2"},
    { id: 5, content: "C", isFlipped: false, isMatched: false, pattern: "pattern3"},
    { id: 6, content: "C", isFlipped: false, isMatched: false, pattern: "pattern3"},
    { id: 7, content: "D", isFlipped: false, isMatched: false, pattern: "pattern4"},
    { id: 8, content: "D", isFlipped: false, isMatched: false, pattern: "pattern4"},
    { id: 9, content: "E", isFlipped: false, isMatched: false, pattern: "pattern5"},
    { id: 10, content: "E", isFlipped: false, isMatched: false, pattern: "pattern5"},
    { id: 11, content: "F", isFlipped: false, isMatched: false, pattern: "pattern6"},
    { id: 12, content: "F", isFlipped: false, isMatched: false, pattern: "pattern6"},
    { id: 13, content: "G", isFlipped: false, isMatched: false, pattern: "pattern7"},
    { id: 14, content: "G", isFlipped: false, isMatched: false, pattern: "pattern7"},
    { id: 15, content: "H", isFlipped: false, isMatched: false, pattern: "pattern8"},
    { id: 16, content: "H", isFlipped: false, isMatched: false, pattern: "pattern8"},
    { id: 17, content: "I", isFlipped: false, isMatched: false, pattern: "pattern9"},
    { id: 18, content: "I", isFlipped: false, isMatched: false, pattern: "pattern9"},
    { id: 19, content: "J", isFlipped: false, isMatched: false, pattern: "pattern10"},
    { id: 20, content: "J", isFlipped: false, isMatched: false, pattern: "pattern10"},
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

