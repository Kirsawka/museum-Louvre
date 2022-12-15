import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface bookingState {
  value: {
    date: string;
    time: string;
  };
}

const initialState: bookingState = {
  value: {
    date: "",
    time: "",
  },
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<Date>) => {
      state.value.date = action.payload.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        weekday: "long",
      });
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.value.time = action.payload;
    },
  },
});

export const { setDate, setTime } = bookingSlice.actions;
export default bookingSlice.reducer;
