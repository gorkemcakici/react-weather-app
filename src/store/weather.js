import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 weather:{}
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setWeatherName: (state, action) => {
      state.weather.name = action.payload
    }
  },
});

export const { setWeather, setWeatherName } = weatherSlice.actions;
export default weatherSlice.reducer;
