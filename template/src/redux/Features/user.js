import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userLogin } from '../../services/api/User/User';

const initialState = {
  token: localStorage.getItem('token'),
};


export const loginAsync = createAsyncThunk(
  'user/login',
  async (payload) => {
    const response = await userLogin(payload);
    // Replace sessionStorage with localStorage if you want to remember user 
    sessionStorage.setItem('token', response.token )
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = 'idle';
        state.loading = true
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.token = action.payload.token;
      });
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
