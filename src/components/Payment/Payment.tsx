import { useState } from "react";
import DateSelect from "../DateSelect/DateSelect";
import visa from "../../assets/img/visa.png";
import mastercard from "../../assets/img/mastercard.png";
import { cardDates } from "../../data/cardDates";
import "./Payment.css";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");

  const getCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    // if (!isNaN(+text)) {
    if (text.length < 20)
      setCardNumber(text.replace(/\W/gi, "").replace(/(.{4})/g, "$1 "));
    // }
  };

  const getCardName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCardName(name.toUpperCase());
  };

  return (
    <div className='credit-card'>
      <div className='front-side'>
        <div>
          <p className='credit-card__subtitle'>Card number</p>
          <input
            type='text'
            id='card-number'
            className='card-number'
            value={cardNumber}
            onChange={getCardNumber}
          />
        </div>
        <div>
          <p className='credit-card__subtitle'>Expiration date</p>
          <DateSelect cardDate={cardDates.months} name='months' />
          <DateSelect cardDate={cardDates.years} name='years' />
        </div>
        <div>
          <p className='credit-card__subtitle'>Cardholder name</p>
          <input
            type='text'
            id='cardholder-name'
            className='card-name'
            value={cardName}
            onChange={getCardName}
          />
        </div>
        <img className='visa-img' src={visa} alt='visa' />
        <img className='mastercard-img' src={mastercard} alt='mastercard' />
      </div>
      <div className='back-side'>
        <div className='back-side__info'>
          <p className='credit-card__subtitle'>CVC/CVV</p>
          <input type='text' id='card-cvc' className='card-cvc' />
          <p className='cvc-text'>The last 3 or 4 digits on back of the card</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
