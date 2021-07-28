import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { useStats } from 'providers/StatsProvider';

function StarRanking() {
  const { starRanking } = useStats();

  return (
    <div className="starRanking">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          color={index < starRanking ? 'gold' : 'white'}
        />
      ))}
    </div>
  );
}

export default StarRanking;
