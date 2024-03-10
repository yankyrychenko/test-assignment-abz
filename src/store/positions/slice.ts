import { createSlice } from '@reduxjs/toolkit';
import { getPositionsThunk } from './thunks';
import { POSITIONS_NAME } from './constants';
import { IPositionsState } from './types';

const initialState: IPositionsState = {
  items: [],
};

export const positionsSlice = createSlice({
  name: POSITIONS_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPositionsThunk.fulfilled, (state, action) => ({
      ...state,
      items: action.payload,
    }));
  },
});
