import { useEffect } from 'react';

import { useGameInfo } from 'providers/GameInfoProvider';
import { useCards } from 'providers/CardsProvider';

const useTrackLevelProgress = () => {
  const { level, setLevel, setShowLevelNotification } = useGameInfo();
  const { cards, noOfOpenCards, setNoOfOpenCards } = useCards();

  useEffect(() => {
    if (cards.allIds.length !== 0 && noOfOpenCards === cards.allIds.length) {
      setNoOfOpenCards(0);
      const proceedToNextLevel = () => {
        setLevel(level + 1);
        setShowLevelNotification(true);
      };
      setTimeout(proceedToNextLevel, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfOpenCards, cards]);

  return;
};

export default useTrackLevelProgress;
