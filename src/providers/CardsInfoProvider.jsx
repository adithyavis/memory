import React, { useContext, createContext, useState, useEffect } from 'react';

import { useGameInfo } from 'providers/GameInfoProvider';

import numbers from 'constants/numbers';

function initializeCards(noOfCards) {
  let cards = {
    byIds: {},
    allIds: [],
  };

  for (let i = 0; i < noOfCards / 2; i++) {
    cards.allIds.push(2 * i, 2 * i + 1);
    cards.byIds[2 * i] = { number: numbers[i], isHidden: true };
    cards.byIds[2 * i + 1] = { number: numbers[i], isHidden: true };
  }

  // Shuffle cards using Durstenfeld shuffle algorithm
  for (let i = cards.allIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards.byIds[i], cards.byIds[j]] = [cards.byIds[j], cards.byIds[i]];
  }
  return cards;
}

const cardsHistoryLog = JSON.parse(
  window.localStorage.getItem('cardsHistoryLog')
);

const CardsInfoContext = createContext();

export function CardsInfoProvider({ children }) {
  const { noOfCards, shouldInitializeCards } = useGameInfo();

  const [cards, setCards] = useState({
    byIds: {},
    allIds: [],
  });

  const [previousClickedCardId, setPreviousClickedCardId] = useState(null);
  const [noOfOpenCards, setNoOfOpenCards] = useState(0);

  const [cardsHistory, setCardsHistory] = useState(() => {
    if (Array.isArray(cardsHistoryLog)) {
      return cardsHistoryLog;
    }
    return [];
  });

  const resetCardsHistory = () => {
    setCardsHistory([]);
  };

  useEffect(() => {
    if (shouldInitializeCards) {
      setNoOfOpenCards(0);
      setCards(initializeCards(noOfCards));
    }
  }, [shouldInitializeCards]);

  return (
    <CardsInfoContext.Provider
      value={{
        cards,
        noOfOpenCards,
        previousClickedCardId,
        cardsHistory,
        setCards,
        setNoOfOpenCards,
        setPreviousClickedCardId,
        setCardsHistory,
        resetCardsHistory,
      }}
    >
      {children}
    </CardsInfoContext.Provider>
  );
}

export const useCardsInfo = () => useContext(CardsInfoContext);
