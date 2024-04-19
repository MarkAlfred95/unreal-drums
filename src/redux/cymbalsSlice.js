import { createSlice } from '@reduxjs/toolkit';
import crash_long from "../assets/drums_audio/Crash_Long_Rock.ogg";
import crash_short from "../assets/drums_audio/Crash_Short_Rock.ogg";
import splash from "../assets/drums_audio/Splash_Rock.ogg";
import ride from "../assets/drums_audio/Ride_Rock.ogg";

const initialState = {
    crashLongVolume: 0.6,
    crashLongPanning: -0.4,
    crashLongAudio: crash_long,
    crashLongIsMuted: false,
    crashShortVolume: 0.65,
    crashShortPanning: 0.25,
    crashShortAudio: crash_short,
    crashShortIsMuted: false,
    splashVolume: 0.6,
    splashPanning: -0.25,
    splashAudio: splash,
    splashIsMuted: false,
    rideVolume: 0.55,
    ridePanning: 0.4,
    rideAudio: ride,
    rideIsMuted: false,
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
        updateCrashLongAudio: (state, action) => {
            state.crashLongAudio = action.payload;
        },
        updateCrashLongIsMuted: (state, action) => {
            state.crashLongIsMuted = action.payload;
        },

        updateCrashShortVolume: (state, action) => {
            state.crashShortVolume = action.payload;
        },
        updateCrashShortPanning: (state, action) => {
            state.crashShortPanning = action.payload;
        },
        updateCrashShortAudio: (state, action) => {
            state.crashShortAudio = action.payload;
        },
        updateCrashShortIsMuted: (state, action) => {
            state.crashShortIsMuted = action.payload;
        },

        updateSplashVolume: (state, action) => {
            state.splashVolume = action.payload;
        },
        updateSplashPanning: (state, action) => {
            state.splashPanning = action.payload;
        },
        updateSplashAudio: (state, action) => {
            state.splashAudio = action.payload;
        },
        updateSplashIsMuted: (state, action) => {
            state.splashIsMuted = action.payload;
        },

        updateRideVolume: (state, action) => {
            state.rideVolume = action.payload;
        },
        updateRidePanning: (state, action) => {
            state.ridePanning = action.payload;
        },
        updateRideAudio: (state, action) => {
            state.rideAudio = action.payload;
        },
        updateRideIsMuted: (state, action) => {
            state.rideIsMuted = action.payload;
        },
    },
});

export const { 
    updateCrashLongVolume, updateCrashLongPanning, updateCrashLongAudio, updateCrashLongIsMuted,
    updateCrashShortVolume, updateCrashShortPanning, updateCrashShortAudio, updateCrashShortIsMuted,
    updateSplashVolume, updateSplashPanning, updateSplashAudio, updateSplashIsMuted,
    updateRideVolume, updateRidePanning, updateRideAudio, updateRideIsMuted,
} = cymbalsSlice.actions;

export default cymbalsSlice.reducer;