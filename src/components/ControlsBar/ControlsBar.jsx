import React from 'react';

import Button from 'react-bootstrap/Button';

import { useGameInfo } from 'providers/GameInfoProvider';
import { useStats } from 'providers/StatsProvider';

function Header(props) {
  const { setShowHistoryModal } = props;

  const { setShowStartPopup } = useGameInfo();
  const { resetStats } = useStats();

  return (
    <div className="controls-bar d-flex align-items-center p-3">
      <Button
        variant="primary"
        onClick={() => {
          resetStats();
          setShowStartPopup(true);
        }}
      >
        Reset
      </Button>
      <Button
        variant="primary"
        className="history-button"
        onClick={() => {
          setShowHistoryModal(true);
        }}
      >
        History
      </Button>
    </div>
  );
}

export default Header;
