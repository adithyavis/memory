import React, { useContext, createContext, useState, useEffect } from 'react';

import { useStats } from 'providers/StatsProvider';

import levelsConfig from 'constants/levelsConfig';

const {
  noOfCardColumns: initNoOfCardColumns,
  noOfCardRows: initNoOfCardRows,
  maxTime: initMaxTime,
  maxMoves: initMaxMoves,
} = levelsConfig.byLevels[levelsConfig.allLevels[0]];

const GameInfoContext = createContext();

export function GameInfoProvider({ children }) {
  const { setRemainingTime } = useStats();

  const setInitialLevel = () => {
    const previouslySavedLevel = parseInt(window.localStorage.getItem('level'));
    if (previouslySavedLevel) {
      const found = levelsConfig.allLevels.find(
        (level) => level === previouslySavedLevel
      );
      if (found) {
        return found;
      }
    }
    return 1;
  };

  const [level, setLevel] = useState(setInitialLevel);

  const [noOfCardColumns, setNoOfCardColumns] = useState(initNoOfCardRows);
  const [noOfCards, setNoOfCards] = useState(
    initNoOfCardColumns * initNoOfCardRows
  );
  const [maxTime, setMaxTime] = useState(initMaxTime * 1000);
  const [maxMoves, setMaxMoves] = useState(initMaxMoves);

  const [showLevelNotification, setShowLevelNotification] = useState(false);
  const [showStartPopup, setShowStartPopup] = useState(true);
  const [showVictoryPopup, setShowVictoryPopup] = useState(false);
  const [showDefeatPopup, setShowDefeatPopup] = useState(false);
  const [shouldInitializeCards, setShouldInitializeCards] = useState(false);

  // Reset level related info if level changes
  useEffect(() => {
    setNoOfCardColumns(levelsConfig.byLevels[level].noOfCardColumns);
    setNoOfCards(
      levelsConfig.byLevels[level].noOfCardRows *
        levelsConfig.byLevels[level].noOfCardColumns
    );
    setMaxTime(levelsConfig.byLevels[level].maxTime * 1000);
    setMaxMoves(levelsConfig.byLevels[level].maxMoves);
    setShouldInitializeCards(true);
  }, [level]);

  // Start the timer, after the level notification slide has disappeared
  useEffect(() => {
    let timeoutFunc;
    if (showLevelNotification) {
      const hideLevelNotification = () => {
        setShowLevelNotification(false);
        setRemainingTime(maxTime);
      };
      timeoutFunc = setTimeout(hideLevelNotification, 2000);
    }
    return () => {
      clearTimeout(timeoutFunc);
    };
  }, [showLevelNotification]);

  useEffect(() => {
    if (shouldInitializeCards) {
      setShouldInitializeCards(false);
    }
  }, [shouldInitializeCards]);

  const resetLevel = () => {
    const initialLevel = setInitialLevel();
    if (level !== initialLevel) {
      setLevel(initialLevel);
    } else {
      setNoOfCardColumns(levelsConfig.byLevels[level].noOfCardColumns);
      setNoOfCards(
        levelsConfig.byLevels[level].noOfCardRows *
          levelsConfig.byLevels[level].noOfCardColumns
      );
      setMaxTime(levelsConfig.byLevels[level].maxTime * 1000);
      setMaxMoves(levelsConfig.byLevels[level].maxMoves);
      setShouldInitializeCards(true);
    }
    setShowLevelNotification(true);
  };

  return (
    <GameInfoContext.Provider
      value={{
        level,
        noOfCardColumns,
        noOfCards,
        maxTime,
        maxMoves,
        showLevelNotification,
        showStartPopup,
        showVictoryPopup,
        showDefeatPopup,
        shouldInitializeCards,
        setLevel,
        resetLevel,
        setShowLevelNotification,
        setShowStartPopup,
        setShowVictoryPopup,
        setShowDefeatPopup,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
}

export const useGameInfo = () => useContext(GameInfoContext);
