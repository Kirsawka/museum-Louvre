import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { prices } from "../../../data/prices";

interface priceState {
  value: {
    basic: number;
    senior: number;
  };
}

const initialState: priceState = {
  value: {
    basic: 0,
    senior: 0,
  },
};

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "Permanent exhibition":
          state.value.basic = prices.basic.permanent;
          state.value.senior = prices.senior.permanent;
          break;
        case "Temporary exhibition":
          state.value.basic = prices.basic.temporary;
          state.value.senior = prices.senior.temporary;
          break;
        case "Combined Admission":
          state.value.basic = prices.basic.combined;
          state.value.senior = prices.senior.combined;
          break;
      }
    },
  },
});

export const { setPrice } = priceSlice.actions;
export default priceSlice.reducer;
