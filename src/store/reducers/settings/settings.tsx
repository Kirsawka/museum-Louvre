import { createSlice } from "@reduxjs/toolkit";

interface settingsState {
  value: {
    showBooking: boolean;
    showBurger: boolean;
  };
}

const initialState: settingsState = {
  value: {
    showBooking: false,
    showBurger: false,
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setShowBooking: (state) => {
      state.value.showBooking = !state.value.showBooking;
    },
    setShowBurger: (state) => {
      state.value.showBurger = !state.value.showBurger;
    },
  },
});

export const { setShowBooking, setShowBurger } = settingsSlice.actions;
export default settingsSlice.reducer;
