import React, { useContext, createContext, useState, useEffect } from 'react';

import levelsConfig from 'constants/levelsConfig';

const GameInfoContext = createContext({
  level: 1,
  noOfCardRows: levelsConfig.byLevels[levelsConfig.allLevels[0]].noOfCardRows,
  noOfCardColumns:
    levelsConfig.byLevels[levelsConfig.allLevels[0]].noOfCardColumns,
  maxTime: levelsConfig.byLevels[levelsConfig.allLevels[0]].maxTime,
  maxMoves: levelsConfig.byLevels[levelsConfig.allLevels[0]].maxMoves,
});

export function GameInfoProvider({ children }) {
  const [level, setLevel] = useState(1);

  const [noOfCardRows, setNoOfCardRows] = useState(
    levelsConfig.byLevels[levelsConfig.allLevels[0]].noOfCardRows
  );
  const [noOfCardColumns, setNoOfCardColumns] = useState(
    levelsConfig.byLevels[levelsConfig.allLevels[0]].noOfCardColumns
  );
  const [maxTime, setMaxTime] = useState(
    levelsConfig.byLevels[levelsConfig.allLevels[0]].maxTime
  );
  const [maxMoves, setMaxMoves] = useState(
    levelsConfig.byLevels[levelsConfig.allLevels[0]].maxMoves
  );

  useEffect(() => {
    setNoOfCardRows(levelsConfig.byLevels[level].noOfCardRows);
    setNoOfCardColumns(levelsConfig.byLevels[level].noOfCardColumns);
    setMaxTime(levelsConfig.byLevels[level].maxTime);
    setMaxMoves(levelsConfig.byLevels[level].maxMoves);
  }, [level]);

  return (
    <GameInfoContext.Provider
      value={{
        level,
        noOfCardRows,
        noOfCardColumns,
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
