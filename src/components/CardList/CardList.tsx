import { attractions } from "../../data/attractions";
import Card from "../Card/Card";
import "./CardList.css";

function CardList() {
  return (
    <div className='card-list'>
      {attractions.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  );
}

export default CardList;
