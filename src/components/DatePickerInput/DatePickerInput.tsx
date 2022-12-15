import { forwardRef } from "react";
import { useAppSelector } from "../../store/hooks";
import date from "../../assets/svg/date.svg";
import arrow from "../../assets/svg/arrow.svg";
import SvgIcon from "../SvgIcon/SvgIcon";

const DatePickerInput = forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>((props, ref) => {
  const booking = useAppSelector((state) => state.booking.value);
  return (
    <div className='inputWrapper'>
      <SvgIcon pathToIcon={`${date}#date`} className='icon-date' />
      <input
        ref={ref}
        {...props}
        type='text'
        placeholder={
          booking.date ? new Date(booking.date).toLocaleDateString() : "Date"
        }
      />
      <SvgIcon pathToIcon={`${arrow}#arrow`} className='icon-arrow' />
    </div>
  );
});

export default DatePickerInput;
