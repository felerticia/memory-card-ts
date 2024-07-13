import { useEffect, useState } from "react";
import "./App.css";
import { CardType } from "./types";
import { shuffle } from "./helpers/helper";
import Card from "./components/Card/Card";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [firstCard, setFirstCard] = useState<number | undefined>();
  const [secondCard, setSecondCard] = useState<number | undefined>();

  const updateRevealedCards = (index: number) => {
    if (firstCard !== undefined) {
      setSecondCard(index);
    } else {
      setFirstCard(index);
    }
  };

  const reset = () => {
    setFirstCard(undefined);
    setSecondCard(undefined);
  };

  useEffect(() => {
    if (firstCard !== undefined && secondCard !== undefined) {
      if (cards[firstCard].src === cards[secondCard].src) {
        const updatedCards = cards.map((card, i) => ({
          ...card,
          revealed: card.revealed || i === firstCard || i === secondCard,
        }));
        setCards(updatedCards);
        reset();
      }
    }
  }, [firstCard, secondCard, cards]);

  const initGame = () => {
    const c = shuffle();
    setCards(c);
  };

  useEffect(initGame, []);

  return (
    <div className="App">
      <div className="grid">
        {cards.map((card, i) => (
          <Card key={i} card={card} onClick={() => updateRevealedCards(i)} />
        ))}
      </div>
    </div>
  );
}

export default App;
