import { createAsyncThunk } from '@reduxjs/toolkit';
import { tokenApi, usersApi } from '../../service/api';

export const getUsersThunk = createAsyncThunk(
  'getUsersThunk',
  async (page: number, { rejectWithValue }) => {
    try {
      return await usersApi.getUsers(page);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const postUserThunk = createAsyncThunk(
  'postUserThunk',
  async (data: FormData, { dispatch, rejectWithValue }) => {
    try {
      const { token } = await tokenApi.getToken();

      const response = await usersApi.postUser(token, data);

      await dispatch(getUsersThunk(1));

      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
