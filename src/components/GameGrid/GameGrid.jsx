import React from 'react';

import Card from 'components/Card';

import { useGameInfo } from 'providers/GameInfoProvider';
import { useCards } from 'providers/CardsProvider';

import useCardClickHandler from 'hooks/useCardClickHandler';

function GameGrid() {
  const { noOfCardColumns } = useGameInfo();
  const { cards } = useCards();

  const { handleCardClick } = useCardClickHandler();

  return (
    <div className="flex-grow-1 d-flex align-items-center py-4">
      <div
        className="game-grid"
        style={{
          gridTemplateColumns: `repeat(${noOfCardColumns}, 1fr)`,
          width: `min(${noOfCardColumns > 3 ? '600px' : '400px'}, 100vw)`,
        }}
      >
        {cards.allIds.map((id) => (
          <div key={id}>
            <div
              className="card-container"
              onClick={() => {
                handleCardClick(id);
              }}
            >
              <Card isHidden={cards.byIds[id].isHidden} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameGrid;
