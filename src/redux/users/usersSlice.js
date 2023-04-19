import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase();
  },
});

export const usersReducer = usersSlice.reducer;
