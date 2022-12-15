import DateSelect from "../DateSelect/DateSelect";
import { cardDates } from "../../data/cardDates";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setCardName,
  setCardNumber,
  setCVCNumber,
} from "../../store/reducers/creditCard/creditCard";
import "./Payment.css";

function Payment() {
  const creditCard = useAppSelector((state) => state.creditCard.value);
  const dispatch = useAppDispatch();

  return (
    <div className='credit-card'>
      <div className='front-side'>
        <div>
          <p className='credit-card__subtitle'>Card number</p>
          <input
            type='text'
            id='card-number'
            className='card-number'
            value={creditCard.cardNumber}
            onChange={(e) => dispatch(setCardNumber(e.target.value))}
          />
        </div>
        <div>
          <p className='credit-card__subtitle'>Expiration date</p>
          <div className='select-wrapper'>
            <DateSelect cardDate={cardDates.months} name='months' />
            <DateSelect cardDate={cardDates.years} name='years' />
          </div>
        </div>
        <div>
          <p className='credit-card__subtitle'>Cardholder name</p>
          <input
            type='text'
            id='cardholder-name'
            className='card-name'
            value={creditCard.cardName}
            onChange={(e) => dispatch(setCardName(e.target.value))}
          />
        </div>
      </div>
      <div className='back-side'>
        <div className='back-side__info'>
          <p className='credit-card__subtitle'>CVC/CVV</p>
          <input
            type='text'
            id='card-cvc'
            className='card-cvc'
            value={creditCard.cvcNumber}
            onChange={(e) => dispatch(setCVCNumber(e.target.value))}
          />
          <p className='cvc-text'>The last 3 or 4 digits on back of the card</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
