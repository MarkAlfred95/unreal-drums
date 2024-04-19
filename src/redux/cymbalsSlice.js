import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    crashLongVolume: 0.6,
    crashLongPanning: -0.4,
    crashShortVolume: 0.65,
    crashShortPanning: 0.25,
    splashVolume: 0.6,
    splashPanning: -0.25,
    rideVolume: 0.55,
    ridePanning: 0.4,
};

const cymbalsSlice = createSlice({
    name: 'cymbals',
    initialState,
    reducers: {
        updateCrashLongVolume: (state, action) => {
            state.crashLongVolume = action.payload;
        },
        updateCrashLongPanning: (state, action) => {
            state.crashLongPanning = action.payload;
        },
        updateCrashShortVolume: (state, action) => {
            state.crashShortVolume = action.payload;
        },
        updateCrashShortPanning: (state, action) => {
            state.crashShortPanning = action.payload;
        },
        updateSplashVolume: (state, action) => {
            state.splashVolume = action.payload;
        },
        updateSplashPanning: (state, action) => {
            state.splashPanning = action.payload;
        },
        updateRideVolume: (state, action) => {
            state.rideVolume = action.payload;
        },
        updateRidePanning: (state, action) => {
            state.ridePanning = action.payload;
        },
    },
});

export const { 
    updateCrashLongVolume, updateCrashLongPanning, 
    updateCrashShortVolume, updateCrashShortPanning,
    updateSplashVolume, updateSplashPanning,
    updateRideVolume, updateRidePanning,
} = cymbalsSlice.actions;

export default cymbalsSlice.reducer;