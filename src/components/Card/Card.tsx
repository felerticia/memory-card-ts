import { CardType } from "../../types";
import "./Card.css";

type CardProps = {
  card: CardType;
  onClick: () => void;
};

const Card = ({ card, onClick }: CardProps) => {
  return (
    <div className="card">
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
