import { useEffect } from 'react';

import { useGameInfo } from 'providers/GameInfoProvider';
import { useCardsInfo } from 'providers/CardsInfoProvider';
import { useStats } from 'providers/StatsProvider';

import levelsConfig from 'constants/levelsConfig';

const useTrackLevelProgress = () => {
  const {
    level,
    setLevel,
    maxMoves,
    setShowLevelNotification,
    setShowVictoryPopup,
    setShowDefeatPopup,
  } = useGameInfo();
  const { cards, noOfOpenCards, cardsHistory } = useCardsInfo();
  const { moves, remainingTime, resetStats } = useStats();

  /* 
  Check if moves/time has been exceeded for the level,
  and if so, show defeat display.
  */
  useEffect(() => {
    if (moves >= maxMoves || remainingTime === 0) {
      window.localStorage.setItem('cardsHistoryLog', null);
      window.localStorage.setItem('level', null);
      resetStats();
      setShowDefeatPopup(true);
    }
  }, [moves, maxMoves, remainingTime]);

  /* 
  Check if all cards have matched in the current level,
  and proceed to next level (or) show victory display.
  */
  useEffect(() => {
    let timeoutFunc1;
    let timeoutFunc2;
    if (cards.allIds.length !== 0 && noOfOpenCards === cards.allIds.length) {
      const proceedToNextLevel = () => {
        window.localStorage.setItem(
          'cardsHistoryLog',
          JSON.stringify(cardsHistory)
        );
        window.localStorage.setItem('level', level + 1);
        resetStats();
        setLevel((prevLevel) => prevLevel + 1);
        setShowLevelNotification(true);
      };
      if (level === levelsConfig.allLevels.length) {
        timeoutFunc1 = setTimeout(() => {
          window.localStorage.setItem('cardsHistoryLog', null);
          window.localStorage.setItem('level', null);
          resetStats();
          setShowVictoryPopup(true);
        }, 500);
        return;
      }
      timeoutFunc1 = setTimeout(proceedToNextLevel, 500);
    }
    return () => {
      clearTimeout(timeoutFunc1);
      clearTimeout(timeoutFunc2);
    };
  }, [noOfOpenCards, cards]);

  return;
};

export default useTrackLevelProgress;
