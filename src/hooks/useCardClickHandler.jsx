import React from 'react';

import { useCards } from 'providers/CardsProvider';

const useCardClickHandler = () => {
  const { cards, setCards, setPreviousClickedCard } = useCards();

  const handleCardClick = (id) => {};

  return { handleCardClick };
};

export default useCardClickHandler;
