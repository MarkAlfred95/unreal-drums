import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hihatsOpenVolume: 0.5,
    hihatsOpenPanning: -0.5,
    hihatsCloseVolume: 0.7,
    hihatsClosePanning: -0.5,
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
        updateHihatsCloseVolume: (state, action) => {
            state.hihatsCloseVolume = action.payload;
        },
        updateHihatsClosePanning: (state, action) => {
            state.hihatsClosePanning = action.payload;
        },
    },
});

export const { 
    updateHihatsOpenVolume, updateHihatsOpenPanning, 
    updateHihatsCloseVolume, updateHihatsClosePanning 
} = hihatsSlice.actions;
export default hihatsSlice.reducer;