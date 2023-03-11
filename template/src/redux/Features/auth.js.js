import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { userLogin } from '../../services/api/User/User';

const initialState = localStorage.getItem('token')


export const loginAsync = createAsyncThunk(
  'auth/login',
  async (payload) => {
    const response = await userLogin(payload);
    // Replace sessionStorage with localStorage if you want to remember user 
    sessionStorage.setItem('token', response.token )
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
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

export default authSlice.reducer;
