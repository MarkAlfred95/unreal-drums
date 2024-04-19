import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    kickVolume: 1,
    kickPanning: 0,
};

const kickSlice = createSlice({
    name: 'kick',
    initialState,
    reducers: {
        updateKickVolume: (state, action) => {
            state.kickVolume = action.payload;
        },
        updateKickPanning: (state, action) => {
            state.kickPanning = action.payload;
        },
    },
});

export const { updateKickVolume, updateKickPanning } = kickSlice.actions;
export default kickSlice.reducer;