import { createSlice } from '@reduxjs/toolkit';
import { getUsers, addUser, deleteUser, updateUser } from './operations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, handlePending)
      .addCase(getUsers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsers.rejected, handleRejected)

      .addCase(addUser.pending, handlePending)
      .addCase(addUser.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addUser.rejected, handleRejected)

      .addCase(deleteUser.pending, handlePending)
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );

        state.items.splice(index, 1);
      })
      .addCase(deleteUser.rejected, handleRejected)

      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedUser = state.items.find(
          contact => contact.id === action.payload.id
        );
        updatedUser.name = action.payload.name;
        updatedUser.number = action.payload.number;
        updatedUser.email = action.payload.number;
      })
      .addCase(updateUser.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
