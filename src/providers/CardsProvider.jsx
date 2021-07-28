import React, { useContext, createContext, useState, useEffect } from 'react';

import { useGameInfo } from 'providers/GameInfoProvider';

import numbers from 'constants/numbers';

function createCards(noOfCards) {
  let cards = [];

  for (let i = 0; i < noOfCards / 2; i++) {
    cards.push(
      { id: 2 * i, number: numbers[i] },
      { id: 2 * i + 1, number: numbers[i] }
    );
  }

  // Shuffle cards using Durstenfeld shuffle algorithm
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

const CardsContext = createContext({
  cards: [],
});

export function CardsProvider({ children }) {
  const { noOfCards } = useGameInfo();

  const [cards, setCards] = useState(() => {
    return createCards(noOfCards);
  });

  useEffect(() => {
    setCards(createCards(noOfCards));
  }, [noOfCards]);

  return (
    <CardsContext.Provider value={{ cards }}>{children}</CardsContext.Provider>
  );
}

export const useCards = () => useContext(CardsContext);
