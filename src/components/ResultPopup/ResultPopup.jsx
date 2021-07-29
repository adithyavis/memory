import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useGameInfo } from 'providers/GameInfoProvider';

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
    } else if (showVictoryPopup) {
      window.localStorage.setItem('level', null);
      setShowVictoryPopup(false);
    } else if (showDefeatPopup) {
      window.localStorage.setItem('level', null);
      setShowDefeatPopup(false);
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
