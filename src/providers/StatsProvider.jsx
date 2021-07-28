import React, { useContext, createContext, useState, useEffect } from 'react';

const StatsContext = createContext();

export function StatsProvider({ children }) {
  const [remainingTime, setRemainingTime] = useState(null);
  const [moves, setMoves] = useState(0);
  const [starRanking, setStarRanking] = useState(0);

  useEffect(() => {
    if (remainingTime === null) {
      return;
    }
    if (remainingTime === 0) {
      return;
    }
    const timeoutFunc = setTimeout(() => {
      setRemainingTime(remainingTime - 1000);
    }, 1000);
    return () => {
      clearTimeout(timeoutFunc);
    };
  }, [remainingTime]);

  return (
    <StatsContext.Provider value={{ remainingTime, setRemainingTime }}>
      {children}
    </StatsContext.Provider>
  );
}

export const useStats = () => useContext(StatsContext);
