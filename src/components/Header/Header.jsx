import React from 'react';

import Timer from 'components/Timer';
import StarRanking from 'components/StarRanking';

import { useGameInfo } from 'providers/GameInfoProvider';

function Header() {
  const { level } = useGameInfo();

  return (
    <div className="header d-flex align-items-center p-3">
      <div>Level {level}</div>
      <div className="stat-container d-flex align-items-center">
        <Timer />
        <div>
          <span>Steps: {1}</span>
          <StarRanking />
        </div>
      </div>
    </div>
  );
}

export default Header;
