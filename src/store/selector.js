import { createSelector } from '@reduxjs/toolkit';

//authenticated
export const selectLoginStatus = (state) => state.auth.authenticated;
export const selectCurrentUser = (state) => state.auth;

//Posts
export const selectPosts = (state) => state.posts;

//UsersApi
export const selectUsersFromApi = (state) => state.usersApi;

export const postsInfo = createSelector(selectPosts, (posts) => {
  return posts;
});
