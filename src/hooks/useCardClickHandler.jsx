import { useState } from 'react';

import { useStats } from 'providers/StatsProvider';
import { useGameInfo } from 'providers/GameInfoProvider';
import { useCards } from 'providers/CardsProvider';

import useTrackLevelProgress from 'hooks/useTrackLevelProgress';
import useLogEvents from 'hooks/useLogEvents';

const useCardClickHandler = () => {
  const { moves, setMoves, setStarRanking } = useStats();
  const { maxMoves } = useGameInfo();
  const {
    cards,
    previousClickedCardId,
    noOfOpenCards,
    setCards,
    setPreviousClickedCardId,
    setNoOfOpenCards,
  } = useCards();

  useTrackLevelProgress();
  const { logCardsMatchEvent, logCardsDontMatchEvent, logCardClickEvent } =
    useLogEvents();

  const [isCardClickBlocked, blockCardClick] = useState(false);

  const updateMovesAndStarRanking = () => {
    setMoves(moves + 1);
    setStarRanking(Math.floor(((maxMoves - moves - 1) * 10) / maxMoves));
  };

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
        logCardsDontMatchEvent(id1, id2);
        setCards({ ...cards, byIds: newCardsByIds });
        blockCardClick(false);
      }, 500);
    } else {
      logCardsMatchEvent(id1, id2);
      setNoOfOpenCards(noOfOpenCards + 2);
    }
  };

  const handleCardClick = (id) => {
    const isCurrentlyHidden = cards.byIds[id].isHidden;
    if (!isCurrentlyHidden || isCardClickBlocked) {
      return;
    }
    logCardClickEvent(id);
    const updatedCard = { ...cards.byIds[id], isHidden: false };
    const newCardsByIds = { ...cards.byIds, [id]: updatedCard };
    setCards({ ...cards, byIds: newCardsByIds });

    if (previousClickedCardId !== null) {
      updateMovesAndStarRanking();
      checkIfTwoCardsMatch(id, previousClickedCardId);
      setPreviousClickedCardId(null);
      return;
    }
    setPreviousClickedCardId(id);
  };

  return { isCardClickBlocked, handleCardClick };
};

export default useCardClickHandler;
