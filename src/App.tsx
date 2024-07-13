import { useEffect, useState } from "react";
import "./App.css";
import { CardType } from "./types";
import { shuffle } from "./helpers/helper";
import Card from "./components/Card/Card";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);

  const initGame = () => {
    const c = shuffle();
    setCards(c);
  };

  useEffect(initGame, []);

  return (
    <div className="App">
      <div className="grid">
        {cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
