import { useState } from 'react';

import { useCards } from 'providers/CardsProvider';

import useTrackLevelProgress from 'hooks/useTrackLevelProgress';

const useCardClickHandler = () => {
  const {
    cards,
    previousClickedCardId,
    noOfOpenCards,
    setCards,
    setPreviousClickedCardId,
    setNoOfOpenCards,
  } = useCards();

  useTrackLevelProgress();

  const [isCardClickBlocked, blockCardClick] = useState(false);

  const checkIfTwoCardsMatch = (id1, id2) => {
    if (cards.byIds[id1].number !== cards.byIds[id2].number) {
      blockCardClick(true);
      const updatedCard1 = { ...cards.byIds[id1], isHidden: true };
      const updatedCard2 = { ...cards.byIds[id2], isHidden: true };
      const newCardsByIds = {
        ...cards.byIds,
        [id1]: updatedCard1,
        [id2]: updatedCard2,
      };
      setTimeout(() => {
        setCards({ ...cards, byIds: newCardsByIds });
        blockCardClick(false);
      }, 500);
    } else {
      setNoOfOpenCards(noOfOpenCards + 2);
    }
  };

  const handleCardClick = (id) => {
    const isCurrentlyHidden = cards.byIds[id].isHidden;
    if (!isCurrentlyHidden || isCardClickBlocked) {
      return;
    }

    const updatedCard = { ...cards.byIds[id], isHidden: false };
    const newCardsByIds = { ...cards.byIds, [id]: updatedCard };
    setCards({ ...cards, byIds: newCardsByIds });

    if (previousClickedCardId !== null) {
      checkIfTwoCardsMatch(id, previousClickedCardId);
      setPreviousClickedCardId(null);
      return;
    }
    setPreviousClickedCardId(id);
  };

  return { isCardClickBlocked, handleCardClick };
};

export default useCardClickHandler;
