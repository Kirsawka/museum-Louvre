import { configureStore } from "@reduxjs/toolkit";
import ticketCountReducer from "./reducers/ticketCounter/ticketCounter";
import priceSliceReducer from "./reducers/price/price";
import settingsSliceReducer from "./reducers/settings/settings";
import ticketTypeSliceReducer from "./reducers/ticketType/ticketType";
import videoSliceReducer from "./reducers/video/video";

export const store = configureStore({
  reducer: {
    ticketCounter: ticketCountReducer,
    price: priceSliceReducer,
    settings: settingsSliceReducer,
    ticketType: ticketTypeSliceReducer,
    video: videoSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
