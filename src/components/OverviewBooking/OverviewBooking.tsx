import { OverviewBookingProps } from "../../types";
import SvgIcon from "../SvgIcon/SvgIcon";
import "./OverviewBooking.css";

function OverviewBooking({
  info,
  svgIcon,
  iconName,
  className,
}: OverviewBookingProps) {
  return (
    <div className='info-wrapper'>
      <SvgIcon pathToIcon={`${svgIcon}#${iconName}`} className={className} />
      {info}
    </div>
  );
}

export default OverviewBooking;
