import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface creditCardState {
  value: {
    cardName: string;
    cardNumber: string;
    cvcNumber: string;
  };
}

const initialState: creditCardState = {
  value: {
    cardName: "",
    cardNumber: "",
    cvcNumber: "",
  },
};

export const creditCardSlice = createSlice({
  name: "creditCard",
  initialState,
  reducers: {
    setCardName: (state, action: PayloadAction<string>) => {
      state.value.cardName = action.payload.toUpperCase();
    },
    setCardNumber: (state, action: PayloadAction<string>) => {
      const rawText = Array.from(action.payload.split(" ").join(""));
      const creditCardNumber: string[] = [];
      rawText.forEach((t, i) => {
        if (!isNaN(+t)) {
          if (creditCardNumber.length < 20) {
            if (i % 4 === 0) creditCardNumber.push(" ");
            creditCardNumber.push(t);
          }
        }
      });
      state.value.cardNumber = creditCardNumber.join("");
    },
    setCVCNumber: (state, action: PayloadAction<string>) => {
      const rawText = Array.from(action.payload.split(" ").join(""));
      const creditCardCVC: string[] = [];
      rawText.forEach((t) => {
        if (!isNaN(+t)) {
          if (creditCardCVC.length < 4) creditCardCVC.push(t);
        }
      });
      state.value.cvcNumber = creditCardCVC.join("");
    },
  },
});

export const { setCardName, setCardNumber, setCVCNumber } =
  creditCardSlice.actions;
export default creditCardSlice.reducer;
