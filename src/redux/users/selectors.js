import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from '../filter/selectors';

export const selectUsers = state => state.users.items;

export const selectPerson = state => state.users.person;

export const selectIsLoading = state => state.users.isLoading;

export const selectError = state => state.users.error;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectFilterValue],
  (users, filterValue) => {
    const normalyzeFilter = filterValue.toLowerCase();

    const visibleUsers = users.filter(
      user =>
        user.name.toLowerCase().includes(normalyzeFilter) ||
        user.username.toLowerCase().includes(normalyzeFilter)
    );

    return visibleUsers;
  }
);
