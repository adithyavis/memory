import React from 'react';
import ReactDOM from 'react-dom';

import { GameInfoProvider } from 'providers/GameInfoProvider';
import { CardsProvider } from 'providers/CardsProvider';

import App from 'App';

import 'index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GameInfoProvider>
      <CardsProvider>
        <App />
      </CardsProvider>
    </GameInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
