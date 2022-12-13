import SvgIcon from "../SvgIcon/SvgIcon";
import fullscreen from "../../assets/svg/fullscreen.svg";
import { VideoControlsProps } from "../../types";
import VideoPlayControl from "../VideoPlayControl/VideoPlayControl";
import VideoVolumeControl from "../VideoVolumeControl/VideoVolumeControl";
import "./VideoControls.css";

function VideoControls({
  togglePlay,
  volumeProgressHandler,
  toggleVolume,
  playProgressHandler,
  openFullscreen,
}: VideoControlsProps) {
  return (
    <div className='controls'>
      <VideoPlayControl
        togglePlay={togglePlay}
        playProgressHandler={playProgressHandler}
      />
      <VideoVolumeControl
        toggleVolume={toggleVolume}
        volumeProgressHandler={volumeProgressHandler}
      />
      <SvgIcon
        pathToIcon={`${fullscreen}#fullscreen`}
        onClickHandler={openFullscreen}
        className='icon-fullscreen'
      />
    </div>
  );
}

export default VideoControls;
