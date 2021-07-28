import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarRanking() {
  return (
    <div className="starRanking">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color="gold" />
      ))}
    </div>
  );
}

export default StarRanking;
