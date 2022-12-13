import React, { useRef } from "react";
import video0 from "../../assets/video/video0.mp4";
import playbtn from "../../assets/svg/playbtn.svg";
import poster from "../../assets/img/poster0.jpg";
import SvgIcon from "../SvgIcon/SvgIcon";
import VideoControls from "../VideoControls/VideoControls";
import {
  toggleVideoPlaying,
  setShowControls,
  setCurrentVolume,
  setVolumeProgress,
  setPlayProgress,
} from "../../store/reducers/video/video";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./VideoPlayer.css";

function VideoPlayer() {
  const video = useAppSelector((state) => state.video.value);
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    videoRef.current!.play();
    dispatch(setShowControls());
  };

  const stopVideo = () => {
    videoRef.current!.pause();
  };

  const togglePlay = () => {
    dispatch(toggleVideoPlaying());
    video.isVideoPlaying ? stopVideo() : playVideo();
  };

  const toggleVolume = () => {
    if (videoRef.current!.volume !== 0) {
      videoRef.current!.volume = 0;
      dispatch(setVolumeProgress(0));
    } else {
      videoRef.current!.volume = video.currentVolume / 100;
      dispatch(setVolumeProgress(video.currentVolume));
    }
  };

  const updatePlayProgress = () => {
    const currentTime = videoRef.current!.currentTime;
    const duration = videoRef.current!.duration;
    dispatch(setPlayProgress((currentTime / duration) * 100));
    if (currentTime === duration) dispatch(toggleVideoPlaying());
  };

  const setPlayProgressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPlayProgress(+e.target.value));
    videoRef.current!.currentTime =
      (+e.target.value * videoRef.current!.duration) / 100;
  };

  const setVolumeProgressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    videoRef.current!.volume = +target.value / 100;
    dispatch(setVolumeProgress(+target.value));
    dispatch(setCurrentVolume(+target.value));
  };

  const openFullscreen = () => {
    videoRef.current!.requestFullscreen();
  };

  return (
    <div className='video'>
      <video
        ref={videoRef}
        className='video__player'
        src={video0}
        poster={poster}
        onClick={togglePlay}
        onTimeUpdate={updatePlayProgress}
      ></video>
      {!video.isVideoPlaying && (
        <SvgIcon
          className='icon-video'
          pathToIcon={`${playbtn}#playbtn`}
          onClickHandler={togglePlay}
        />
      )}
      {video.showControls && (
        <VideoControls
          togglePlay={togglePlay}
          volumeProgressHandler={setVolumeProgressHandler}
          toggleVolume={toggleVolume}
          playProgressHandler={setPlayProgressHandler}
          openFullscreen={openFullscreen}
        />
      )}
    </div>
  );
}

export default VideoPlayer;
