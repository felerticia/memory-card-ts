import { useEffect, useState } from "react";
import "./App.css";
import { CardType } from "./types";
import { shuffle } from "./helpers/helper";
import Card from "./components/Card/Card";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [firstCard, setFirstCard] = useState<number | undefined>();
  const [secondCard, setSecondCard] = useState<number | undefined>();
  const [disabled, setDisabled] = useState(false);
  const [turn, setTurn] = useState(0);

  const updateRevealedCards = (index: number) => {
    if (disabled) return;
    if (firstCard !== undefined) {
      setSecondCard(index);
    } else {
      setFirstCard(index);
    }
    setTurn(turn + 1);
  };

  const reset = () => {
    setFirstCard(undefined);
    setSecondCard(undefined);
    setDisabled(false);
  };

  useEffect(() => {
    if (firstCard !== undefined && secondCard !== undefined) {
      setDisabled(true);
      if (cards[firstCard].src === cards[secondCard].src) {
        const updatedCards = cards.map((card, i) => ({
          ...card,
          revealed: card.revealed || i === firstCard || i === secondCard,
        }));
        setCards(updatedCards);
        reset();
      } else {
        setTimeout(reset, 1000);
      }
    }
  }, [firstCard, secondCard, cards]);

  const initGame = () => {
    const c = shuffle();
    setFirstCard(undefined);
    setTurn(0);

    setTimeout(() => setCards(c), 300);
  };

  useEffect(initGame, []);

  return (
    <div className="App">
      <div className="grid">
        {cards.map((card, i) => (
          <Card
            key={i}
            card={card}
            onClick={() => updateRevealedCards(i)}
            isRevealed={card.revealed || firstCard === i || secondCard === i}
          />
        ))}
      </div>
      <div className="controls">
        <button onClick={initGame}>New Game</button>
        <p>Turn: {turn}</p>
      </div>
    </div>
  );
}

export default App;
