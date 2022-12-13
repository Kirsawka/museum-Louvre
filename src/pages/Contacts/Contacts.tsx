import Map from "../../components/Map/Map";
import "./Contacts.css";

function Contacts() {
  return (
    <section className='section section_light contacts'>
      <div className='container'>
        <h2 className='section__title section__title_light'>Contacts</h2>

        <div className='contacts__wrapper'>
          <div className='contacts__info'>
            <h3 className='section__subtitle'>
              Palais Royal
              <span className='line-break'>Musee du Louvre</span>
            </h3>
            <p className='section__text'>address: 75001 Paris, France</p>
            <a
              className='section__text contacts__info-link'
              href='mailto:info@louvre.fr'
            >
              mail: info@louvre.fr
            </a>
            <a
              className='section__text contacts__info-link'
              href='tel:+33(0) 1 40 20 50 50'
            >
              phone: +33(0) 1 40 20 50 50
            </a>
          </div>
          <Map />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
