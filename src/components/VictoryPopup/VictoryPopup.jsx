import React from 'react';
import Button from 'react-bootstrap/Button';

import { useGameInfo } from 'providers/GameInfoProvider';

function VictoryPopup() {
  const { showVictoryPopup } = useGameInfo();

  if (showVictoryPopup) {
    return (
      <div className="victory-popup d-flex flex-column align-items-center justify-content-center">
        <div>You have won!</div>
        <Button variant="primary">Start again</Button>
      </div>
    );
  }
  return <></>;
}

export default VictoryPopup;
