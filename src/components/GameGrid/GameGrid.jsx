import React from 'react';

import Card from 'components/Card';

import { useGameInfo } from 'providers/GameInfoProvider';

function GameGrid() {
  const { noOfCardColumns } = useGameInfo();

  return (
    <div className="flex-grow-1 d-flex align-items-center">
      <div
        className="game-grid"
        style={{ gridTemplateColumns: `repeat(${noOfCardColumns}, 1fr)` }}
      >
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div>
          <div className="card-container">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameGrid;
