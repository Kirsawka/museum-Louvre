import { SvgIconProps } from "../../types";
import "./SvgIcon.css";

function SvgIcon({ className = "", pathToIcon, onClickHandler }: SvgIconProps) {
  return (
    <svg className={`icon ${className}`} onClick={onClickHandler}>
      <use xlinkHref={`${pathToIcon}`}></use>
    </svg>
  );
}

export default SvgIcon;
