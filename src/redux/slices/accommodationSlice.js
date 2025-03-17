import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all listings
export const fetchListings = createAsyncThunk("accommodation/fetchListings", async () => {
  const response = await axios.get("http://localhost:5000/api/accommodations");
  return response.data;
});

// Fetch single accommodation by ID
export const fetchAccommodationById = createAsyncThunk(
  "accommodation/fetchById",
  async (id) => {
    const response = await axios.get(`http://localhost:5000/api/accommodations/${id}`);
    return response.data;
  }
);

const accommodationSlice = createSlice({
  name: "accommodation",
  initialState: { 
    listings: [], 
    selectedListing: null,
    loading: false, 
    error: null 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => { state.loading = true; })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.loading = false;
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => { 
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch single accommodation
      .addCase(fetchAccommodationById.pending, (state) => { state.loading = true; })
      .addCase(fetchAccommodationById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedListing = action.payload;
      })
      .addCase(fetchAccommodationById.rejected, (state, action) => { 
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default accommodationSlice.reducer;
