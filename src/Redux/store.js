import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Import auth slice
import userReducer from "./slices/userSlice"; // Import user slice
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage

// Persist Config
const persistConfig = {
  key: "root", // Key for localStorage
  storage, // Define storage type
};

// Wrap auth reducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Configure store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use persisted reducer
    users: userReducer, // User Reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create Persistor
export const persistor = persistStore(store);
export default store;
