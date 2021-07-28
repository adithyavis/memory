import React, { useContext, createContext, useState, useEffect } from 'react';

import levelsConfig from 'constants/levelsConfig';

const {
  noOfCardColumns: initNoOfCardColumns,
  noOfCardRows: initNoOfCardRows,
  maxTime: initMaxTime,
  maxMoves: initMaxMoves,
} = levelsConfig.byLevels[levelsConfig.allLevels[0]];

const GameInfoContext = createContext({
  level: 1,
  noOfCardColumns: initNoOfCardColumns,
  noOfCardRows: initNoOfCardRows,
  noOfCards: initNoOfCardColumns * initNoOfCardRows,
  maxTime: initMaxTime,
  maxMoves: initMaxMoves,
});

export function GameInfoProvider({ children }) {
  const [level, setLevel] = useState(1);

  const [noOfCardRows, setNoOfCardRows] = useState(initNoOfCardColumns);
  const [noOfCardColumns, setNoOfCardColumns] = useState(initNoOfCardRows);
  const [noOfCards, setNoOfCards] = useState(
    initNoOfCardColumns * initNoOfCardRows
  );
  const [maxTime, setMaxTime] = useState(initMaxTime);
  const [maxMoves, setMaxMoves] = useState(initMaxMoves);

  useEffect(() => {
    setNoOfCardRows(levelsConfig.byLevels[level].noOfCardRows);
    setNoOfCardColumns(levelsConfig.byLevels[level].noOfCardColumns);
    setNoOfCards(
      levelsConfig.byLevels[level].noOfCardRows *
        levelsConfig.byLevels[level].noOfCardColumns
    );
    setMaxTime(levelsConfig.byLevels[level].maxTime);
    setMaxMoves(levelsConfig.byLevels[level].maxMoves);
  }, [level]);

  return (
    <GameInfoContext.Provider
      value={{
        level,
        noOfCardRows,
        noOfCardColumns,
        noOfCards,
        maxTime,
        maxMoves,
        setLevel,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
}

export const useGameInfo = () => useContext(GameInfoContext);
