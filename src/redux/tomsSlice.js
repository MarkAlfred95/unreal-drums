import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tomHighVolume: 0.75,
    tomHighPanning: -0.25,
    tomMidVolume: 0.75,
    tomMidPanning: 0,
    tomLowVolume: 0.75,
    tomLowPanning: 0.25,
    floorVolume: 0.75,
    floorPanning: 0.5,
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
        updateTomMidVolume: (state, action) => {
            state.tomMidVolume = action.payload;
        },
        updateTomMidPanning: (state, action) => {
            state.tomMidPanning = action.payload;
        },
        updateTomLowVolume: (state, action) => {
            state.tomLowVolume = action.payload;
        },
        updateTomLowPanning: (state, action) => {
            state.tomLowPanning = action.payload;
        },
        updateFloorVolume: (state, action) => {
            state.floorVolume = action.payload;
        },
        updateFloorPanning: (state, action) => {
            state.floorPanning = action.payload;
        },
    },
});

export const { 
    updateTomHighVolume, updateTomHighPanning, 
    updateTomMidVolume, updateTomMidPanning,
    updateTomLowVolume, updateTomLowPanning,
    updateFloorVolume, updateFloorPanning,
} = tomsSlice.actions;

export default tomsSlice.reducer;