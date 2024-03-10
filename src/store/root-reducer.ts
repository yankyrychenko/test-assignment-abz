import { combineReducers } from '@reduxjs/toolkit';
import { usersSlice } from './users';
import { positionsSlice } from './positions';

export const rootReducer = combineReducers({
  users: usersSlice.reducer,
  positions: positionsSlice.reducer,
});
