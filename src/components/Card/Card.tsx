import { Attraction } from "../../types";
import "./Card.css";

function Card({ ...card }: Attraction) {
  return (
    <a
      className='card'
      href={card.link}
      target='_blank'
      rel='noopener noreferrer nofollow'
    >
      <img className='card__img' src={card.image} alt={card.title} />
      <h3 className='card__title'>{card.title}</h3>
      <p className='card__text'>{card.firstLineText}</p>
      <p className='card__text card__text_second-line'>{card.secondLineText}</p>
    </a>
  );
}

export default Card;
