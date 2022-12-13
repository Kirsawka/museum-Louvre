import { socials } from "../../data/socials";
import SocialList from "../SocialList/SocialList";
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <SocialList socials={socials} />
        <div className='footer__content'>
          <span className='footer__text'>©</span>
          <a
            href='https://github.com/Kirsawka'
            className='footer__link'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            kirsawka
          </a>
          <span className='footer__text'>2022</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
