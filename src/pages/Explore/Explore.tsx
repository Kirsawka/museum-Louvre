import meninasAfter from "../../assets/img/meninas-after.jpg";
import meninasBefore from "../../assets/img/meninas-before.jpg";
import PictureComparison from "../../components/PictureComparison/PictureComparison";
import "./Explore.css";

function Explore() {
  return (
    <section className='section explore'>
      <div className='container explore__container'>
        <div className='explore__content'>
          <h2 className='section__title'>Picture explore</h2>
          <p className='section__text'>
            Las Meninas is a 1656 painting by Diego Velázquez, the leading
            artist of the Spanish Golden Age.
          </p>
          <br />
          <p className='section__text'>
            It was cleaned in 1984 to remove a
            <span className='section__text_colored'>
              &nbsp;&quot;yellow veil&quot;&nbsp;
            </span>
            of dust that had gathered since the previous restoration in the 19th
            century.
          </p>
          <br />
          <p className='section__text'>
            The cleaning provoked furious protests, not because the picture had
            been damaged in any way, but because it looked different.
          </p>
        </div>
        <div className='explore__img'>
          <PictureComparison
            imageBefore={meninasBefore}
            imageAfter={meninasAfter}
          />
        </div>
      </div>
    </section>
  );
}

export default Explore;
