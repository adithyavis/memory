import { useEffect } from 'react';

import { useGameInfo } from 'providers/GameInfoProvider';
import { useCards } from 'providers/CardsProvider';

import levelsConfig from 'constants/levelsConfig';

const useTrackLevelProgress = () => {
  const { level, setLevel, setShowLevelNotification, setShowVictoryPopup } =
    useGameInfo();
  const { cards, noOfOpenCards, setNoOfOpenCards } = useCards();

  useEffect(() => {
    if (cards.allIds.length !== 0 && noOfOpenCards === cards.allIds.length) {
      if (level === levelsConfig.allLevels.length) {
        setTimeout(() => {
          setShowVictoryPopup(true);
        }, 500);
        return;
      }
      setNoOfOpenCards(0);
      const proceedToNextLevel = () => {
        setLevel(level + 1);
        setShowLevelNotification(true);
      };
      setTimeout(proceedToNextLevel, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfOpenCards, cards, level]);

  return;
};

export default useTrackLevelProgress;
