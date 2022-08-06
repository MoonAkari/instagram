import { createReducer } from '@reduxjs/toolkit';
import { fetchUsersBySearch } from './action';
import * as TYPE from './types';

const initialState = {
  listUsers: [],
  loading: false,
  error: null,
};

const usersReducerFromApi = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsersBySearch.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchUsersBySearch.fulfilled, (state, action) => {
      state.loading = false;
      state.listUsers = action.payload;
    })
    .addCase(TYPE.EMPTY_SEARCH_TERM, (state, action) => {
      state.listUsers = [];
    });
});

export default usersReducerFromApi;
