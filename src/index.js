import React from 'react';
import ReactDOM from 'react-dom';

import { GameInfoProvider } from 'providers/GameInfoProvider';
import { CardsInfoProvider } from 'providers/CardsInfoProvider';
import { StatsProvider } from 'providers/StatsProvider';

import App from 'App';

import 'index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <StatsProvider>
      <GameInfoProvider>
        <CardsInfoProvider>
          <App />
        </CardsInfoProvider>
      </GameInfoProvider>
    </StatsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
