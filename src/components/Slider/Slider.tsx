import { useEffect, useState } from "react";
import { sliderImages } from "../../data/sliderImages";
import { Slide } from "react-slideshow-image";
import "./Slider.css";
import "react-slideshow-image/dist/styles.css";

function Slider() {
  const properties = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: () => <div className='indicator'></div>,
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let style = "";

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowWidth > 768) {
    style =
      "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.5) 16.19%, rgba(0, 0, 0, 0) 30.73%),";
  }

  return (
    <div className='slide-container'>
      <Slide {...properties}>
        {sliderImages.map((slideImage, index) => (
          <div className='each-slide' key={index}>
            <div
              style={{
                background: `${style} center / cover no-repeat url(${slideImage})`,
              }}
              className='slider-img'
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slider;
