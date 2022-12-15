import TicketCount from "../TicketCount/TicketCount";
import { useAppSelector } from "../../store/hooks";
import "./BookingEntryTicket.css";

function BookingEntryTicket() {
  const count = useAppSelector((state) => state.ticketCounter.value);
  const price = useAppSelector((state) => state.price.value);

  return (
    <div className='booking__tickets booking-tickets'>
      <h3 className='booking-tickets__subtitle'>Entry ticket</h3>

      <TicketCount
        id='basic'
        value={count.basic}
        subtitle='Basic 18+'
        className='book'
        price={price.basic}
      />

      <TicketCount
        id='senior'
        value={count.senior}
        subtitle='Senior 65+'
        className='book'
        price={price.senior}
      />
    </div>
  );
}

export default BookingEntryTicket;
