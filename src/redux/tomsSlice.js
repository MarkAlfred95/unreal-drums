import { createSlice } from '@reduxjs/toolkit';
import tom_low from "../assets/drums_audio/Tom_Low_Rock.ogg";
import tom_mid from "../assets/drums_audio/Tom_Mid_Rock.ogg";
import tom_high from "../assets/drums_audio/Tom_High_Rock.ogg";
import floor from "../assets/drums_audio/Floor_Rock.ogg";

const initialState = {
    tomHighVolume: 0.75,
    tomHighPanning: -0.25,
    tomHighAudio: tom_high,
    tomHighIsMuted: false,
    tomMidVolume: 0.75,
    tomMidPanning: 0,
    tomMidAudio: tom_mid,
    tomMidIsMuted: false,
    tomLowVolume: 0.75,
    tomLowPanning: 0.25,
    tomLowAudio: tom_low,
    tomLowIsMuted: false,
    floorVolume: 0.75,
    floorPanning: 0.5,
    floorAudio: floor,
    floorIsMuted: false,
};

const tomsSlice = createSlice({
    name: 'toms',
    initialState,
    reducers: {
        updateTomHighVolume: (state, action) => {
            state.tomHighVolume = action.payload;
        },
        updateTomHighPanning: (state, action) => {
            state.tomHighPanning = action.payload;
        },
        updateTomHighAudio: (state, action) => {
            state.tomHighAudio = action.payload;
        },
        updateTomHighIsMuted: (state, action) => {
            state.tomHighIsMuted = action.payload;
        },

        updateTomMidVolume: (state, action) => {
            state.tomMidVolume = action.payload;
        },
        updateTomMidPanning: (state, action) => {
            state.tomMidPanning = action.payload;
        },
        updateTomMidAudio: (state, action) => {
            state.tomMidAudio = action.payload;
        },
        updateTomMidIsMuted: (state, action) => {
            state.tomMidIsMuted = action.payload;
        },

        updateTomLowVolume: (state, action) => {
            state.tomLowVolume = action.payload;
        },
        updateTomLowPanning: (state, action) => {
            state.tomLowPanning = action.payload;
        },
        updateTomLowAudio: (state, action) => {
            state.tomLowAudio = action.payload;
        },
        updateTomLowIsMuted: (state, action) => {
            state.tomLowIsMuted = action.payload;
        },

        updateFloorVolume: (state, action) => {
            state.floorVolume = action.payload;
        },
        updateFloorPanning: (state, action) => {
            state.floorPanning = action.payload;
        },
        updateFloorAudio: (state, action) => {
            state.floorAudio = action.payload;
        },
        updateFloorIsMuted: (state, action) => {
            state.floorIsMuted = action.payload;
        },
    },
});

export const { 
    updateTomHighVolume, updateTomHighPanning, 
    updateTomMidVolume, updateTomMidPanning,
    updateTomLowVolume, updateTomLowPanning,
    updateFloorVolume, updateFloorPanning,
    updateTomHighAudio, updateTomHighIsMuted,
    updateTomMidAudio, updateTomMidIsMuted,
    updateTomLowAudio, updateTomLowIsMuted,
    updateFloorAudio, updateFloorIsMuted,
} = tomsSlice.actions;

export default tomsSlice.reducer;