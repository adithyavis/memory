import React from 'react';

function Card(props) {
  const { isHidden } = props;

  return (
    <div
      className="game-card"
      style={{ transform: !isHidden ? 'rotateY(180deg)' : 'none' }}
    >
      <div className="game-card-front"></div>
      <div className="game-card-back"></div>
    </div>
  );
}

export default Card;
