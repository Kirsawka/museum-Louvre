import SvgIcon from "../SvgIcon/SvgIcon";
import volumeSvg from "../../assets/svg/volume.svg";
import muteSvg from "../../assets/svg/mute.svg";
import { VideoVolumeControlProps } from "../../types";
import { useAppSelector } from "../../store/hooks";
import "./VideoVolumeControl.css";

function VideoVolumeControl({
  volumeProgressHandler,
  toggleVolume,
}: VideoVolumeControlProps) {
  const video = useAppSelector((state) => state.video.value);

  return (
    <div className='volume-control'>
      {video.volumeProgress === 0 ? (
        <SvgIcon
          className='icon-mute'
          pathToIcon={`${muteSvg}#mute`}
          onClickHandler={toggleVolume}
        />
      ) : (
        <SvgIcon
          className='icon-volume'
          pathToIcon={`${volumeSvg}#volume`}
          onClickHandler={toggleVolume}
        />
      )}
      <input
        className='volume-input'
        type='range'
        min='0'
        max='100'
        value={video.volumeProgress}
        onChange={volumeProgressHandler}
        style={{
          background: `linear-gradient(to right, #710707 ${video.volumeProgress}%, #dad3ce ${video.volumeProgress}%)`,
        }}
      />
    </div>
  );
}

export default VideoVolumeControl;
