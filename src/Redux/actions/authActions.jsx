import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.post(" login-api-call", {
        email,
        password,
      });

      const data = response.data;
      console.log(data)
      // Store token or user data in localStorage
      localStorage.setItem("user", JSON.stringify(data));

      navigate("/home"); // Redirect after login
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);


// Register User
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ firstName, lastName, contact, email, password, userType, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://your-api-url.com/register", {
        firstName,
        lastName,
        contact,
        email,
        password,
        userType,
      });

      const data = response.data;

      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify(data));

      navigate("/home"); // Redirect after registration
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);
