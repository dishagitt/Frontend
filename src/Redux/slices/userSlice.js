// src/Redux/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchRegisteredUsers } from "../actions/userActions";

const initialState = {
  registeredUsers: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisteredUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRegisteredUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.registeredUsers = action.payload;
      })
      .addCase(fetchRegisteredUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
