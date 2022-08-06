import * as TYPE from './types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

const userSelected = createReducer(initialState, (builder) => {
  builder
    .addCase(TYPE.GET_USER_SELECTED, (state, action) => {
      state.user = { ...action.payload };
    })
    .addDefaultCase((state, action) => {});
});

export default userSelected;
