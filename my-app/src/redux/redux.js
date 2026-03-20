import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import user reducer

export const store = configureStore({
    reducer: {
        user: userReducer,  // Attach user slice
    },
});

export default store;
