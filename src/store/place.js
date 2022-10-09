import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeInput: "",
  places: [],
  place:{}
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    setPlaceInput: (state, action) => {
      state.placeInput = action.payload;
    },
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
    setPlace: (state, action) => {
      state.place = action.payload;
    },
    setPlaceName: (state, action) => {
      state.place.name = action.payload;
    },
  },
});

export const { setPlaceInput, setPlaces, setPlace, setPlaceName } = placeSlice.actions;
export default placeSlice.reducer;
