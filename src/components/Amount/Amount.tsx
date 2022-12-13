import { AmountProps } from "../../types";
import TicketCount from "../TicketCount/TicketCount";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setShowBooking } from "../../store/reducers/settings/settings";
import "./Amount.css";

function Amount({ totalPrice }: AmountProps) {
  const count = useAppSelector((state) => state.ticketCounter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='amount'>
      <h3 className='section__subtitle'>Amount</h3>
      <div className='amount__count-wrapper'>
        <TicketCount id='basic' value={count.basic} subtitle='Basic 18+' />
        <TicketCount id='senior' value={count.senior} subtitle='Senior 65+' />
      </div>
      <p className='amount__total'>Total €{totalPrice} </p>
      <button
        className='amount__button'
        onClick={() => dispatch(setShowBooking())}
      >
        Buy Now
      </button>
    </div>
  );
}

export default Amount;
