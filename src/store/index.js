import { configureStore } from "@reduxjs/toolkit";
import place from "store/place";
import weather from "store/weather";

const store = configureStore({
  reducer: {
    place,
    weather,
  },
});

export default store;
