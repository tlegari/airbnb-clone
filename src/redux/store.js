import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import accommodationReducer from "./slices/accommodationSlice";
import reservationReducer from "./slices/reservationSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        accommodation: accommodationReducer,
        reservation: reservationReducer,
    },
});