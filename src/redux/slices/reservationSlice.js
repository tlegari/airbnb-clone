import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reservations: [], //store user reservations
}

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setReservation: (state, action) => {
            state.reservations = action.payload; //update reservation list
        },
        addReservation: (state, action) => {
            state.reservations.push(action.payload);
        },
        cancelReservation: (state, action) => {
            state.reservations = state.reservations.filter((res) => res._id !== action.payload);
        },
    },
});

export const { setReservation, addReservation, cancelReservation} = reservationSlice.actions;
export default reservationSlice.reducer;