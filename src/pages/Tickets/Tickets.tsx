import { useState, useEffect } from "react";
import pompeo from "../../assets/img/pompeo.jpg";
import Amount from "../../components/Amount/Amount";
import TicketType from "../../components/TicketType/TicketType";
import Contacts from "../Contacts/Contacts";
import BookingPage from "../../components/BookingPage/BookingPage";
import { ticketTypes } from "../../data/ticketTypes";
import { setPrice } from "../../store/reducers/price/price";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./Tickets.css";

function Tickets() {
  const count = useAppSelector((state) => state.ticketCounter.value);
  const price = useAppSelector((state) => state.price.value);
  const settings = useAppSelector((state) => state.settings.value);
  const ticketType = useAppSelector((state) => state.ticketType.value);
  const dispatch = useAppDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(setPrice(ticketType));
    setTotalPrice(price.basic * count.basic + price.senior * count.senior);
  }, [price, count, dispatch, ticketType]);

  return (
    <section className='section section_light ticket'>
      {!settings.showBooking && (
        <>
          <div className='container'>
            <h2 className='section__title section__title_light'>BUY TICKETS</h2>
            <div className='ticket__container'>
              <div className='ticket__img-wrapper'>
                <img src={pompeo} alt='Pompeo' className='ticket__img' />
              </div>
              <div className='ticket__wrapper'>
                <TicketType ticketTypes={ticketTypes} />
                <Amount totalPrice={totalPrice} />
              </div>
            </div>
          </div>
          <div className='ticket__parallax'></div>
          <Contacts />
        </>
      )}
      {settings.showBooking && <BookingPage />}
    </section>
  );
}

export default Tickets;
