import { createSlice } from '@reduxjs/toolkit';
import close_hats from "../assets/drums_audio/HiHat_Closed_Rock.ogg";
import open_hats from "../assets/drums_audio/HiHat_Open_Rock.ogg";

const initialState = {
    hihatsOpenAudio: open_hats,
    hihatsOpenVolume: 0.5,
    hihatsOpenPanning: -0.5,
    hihatsOpenIsMuted: false,
    hihatsCloseAudio: close_hats,
    hihatsCloseVolume: 0.7,
    hihatsClosePanning: -0.5,
    hihatsCloseIsMuted: false,
};

const hihatsSlice = createSlice({
    name: 'hihats',
    initialState,
    reducers: {
        updateHihatsOpenVolume: (state, action) => {
            state.hihatsOpenVolume = action.payload;
        },
        updateHihatsOpenPanning: (state, action) => {
            state.hihatsOpenPanning = action.payload;
        },
        updateHihatsOpenAudio: (state, action) => {
            state.hihatsOpenAudio = action.payload;
        },
        updateHihatsOpenIsMuted: (state, action) => {
            state.hihatsOpenIsMuted = action.payload;
        },
        updateHihatsCloseVolume: (state, action) => {
            state.hihatsCloseVolume = action.payload;
        },
        updateHihatsClosePanning: (state, action) => {
            state.hihatsClosePanning = action.payload;
        },
        updateHihatsCloseAudio: (state, action) => {
            state.hihatsCloseAudio = action.payload;
        },
        updateHihatsCloseIsMuted: (state, action) => {
            state.hihatsCloseIsMuted = action.payload;
        },
    },
});

export const { 
    updateHihatsOpenVolume, updateHihatsOpenPanning, 
    updateHihatsOpenAudio, updateHihatsOpenIsMuted,
    updateHihatsCloseVolume, updateHihatsClosePanning,
    updateHihatsCloseAudio, updateHihatsCloseIsMuted 
} = hihatsSlice.actions;
export default hihatsSlice.reducer;