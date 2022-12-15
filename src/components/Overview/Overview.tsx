import { useEffect, useState } from "react";
import OverviewBooking from "../OverviewBooking/OverviewBooking";
import OverviewTickets from "../OverviewTickets/OverviewTickets";
import date from "../../assets/svg/date.svg";
import time from "../../assets/svg/time.svg";
import checkCircle from "../../assets/svg/checkCircle.svg";
import { useAppSelector } from "../../store/hooks";
import "./Overview.css";

function Overview() {
  const ticketType = useAppSelector((state) => state.ticketType.value);
  const count = useAppSelector((state) => state.ticketCounter.value);
  const price = useAppSelector((state) => state.price.value);
  const booking = useAppSelector((state) => state.booking.value);
  const [totalBasicPrice, setTotalBasicPrice] = useState(0);
  const [totalSeniorPrice, setTotalSeniorPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalBasicPrice(price.basic * count.basic);
    setTotalSeniorPrice(price.senior * count.senior);
    setTotalPrice(price.basic * count.basic + price.senior * count.senior);
  }, [price, count]);

  return (
    <div className='overview'>
      <h4 className='overview__title'>Overview</h4>
      <a
        className='overview__link'
        href='https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736'
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        Tour to Louvre
      </a>
      <div className='overview__booking'>
        <OverviewBooking
          info={booking.date ? booking.date : "Select date"}
          svgIcon={date}
          iconName='date'
          className='icon-date info'
        />
        <OverviewBooking
          info={booking.time ? booking.time : "Select time"}
          svgIcon={time}
          iconName='time'
          className='icon-time info'
        />
        <OverviewBooking
          info={ticketType ? ticketType : "Select exhibition type"}
          svgIcon={checkCircle}
          iconName='checkCircle'
          className='icon-check-circle info'
        />
      </div>
      <div className='overview__tickets'>
        <OverviewTickets
          id='Basic'
          count={count.basic}
          price={price.basic}
          totalPrice={totalBasicPrice}
        />
        <OverviewTickets
          id='Senior'
          count={count.senior}
          price={price.senior}
          totalPrice={totalSeniorPrice}
        />
      </div>
      <div className='overview__total'>
        <div>Total</div>
        <div>{totalPrice} €</div>
      </div>
    </div>
  );
}

export default Overview;
