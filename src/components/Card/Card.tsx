import { CardType } from "../../types";
import "./Card.css";

type CardProps = {
  card: CardType;
  onClick: () => void;
  isRevealed: boolean;
};

const Card = ({ card, onClick, isRevealed }: CardProps) => {
  return (
    <div className={`card ${isRevealed ? "is-revealed" : ""}`}>
      <div className="card__face card__face--front">
        <img src={card.src} alt="card-front" />
      </div>
      <div className="card__face card__face--back">
        <img src="/pix/back.jpg" alt="card-back" onClick={onClick} />
      </div>
    </div>
  );
};

export default Card;
