import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface videoState {
  value: {
    isVideoPlaying: boolean;
    showControls: boolean;
    currentVolume: number;
    volumeProgress: number;
    playProgress: number;
  };
}

const initialState: videoState = {
  value: {
    isVideoPlaying: false,
    showControls: false,
    currentVolume: 50,
    volumeProgress: 50,
    playProgress: 0,
  },
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    toggleVideoPlaying: (state) => {
      state.value.isVideoPlaying = !state.value.isVideoPlaying;
    },
    setShowControls: (state) => {
      state.value.showControls = true;
    },
    setCurrentVolume: (state, action: PayloadAction<number>) => {
      state.value.currentVolume = action.payload;
    },
    setVolumeProgress: (state, action: PayloadAction<number>) => {
      state.value.volumeProgress = action.payload;
    },
    setPlayProgress: (state, action: PayloadAction<number>) => {
      state.value.playProgress = action.payload;
    },
  },
});

export const {
  toggleVideoPlaying,
  setShowControls,
  setCurrentVolume,
  setVolumeProgress,
  setPlayProgress,
} = videoSlice.actions;
export default videoSlice.reducer;
