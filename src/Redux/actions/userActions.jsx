// src/Redux/actions/userActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch all registered users
export const fetchRegisteredUsers = createAsyncThunk(
  "users/fetchRegisteredUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users"); // Change URL as per your API
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch registered users"
      );
    }
  }
);
