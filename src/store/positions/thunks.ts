import { createAsyncThunk } from '@reduxjs/toolkit';
import { positionsApi } from 'src/service/api';

export const getPositionsThunk = createAsyncThunk(
  'getPositionsThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await positionsApi.getPositions();

      return response.positions;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
