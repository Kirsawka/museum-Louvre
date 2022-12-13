import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ticketCounterState {
  value: {
    basic: number;
    senior: number;
  };
}

const initialState: ticketCounterState = {
  value: {
    basic: 0,
    senior: 0,
  },
};

const maxTicketCount = 5;
const minTicketCount = 0;

export const ticketCounterSlice = createSlice({
  name: "ticketCounter",
  initialState,
  reducers: {
    changeTicketCount: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "basic-increment":
          if (state.value.basic < maxTicketCount) state.value.basic += 1;
          break;
        case "senior-increment":
          if (state.value.senior < maxTicketCount) state.value.senior += 1;
          break;
        case "basic-decrement":
          if (state.value.basic > minTicketCount) state.value.basic -= 1;
          break;
        case "senior-decrement":
          if (state.value.senior > minTicketCount) state.value.senior -= 1;
      }
    },
  },
});

export const { changeTicketCount } = ticketCounterSlice.actions;
export default ticketCounterSlice.reducer;
