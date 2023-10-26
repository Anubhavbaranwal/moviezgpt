import {createSlice} from "@reduxjs/toolkit";


const moviesSlice= createSlice({
    name:"movies",
    initialState:{
       nowPlayingMovie:null,
    },
    reducers:{
        addNowPlayingMOvies:(state,action)=>{
            state.nowPlayingMovie=action.payload;
        }
    }
});

export const {addNowPlayingMOvies}=moviesSlice.actions;
export default moviesSlice.reducer;