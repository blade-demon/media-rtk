import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // await pause(1000);
  return response.data;
});

// fetchUsers.pending === "users/fetch/pending";
// fetchUsers.fulfilled === "users/fetch/fulfilled";
// fetchUsers.rejected === "users/fetch/rejected";

// DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
