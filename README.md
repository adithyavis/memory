# Memory- Card match game

![Take me to the game](https://raw.githubusercontent.com/adithyavis/memory/main/game_preview.gif)
[Take me to the game](https://memory-adithyavis.vercel.app/)

## What is this?

An implementation of a memory card game.

It’s a simple game. Users are given a set of cards containing images/letters/Alphabet which are turned to the back (Hidden). When you click on an image, it reveals the card. If you click on two cards that are exactly the same, that is a win for you.

:heavy_check_mark: Cards have to be shuffled on load or restart.

:heavy_check_mark: Game should know how to handle matched and unmatched cards.

:heavy_check_mark: Game has to start from level 1 which has 4 cards (2 \* 2)

:heavy_check_mark: Users will move to the next level after completing the game within the time period & moves (which are specific to the given level)

:heavy_check_mark: Game should display the current number of moves a user has made.

:heavy_check_mark: The game should show a star rating (from 1–10) that reflects the player’s performance based on the number of moves made.

:heavy_check_mark: When a player starts a game, a displayed timer should also start and once the player wins the game, the timer stops.

:heavy_check_mark: A restart button should allow the player to reset the game board, the timer, and the star rating.

:heavy_check_mark: In the middle of the game, if the user closes the browser, the game has to retain the last finished level.

:heavy_check_mark: Game has to track the sequence of the card clicks.

## Details about the project

:nail_care: Bootstrap as the design library.
:nail_care: Sass + Utility classes provided by Bootstrap, for styles.

:flower_playing_cards: Flip effect of cards achieved using CSS backface-visibility & transform-style properties

:arrows_counterclockwise: Game can be resumed even after browser tab is closed.

:rocket: Deployed to Vercel

## Key features

:fire: Smooth animations and transitions.
:fire: Support for ignoring stale/rogue localStorage values (partially).
:fire: Objects whose structure can become potentially nested in the future have been normalized. [Read more.](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)

## Project structure

```bash
src
├── components
│   ├── Card                        # Includes implementation of flip effect
│   ├── ControlsBar
│   ├── GameGrid
│   ├── Header
│   ├── HistoryModal
│   ├── StartGameOverlay            # The game result (victory/ defeat) is shown here
│   ├── StarRanking
│   └── Timer
├── hooks
│   ├── useCardClickHandler.jsx     # Includes methods that handle card click by user
│   ├── useLogEvents.jsx            # Includes methods that log game events
│   └── useTrackLevelProgress.jsx   # Includes methods and watchers that determine user's progress to next level etc.
├── providers
│   ├── CardsInfoProvider.jsx       # Stores information regarding cards, like previously clicked card by user etc.
│   ├── GameInfoProvider.jsx        # Stores information related to the game, like level, number of cards in the current level etc.
│   └── StatsProvider.jsx
├── constants
│   ├── levelsConfig.js             # Configuration for different levels
│   └── numbers.js
└── ...
```

## To run the project locally

- Install project dependencies

```
cd path/to/directory
yarn install
```

- Start the local server

```
yarn start
```
