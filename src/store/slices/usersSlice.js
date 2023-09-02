import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(bulider) {
    // fetch user
    bulider.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    bulider.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    bulider.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // add user
    bulider.addCase(addUser.pending, (state) => {
      state.isLoading = true;
    });
    bulider.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    bulider.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // remove user
    bulider.addCase(removeUser.pending, (state) => {
      state.isLoading = true;
    });
    bulider.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;

      console.log(action);
      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    bulider.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
