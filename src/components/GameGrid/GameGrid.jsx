import React from 'react';

import Card from 'components/Card';

import { useGameInfo } from 'providers/GameInfoProvider';
import { useCards } from 'providers/CardsProvider';

function GameGrid() {
  const { noOfCardColumns } = useGameInfo();
  const { cards } = useCards();

  return (
    <div className="flex-grow-1 d-flex align-items-center py-4">
      <div
        className="game-grid"
        style={{
          gridTemplateColumns: `repeat(${noOfCardColumns}, 1fr)`,
          width: `min(${noOfCardColumns > 3 ? '600px' : '400px'}, 100vw)`,
        }}
      >
        {cards.map((card) => (
          <div key={card.id}>
            <div className="card-container">
              <Card />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameGrid;
