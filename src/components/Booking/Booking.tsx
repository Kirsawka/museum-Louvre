import bookingLogo from "../../assets/svg/bookingLogo.svg";
import BookingForms from "../BookingForms/BookingForms";
import BookingEntryTicket from "../BookingEntryTicket/BookingEntryTicket";
import { ticketTypes } from "../../data/ticketTypes";
import { times } from "../../data/times";
import "./Booking.css";

function Booking() {
  return (
    <div className='booking'>
      <img className='booking__logo' src={bookingLogo} alt='' />
      <h2 className='booking__subtitle'>Booking tickets</h2>
      <a
        className='booking__link'
        href='https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736'
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        Tour to Louvre
      </a>
      <BookingForms ticketTypes={ticketTypes} times={times} />
      <BookingEntryTicket />
    </div>
  );
}

export default Booking;
