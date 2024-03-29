import * as TYPE from './types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  name: '',
  avatar: '',
  authenticated: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TYPE.LOGIN_SUCCESS, (state, action) => {
      state.id = 1000;
      state.name = 'monmotion';
      state.avatar = 'https://i.pinimg.com/originals/04/7d/fc/047dfc2552d91ae45f5c5362e71f4e43.gif';
      state.authenticated = action.payload;
    })
    .addCase(TYPE.LOGOUT_SUCCESS, (state, action) => {
      state.name = '';
      state.avatar = '';
      state.authenticated = action.payload;
      localStorage.removeItem('persist:root');
    })
    .addDefaultCase((state, action) => {});
});

export default authReducer;
