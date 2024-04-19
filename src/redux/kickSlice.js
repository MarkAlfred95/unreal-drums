import { createSlice } from '@reduxjs/toolkit';
import kick from "../assets/drums_audio/Kick_Rock.ogg";

const initialState = {
    kickAudio: kick,
    kickVolume: 1,
    kickPanning: 0,
    kickIsMuted: false,
};

const kickSlice = createSlice({
    name: 'kick',
    initialState,
    reducers: {
        updateKickAudio: (state, action) => {
            state.kickAudio = action.payload;
        },
        updateKickVolume: (state, action) => {
            state.kickVolume = action.payload;
        },
        updateKickPanning: (state, action) => {
            state.kickPanning = action.payload;
        },
        updateKickIsMuted: (state, action) => {
            state.kickIsMuted = action.payload;
        },
    },
});

export const { updateKickVolume, updateKickPanning, updateKickAudio, updateKickIsMuted } = kickSlice.actions;
export default kickSlice.reducer;