import * as TYPE from './types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: '',
  authenticated: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TYPE.LOGIN_SUCCESS, (state, action) => {
      state.user = 'guess';
      state.authenticated = action.payload;
    })
    .addCase(TYPE.LOGOUT_SUCCESS, (state, action) => {
      state.user = '';
      state.authenticated = action.payload;
      localStorage.removeItem('persist:root');
    })
    .addDefaultCase((state, action) => {});
});

export default authReducer;
