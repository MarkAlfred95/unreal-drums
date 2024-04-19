import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    snareVolume: 1,
    snarePanning: 0,
};

const snareSlice = createSlice({
    name: 'snare',
    initialState,
    reducers: {
        updateSnareVolume: (state, action) => {
            state.snareVolume = action.payload;
        },
        updateSnarePanning: (state, action) => {
            state.snarePanning = action.payload;
        },
    },
});

export const { updateSnareVolume, updateSnarePanning } = snareSlice.actions;
export default snareSlice.reducer;