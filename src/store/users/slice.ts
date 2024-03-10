import { createSlice } from '@reduxjs/toolkit';
import { USERS_NAME } from './constants';
import { getUsersThunk, postUserThunk } from './thunks';
import { IUsersState } from './types';

const initialState: IUsersState = {
  items: [],
  isLoading: false,
  currentPage: 1,
  isLastPage: false,
  isSuccessfullyRegistered: false,
};

export const usersSlice = createSlice({
  name: USERS_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getUsersThunk.fulfilled, (state, action) => ({
        ...state,
        items:
          action.payload.page === 1
            ? action.payload.users
            : [...state.items, ...action.payload.users],
        isLoading: false,
        currentPage: action.payload.page,
        isLastPage: !(action.payload.total_pages > action.payload.page),
      }))
      .addCase(getUsersThunk.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(postUserThunk.fulfilled, (state, action) => ({
        ...state,
        isSuccessfullyRegistered: action.payload.success,
      }));
  },
});
