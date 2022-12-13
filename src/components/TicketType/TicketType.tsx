import { TicketTypeProps } from "../../types";
import { setType } from "../../store/reducers/ticketType/ticketType";
import { useAppDispatch } from "../../store/hooks";
import "./TicketType.css";

function TicketType({ ticketTypes }: TicketTypeProps) {
  const dispatch = useAppDispatch();
  return (
    <div className='ticket-type'>
      <h3 className='section__subtitle'>Ticket Type</h3>
      <div className='ticket-type__wrapper'>
        {ticketTypes.map((type, ind) => {
          return (
            <div key={ind}>
              <input
                type='radio'
                id={`type${ind + 1}`}
                name='type'
                value={type}
                className='ticket-type__input'
                onChange={(e) => dispatch(setType(e.target.value))}
              />
              <label htmlFor={`type${ind + 1}`} className='ticket-type__label'>
                {type}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TicketType;
