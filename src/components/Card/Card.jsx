import React from 'react';

function Card(props) {
  const { isHidden, number } = props;

  return (
    <div
      className="game-card"
      style={{ transform: !isHidden ? 'rotateY(180deg)' : 'none' }}
    >
      <div className="game-card-front d-flex align-items-center justify-content-center">
        {number}
      </div>
      <div className="game-card-back"></div>
    </div>
  );
}

export default Card;
