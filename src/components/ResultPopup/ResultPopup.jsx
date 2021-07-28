import React from 'react';
import Button from 'react-bootstrap/Button';

import { useGameInfo } from 'providers/GameInfoProvider';

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

  const handleClickStartGame = () => {
    setShowStartPopup(false);
    setShowVictoryPopup(false);
    setShowDefeatPopup(false);
    resetGame();
    //resetStat()
  };

  if (showVictoryPopup || showDefeatPopup || showStartPopup) {
    return (
      <div className="result-popup d-flex flex-column align-items-center justify-content-center">
        {showVictoryPopup && <div>You have won!</div>}
        {showDefeatPopup && <div>You have lost!</div>}
        <Button variant="primary" onClick={handleClickStartGame}>
          {showStartPopup ? 'Start Game' : 'Start again'}
        </Button>
      </div>
    );
  }
  return <></>;
}

export default VictoryDefeatPopup;
