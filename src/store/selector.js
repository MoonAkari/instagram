import { createSelector } from '@reduxjs/toolkit';

export const selectLoginStatus = (state) => state.auth.authenticated;

export const render = createSelector(selectLoginStatus, (authenticated) => {
  return authenticated;
});
