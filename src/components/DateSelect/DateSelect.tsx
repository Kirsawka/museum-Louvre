import { DateSelectProps } from "../../types";
import "./DateSelect.css";

function DateSelect({ cardDate, name }: DateSelectProps) {
  return (
    <select name={name} className='select'>
      {cardDate.map((date, ind) => {
        return (
          <option key={ind} value={date}>
            {date}
          </option>
        );
      })}
    </select>
  );
}

export default DateSelect;
