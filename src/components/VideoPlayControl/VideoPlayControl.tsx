import play from "../../assets/svg/play.svg";
import pause from "../../assets/svg/pause.svg";
import SvgIcon from "../SvgIcon/SvgIcon";
import { VideoPlayControlProps } from "../../types";
import { useAppSelector } from "../../store/hooks";
import "./VideoPlayControl.css";

function VideoPlayControl({
  togglePlay,
  playProgressHandler,
}: VideoPlayControlProps) {
  const video = useAppSelector((state) => state.video.value);

  return (
    <div className='play-control'>
      {video.isVideoPlaying ? (
        <SvgIcon
          className='icon-pause'
          pathToIcon={`${pause}#pause`}
          onClickHandler={togglePlay}
        />
      ) : (
        <SvgIcon
          className='icon-play'
          pathToIcon={`${play}#play`}
          onClickHandler={togglePlay}
        />
      )}
      <input
        className='play-input'
        type='range'
        value={video.playProgress}
        onChange={playProgressHandler}
        style={{
          background: `linear-gradient(to right, #710707 ${video.playProgress}%, #dad3ce ${video.playProgress}%)`,
        }}
      />
    </div>
  );
}

export default VideoPlayControl;
