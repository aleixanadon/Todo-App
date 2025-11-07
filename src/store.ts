import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./features/itemSlice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
  // I have to save dates in redux as Date().toISOString() to serialize them
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
