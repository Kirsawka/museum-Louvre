import { setShowBurger } from "../../store/reducers/settings/settings";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./HeaderBurger.css";

function HeaderBurger() {
  const settings = useAppSelector((state) => state.settings.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={settings.showBurger ? "burger active" : "burger"}
        onClick={() => dispatch(setShowBurger())}
      >
        <span className='burger__line'></span>
      </div>
      <div className='overlay'></div>
    </>
  );
}

export default HeaderBurger;
