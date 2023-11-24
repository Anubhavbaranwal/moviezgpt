import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailerVideo: null,
    Popular: null,
    TopRated: null,
    Upcoming: null,
  },
  reducers: {
    addNowPlayingMOvies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addPopular: (state, action) => {
      state.Popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.Upcoming = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMOvies,
  addTrailerVideo,
  addPopular,
  addTopRated,
  addUpcoming,
} = moviesSlice.actions;
export default moviesSlice.reducer;
