import { galleryImages } from "../../data/galeryImages";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";

function Gallery() {
  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    AOS.init();
    shuffle(galleryImages);
  }, []);

  return (
    <section className='section gallery'>
      <div className='container'>
        <h2 className='section__title section__title_no-after'>Art Gallery</h2>
        <div className='gallery__container'>
          <div className='gallery__inner-container'>
            {galleryImages.map((image: string, ind: number) => {
              return (
                <div
                  className='gallery__image-wrapper'
                  key={ind}
                  data-aos='fade-up'
                >
                  <img
                    src={image}
                    className='gallery__image'
                    alt='galleryImage'
                  />
                </div>
              );
            })}
          </div>
          <div className='gallery__background'></div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
