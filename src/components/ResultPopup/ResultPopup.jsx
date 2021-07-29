import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useGameInfo } from 'providers/GameInfoProvider';
import { useCards } from 'providers/CardsProvider';

import levelsConfig from 'constants/levelsConfig';

function VictoryDefeatPopup() {
  const {
    resetGame,
    showStartPopup,
    showVictoryPopup,
    showDefeatPopup,
    setShowStartPopup,
    setShowVictoryPopup,
    setShowDefeatPopup,
  } = useGameInfo();
  const { resetCardsHistory } = useCards();

  const [showContinueLevel, setShowContinueLevel] = useState(null);

  useEffect(() => {
    if (!showStartPopup) {
      return;
    }
    const previouslySavedLevel = parseInt(window.localStorage.getItem('level'));
    if (previouslySavedLevel) {
      const found = levelsConfig.allLevels.find(
        (level) => level === previouslySavedLevel
      );
      if (found) {
        setShowContinueLevel(found);
      }
    }
  }, [showStartPopup]);

  const handleClickStartGame = () => {
    if (showStartPopup) {
      setShowStartPopup(false);
      setShowContinueLevel(null);
      if (!showContinueLevel) {
        resetCardsHistory();
      }
    } else if (showVictoryPopup) {
      window.localStorage.setItem('cardsHistoryLog', null);
      window.localStorage.setItem('level', null);
      setShowVictoryPopup(false);
      resetCardsHistory();
    } else if (showDefeatPopup) {
      window.localStorage.setItem('cardsHistoryLog', null);
      window.localStorage.setItem('level', null);
      setShowDefeatPopup(false);
      resetCardsHistory();
    }
    resetGame();
  };

  if (showVictoryPopup || showDefeatPopup || showStartPopup) {
    return (
      <div className="result-popup d-flex flex-column align-items-center justify-content-center">
        {showVictoryPopup && <div>You have won!</div>}
        {showDefeatPopup && <div>You have lost!</div>}
        {showStartPopup && <div>Memory: Card Game</div>}
        <Button variant="primary" onClick={handleClickStartGame}>
          {showStartPopup
            ? showContinueLevel === null
              ? 'Start Game'
              : 'Continue Game'
            : 'Start again'}
        </Button>
        {showContinueLevel !== null && (
          <div className="h6">Last saved: Level {showContinueLevel}</div>
        )}
      </div>
    );
  }
  return <></>;
}

export default VictoryDefeatPopup;
