import React, { useContext, createContext, useState, useEffect } from 'react';

import levelsConfig from 'constants/levelsConfig';

const {
  noOfCardColumns: initNoOfCardColumns,
  noOfCardRows: initNoOfCardRows,
  maxTime: initMaxTime,
  maxMoves: initMaxMoves,
} = levelsConfig.byLevels[levelsConfig.allLevels[0]];

const GameInfoContext = createContext();

export function GameInfoProvider({ children }) {
  const [level, setLevel] = useState(1);

  const [noOfCardColumns, setNoOfCardColumns] = useState(initNoOfCardRows);
  const [noOfCards, setNoOfCards] = useState(
    initNoOfCardColumns * initNoOfCardRows
  );
  const [maxTime, setMaxTime] = useState(initMaxTime);
  const [maxMoves, setMaxMoves] = useState(initMaxMoves);

  const [showLevelNotification, setShowLevelNotification] = useState(false);
  const [shouldInitializeCards, setShouldInitializeCards] = useState(false);

  useEffect(() => {
    setNoOfCardColumns(levelsConfig.byLevels[level].noOfCardColumns);
    setNoOfCards(
      levelsConfig.byLevels[level].noOfCardRows *
        levelsConfig.byLevels[level].noOfCardColumns
    );
    setMaxTime(levelsConfig.byLevels[level].maxTime);
    setMaxMoves(levelsConfig.byLevels[level].maxMoves);
    setShouldInitializeCards(true);
  }, [level]);

  useEffect(() => {
    if (showLevelNotification) {
      const hideLevelNotification = () => {
        setShowLevelNotification(false);
      };
      setTimeout(hideLevelNotification, 2000);
    }
  }, [showLevelNotification]);

  useEffect(() => {
    if (shouldInitializeCards) {
      setShouldInitializeCards(false);
    }
  }, [shouldInitializeCards]);

  return (
    <GameInfoContext.Provider
      value={{
        level,
        noOfCardColumns,
        noOfCards,
        maxTime,
        maxMoves,
        showLevelNotification,
        shouldInitializeCards,
        setLevel,
        setShowLevelNotification,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
}

export const useGameInfo = () => useContext(GameInfoContext);
