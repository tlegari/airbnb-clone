import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListings = createAsyncThunk("accommodation/fetchListings", async () => {
  const response = await axios.get("http://localhost:5000/api/accommodations");
  return response.data;
});

const accommodationSlice = createSlice({
  name: "accommodation",
  initialState: { listings: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => { state.loading = true; })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.loading = false;
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state) => { state.loading = false; });
  },
});

export default accommodationSlice.reducer;
