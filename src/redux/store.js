import { configureStore } from '@reduxjs/toolkit';
import kickReducer from './kickSlice';
import snareReducer from "./snareSlice";
import hihatsReducer from "./hihatsSlice";
import tomsReducer from "./tomsSlice";
import cymbalsReducer from "./cymbalsSlice";

const store = configureStore({
    reducer: {
        kick: kickReducer,
        snare: snareReducer,
        hihats: hihatsReducer, 
        toms: tomsReducer,
        cymbals: cymbalsReducer,
    },
});

export default store;