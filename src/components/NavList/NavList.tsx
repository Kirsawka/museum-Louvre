import { NavLink } from "react-router-dom";
import { Page, NavListProps } from "../../types";
import { setShowBurger } from "../../store/reducers/settings/settings";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./NavList.css";

function NavList({ pages }: NavListProps) {
  const settings = useAppSelector((state) => state.settings.value);
  const dispatch = useAppDispatch();

  return (
    <nav className={settings.showBurger ? "nav active" : "nav"}>
      <ul className='nav__list list'>
        {pages
          .filter((page: Page) => page.linkName !== "Welcome")
          .map((page: Page) => {
            return (
              <li key={page.id}>
                <NavLink
                  end
                  to={page.path}
                  style={({ isActive }) => ({
                    color: isActive ? "#9D8665" : "#FFFFFF",
                  })}
                  className='list__link'
                  onClick={() => dispatch(setShowBurger())}
                >
                  {page.linkName}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default NavList;
