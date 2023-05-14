import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import counterSlice from "./counterSlice";


const store = configureStore({
    reducer:{
        app:appSlice,
        counter:counterSlice
    },
});

export default store;