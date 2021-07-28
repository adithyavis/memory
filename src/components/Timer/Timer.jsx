import React from 'react';
import { useStats } from 'providers/StatsProvider';

function Timer() {
  const { remainingTime } = useStats();

  if (remainingTime === null) {
    return (
      <div className="timer px-3 py-2">
        {'--'} : {'--'}
      </div>
    );
  }

  const minutes = Math.floor(remainingTime / (60 * 1000));
  const seconds = (remainingTime / 1000) % 60;
  const minutesString = minutes >= 10 ? `${minutes}` : `0${minutes}`;
  const secondsString = seconds >= 10 ? `${seconds}` : `0${seconds}`;

  return (
    <div className="timer px-3 py-2">
      {minutesString} : {secondsString}
    </div>
  );
}

export default Timer;
