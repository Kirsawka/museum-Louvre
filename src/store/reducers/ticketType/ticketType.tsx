import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ticketTypeState {
  value: string;
}

const initialState: ticketTypeState = {
  value: "",
};

export const ticketTypeSlice = createSlice({
  name: "ticketType",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setType } = ticketTypeSlice.actions;
export default ticketTypeSlice.reducer;
