import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./Video.css";

function Video() {
  return (
    <section className='section section_light video'>
      <div className='container'>
        <div className='video__content'>
          <h2 className='section__title section__title_light section__title_no-after'>
            Video journey
          </h2>
          <p className='section__text section__text_dark video__text'>
            Enter and visit one of the most famous museums in the world and
            enjoy masterpieces such as Mona Lisa or Hammurabi's Code
          </p>
        </div>
        <VideoPlayer />
      </div>
    </section>
  );
}

export default Video;
