import { TicketCountProps } from "../../types";
import { useAppDispatch } from "../../store/hooks";
import { changeTicketCount } from "../../store/reducers/ticketCounter/ticketCounter";
import "./TicketCount.css";

function TicketCount({
  id,
  value,
  subtitle,
  className = "",
  price,
}: TicketCountProps) {
  const dispatch = useAppDispatch();
  return (
    <div className={`count ${className}`}>
      <span>{price ? `${subtitle} (${price} €)` : `${subtitle}`}</span>
      <div className={`count__wrapper ${className}`} id={`${id}-ticket`}>
        <span
          className={`count__sign ${className}`}
          onClick={(e) => {
            dispatch(changeTicketCount((e.target as HTMLSpanElement).id));
          }}
          id={`${id}-decrement`}
        >
          -
        </span>
        {value}
        <span
          className={`count__sign ${className}`}
          onClick={(e) => {
            dispatch(changeTicketCount((e.target as HTMLSpanElement).id));
          }}
          id={`${id}-increment`}
        >
          +
        </span>
      </div>
    </div>
  );
}

export default TicketCount;
