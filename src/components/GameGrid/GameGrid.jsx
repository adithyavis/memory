import React from 'react';

import Card from 'components/Card';

import { useGameInfo } from 'providers/GameInfoProvider';
import { useCards } from 'providers/CardsProvider';

import useCardClickHandler from 'hooks/useCardClickHandler';

function GameGrid() {
  const { level, noOfCardColumns, showLevelNotification } = useGameInfo();
  const { cards } = useCards();

  const { handleCardClick } = useCardClickHandler();

  if (showLevelNotification) {
    return (
      <div className="level-notification flex-grow-1 d-flex align-items-center py-4">
        Level {level}
      </div>
    );
  }

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
              style={{
                pointerEvents: cards.byIds[id].isHidden ? 'auto' : 'none',
              }}
              onClick={() => {
                handleCardClick(id);
              }}
            >
              <Card
                isHidden={cards.byIds[id].isHidden}
                number={cards.byIds[id].number}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameGrid;
