import { OverviewTicketsProps } from "../../types";
import "./OverviewTickets.css";

function OverviewTickets({
  price,
  count,
  id,
  totalPrice,
}: OverviewTicketsProps) {
  return (
    <div className='info-wrapper tickets'>
      <span className='info-count'>{count}</span>
      <span>
        {id} ({price} €)
      </span>
      <span className='info-total'>{totalPrice} €</span>
    </div>
  );
}

export default OverviewTickets;
