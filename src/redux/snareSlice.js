import { createSlice } from '@reduxjs/toolkit';
import snare from "../assets/drums_audio/Snare_Rock.ogg";

const initialState = {
    snareAudio: snare,
    snareVolume: 1,
    snarePanning: 0,
    snareIsMuted: false,
};

const snareSlice = createSlice({
    name: 'snare',
    initialState,
    reducers: {
        updateSnareAudio: (state, action) => {
            state.snareAudio = action.payload;
        },
        updateSnareVolume: (state, action) => {
            state.snareVolume = action.payload;
        },
        updateSnarePanning: (state, action) => {
            state.snarePanning = action.payload;
        },
        updateSnareIsMuted: (state, action) => {
            state.snareIsMuted = action.payload;
        },
    },
});

export const { updateSnareAudio, updateSnareVolume, updateSnarePanning, updateSnareIsMuted } = snareSlice.actions;
export default snareSlice.reducer;