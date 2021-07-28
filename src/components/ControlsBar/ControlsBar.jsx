import React from 'react';

import Button from 'react-bootstrap/Button';

function Header(props) {
  const { setShowHistoryModal } = props;

  return (
    <div className="controls-bar d-flex align-items-center p-3">
      <Button variant="primary">Reset</Button>
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
