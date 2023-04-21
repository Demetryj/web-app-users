import { createSlice } from '@reduxjs/toolkit';
import {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
} from './operations';

const initialState = {
  items: [],
  person: {
    id: '',
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  },
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

      .addCase(getUserById.pending, handlePending)
      .addCase(getUserById.fulfilled, (state, action) => {
        state.person = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserById.rejected, handleRejected)

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

        const index = state.items.findIndex(user => user.id === action.payload);
        console.log(action.payload);
        state.items.splice(index, 1);

        state.person = {
          id: '',
          name: '',
          username: '',
          email: '',
          address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
              lat: '',
              lng: '',
            },
          },
          phone: '',
          website: '',
          company: {
            name: '',
            catchPhrase: '',
            bs: '',
          },
        };
      })
      .addCase(deleteUser.rejected, handleRejected)

      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          user => user.id === action.payload.id
        );

        state.items[index] = { ...action.payload };

        state.person = action.payload;
      })
      .addCase(updateUser.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
