import DatePicker from "react-datepicker";
import DatePickerInput from "../DatePickerInput/DatePickerInput";
import SvgIcon from "../SvgIcon/SvgIcon";
import arrow from "../../assets/svg/arrow.svg";
import time from "../../assets/svg/time.svg";
import name from "../../assets/svg/name.svg";
import email from "../../assets/svg/email.svg";
import tel from "../../assets/svg/tel.svg";
import ballot from "../../assets/svg/ballot.svg";
import { setDate, setTime } from "../../store/reducers/booking/booking";
import { setType } from "../../store/reducers/ticketType/ticketType";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { BookingFormsProps } from "../../types";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForms.css";

function BookingForms({ times, ticketTypes }: BookingFormsProps) {
  const ticketType = useAppSelector((state) => state.ticketType.value);
  const dispatch = useAppDispatch();
  return (
    <div className='booking__forms'>
      <div className='date-time'>
        <div className='booking__wrapper'>
          <DatePicker
            minDate={new Date()}
            onChange={(date: Date) => dispatch(setDate(date))}
            customInput={<DatePickerInput className='booking__input' />}
          />
        </div>

        <div className='booking__wrapper'>
          <SvgIcon pathToIcon={`${time}#time`} className='icon-time' />
          <select
            name='time-select'
            className='booking__input'
            onChange={(e) => dispatch(setTime(e.target.value))}
          >
            <option value=''>Time</option>
            {times.map((time, ind) => (
              <option key={ind} value={time}>
                {time}
              </option>
            ))}
          </select>
          <SvgIcon pathToIcon={`${arrow}#arrow`} className='icon-arrow' />
        </div>
      </div>

      <div className='booking__wrapper'>
        <SvgIcon pathToIcon={`${name}#name`} className='icon-name' />
        <input className='booking__input' type='text' placeholder='Name' />
      </div>

      <div className='booking__wrapper'>
        <SvgIcon pathToIcon={`${email}#email`} className='icon-email' />
        <input className='booking__input' type='email' placeholder='E-mail' />
      </div>

      <div className='booking__wrapper'>
        <SvgIcon pathToIcon={`${tel}#tel`} className='icon-tel' />
        <input className='booking__input' type='tel' placeholder='Phone' />
      </div>

      <div className='booking__wrapper'>
        <SvgIcon pathToIcon={`${ballot}#ballot`} className='icon-ballot' />
        <select
          name='type-select'
          className='booking__input'
          defaultValue={ticketType ? ticketType : ""}
          onChange={(e) => {
            if (e.target.value) dispatch(setType(e.target.value));
          }}
        >
          {!ticketType && <option value=''>Ticket Type</option>}
          {ticketTypes.map((type, ind) => {
            return (
              <option key={ind} value={type}>
                {type}
              </option>
            );
          })}
        </select>
        <SvgIcon pathToIcon={`${arrow}#arrow`} className='icon-arrow' />
      </div>
    </div>
  );
}

export default BookingForms;
