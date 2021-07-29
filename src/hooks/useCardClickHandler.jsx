import { useState } from 'react';

import { useStats } from 'providers/StatsProvider';
import { useGameInfo } from 'providers/GameInfoProvider';
import { useCards } from 'providers/CardsProvider';

import useTrackLevelProgress from 'hooks/useTrackLevelProgress';
import useLogEvents from 'hooks/useLogEvents';

const useCardClickHandler = () => {
  const { setMoves, setStarRanking } = useStats();
  const { maxMoves } = useGameInfo();
  const {
    cards,
    previousClickedCardId,
    setCards,
    setPreviousClickedCardId,
    setNoOfOpenCards,
  } = useCards();

  useTrackLevelProgress();
  const { logCardsMatchEvent, logCardsDontMatchEvent, logCardClickEvent } =
    useLogEvents();

  const [isCardClickBlocked, blockCardClick] = useState(false);

  const updateMovesAndStarRanking = () => {
    setMoves((prevMoves) => {
      setStarRanking(Math.floor(((maxMoves - prevMoves - 1) * 10) / maxMoves));
      return prevMoves + 1;
    });
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
        setCards((prevCards) => ({ ...prevCards, byIds: newCardsByIds }));
        blockCardClick(false);
      }, 500);
    } else {
      logCardsMatchEvent(id1, id2);
      setNoOfOpenCards((prevNoOfOpenCards) => prevNoOfOpenCards + 2);
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
    setCards((prevCards) => ({ ...prevCards, byIds: newCardsByIds }));

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
