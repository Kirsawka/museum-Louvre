import Booking from "../Booking/Booking";
import Overview from "../Overview/Overview";
import Payment from "../Payment/Payment";
import SvgIcon from "../SvgIcon/SvgIcon";
import close from "../../assets/svg/close.svg";
import { useAppDispatch } from "../../store/hooks";
import { setShowBooking } from "../../store/reducers/settings/settings";
import "./BookingPage.css";

function BookingPage() {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className='booking-page'>
        <Booking />
        <div className='overview-block'>
          <Overview />
          <Payment />
          <button className='buy-btn'>Buy Now</button>
        </div>
      </div>
      <SvgIcon
        pathToIcon={`${close}#close`}
        className='icon-close'
        onClickHandler={() => dispatch(setShowBooking())}
      />
    </>
  );
}

export default BookingPage;
