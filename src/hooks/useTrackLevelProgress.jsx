import { useEffect } from 'react';

import { useGameInfo } from 'providers/GameInfoProvider';
import { useCards } from 'providers/CardsProvider';
import { useStats } from 'providers/StatsProvider';

import levelsConfig from 'constants/levelsConfig';

const useTrackLevelProgress = () => {
  const { level, setLevel, setShowLevelNotification, setShowVictoryPopup } =
    useGameInfo();
  const { cards, noOfOpenCards, setNoOfOpenCards } = useCards();
  const { setRemainingTime } = useStats();

  useEffect(() => {
    const proceedToNextLevel = () => {
      setRemainingTime(null);
      setLevel(level + 1);
      setShowLevelNotification(true);
    };
    if (cards.allIds.length !== 0 && noOfOpenCards === cards.allIds.length) {
      if (level === levelsConfig.allLevels.length) {
        setTimeout(() => {
          setRemainingTime(null);
          setShowVictoryPopup(true);
        }, 500);
        return;
      }
      setNoOfOpenCards(0);
      setTimeout(proceedToNextLevel, 500);
    }
    return () => {
      clearTimeout(proceedToNextLevel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfOpenCards, cards, level]);

  return;
};

export default useTrackLevelProgress;
