import React, { useState } from 'react';

import VictoryPopup from 'components/VictoryPopup';
import Header from 'components/Header';
import ControlsBar from 'components/ControlsBar';
import HistoryModal from 'components/HistoryModal';
import GameGrid from 'components/GameGrid';

import './App.scss';

function App() {
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  return (
    <div className="App d-flex flex-column align-items-center">
      <VictoryPopup />
      <Header />
      <ControlsBar setShowHistoryModal={setShowHistoryModal} />
      <HistoryModal
        showHistoryModal={showHistoryModal}
        setShowHistoryModal={setShowHistoryModal}
      />
      <GameGrid />
    </div>
  );
}

export default App;
