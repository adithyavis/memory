import React, { useContext, createContext, useState, useEffect } from 'react';

const StatsContext = createContext();

export function StatsProvider({ children }) {
  const [remainingTime, setRemainingTime] = useState(null);
  const [moves, setMoves] = useState(0);
  const [starRanking, setStarRanking] = useState(10);

  // Timer decrement logic
  useEffect(() => {
    if (!remainingTime) {
      return;
    }
    const timeoutFunc = setTimeout(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 1000);
    }, 1000);
    return () => {
      clearTimeout(timeoutFunc);
    };
  }, [remainingTime]);

  const resetStats = () => {
    setRemainingTime(null);
    setMoves(0);
    setStarRanking(10);
  };

  return (
    <StatsContext.Provider
      value={{
        remainingTime,
        moves,
        starRanking,
        resetStats,
        setRemainingTime,
        setMoves,
        setStarRanking,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
}

export const useStats = () => useContext(StatsContext);
