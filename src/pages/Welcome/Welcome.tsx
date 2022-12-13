import Slider from "../../components/Slider/Slider";
import "./Welcome.css";

function Welcome() {
  return (
    <section className='section welcome'>
      <div className='container welcome__container'>
        <h1 className='section__title section__title_no-after welcome__title'>
          Welcome
          <span className='line-break'>to the Louvre</span>
        </h1>
        <p className='welcome__text'>From the castle to the museum</p>
        <a
          className='welcome__link'
          href='https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736'
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          Discover the Louvre
        </a>
        <Slider />
      </div>
    </section>
  );
}

export default Welcome;
