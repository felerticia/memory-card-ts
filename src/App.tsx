import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./types";
import { shuffle } from "./helpers/helper";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const initGame = () => {
    const c = shuffle();
    setCards(c);
  };

  useEffect(initGame, []);

  return (
    <div className="App">
      {cards.map((card, i) => (
        <div>
          <img src={card.src} />
        </div>
      ))}
    </div>
  );
}

export default App;
