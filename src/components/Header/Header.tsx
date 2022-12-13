import { pages } from "../../data/pages";
import HeaderBurger from "../HeaderBurger/HeaderBurger";
import NavList from "../NavList/NavList";
import "./Header.css";

function Header() {
  return (
    <header className='header'>
      <div className='container header__container'>
        <a className='header__logo' href='/museum-louvre'>
          Louvre
        </a>
        <NavList pages={pages} />
        <HeaderBurger />
      </div>
    </header>
  );
}

export default Header;
