import { configureStore } from "@reduxjs/toolkit";
import ticketCountReducer from "./reducers/ticketCounter/ticketCounter";
import priceSliceReducer from "./reducers/price/price";
import settingsSliceReducer from "./reducers/settings/settings";
import ticketTypeSliceReducer from "./reducers/ticketType/ticketType";
import videoSliceReducer from "./reducers/video/video";
import bookingSliceReducer from "./reducers/booking/booking";
import creditCardSliceReducer from "./reducers/creditCard/creditCard";

export const store = configureStore({
  reducer: {
    ticketCounter: ticketCountReducer,
    price: priceSliceReducer,
    settings: settingsSliceReducer,
    ticketType: ticketTypeSliceReducer,
    video: videoSliceReducer,
    booking: bookingSliceReducer,
    creditCard: creditCardSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
