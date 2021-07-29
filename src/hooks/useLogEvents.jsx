import { useGameInfo } from 'providers/GameInfoProvider';
import { useCardsInfo } from 'providers/CardsInfoProvider';

const useLogEvents = () => {
  const { level } = useGameInfo();
  const { setCardsHistory } = useCardsInfo();

  const logCardsMatchEvent = (id1, id2) => {
    setCardsHistory((prevCardsHistory) =>
      prevCardsHistory.concat(
        `Level: ${level} -> Card ${id1} and Card ${id2} have matched.`
      )
    );
  };

  const logCardsDontMatchEvent = (id1, id2) => {
    setCardsHistory((prevCardsHistory) =>
      prevCardsHistory.concat(
        `Level: ${level} -> Card ${id1} and Card ${id2} don't match.`
      )
    );
  };

  const logCardClickEvent = (id) => {
    setCardsHistory((prevCardsHistory) =>
      prevCardsHistory.concat(
        `Level: ${level} -> Card ${id} has been revealed.`
      )
    );
  };

  return { logCardsMatchEvent, logCardsDontMatchEvent, logCardClickEvent };
};

export default useLogEvents;
