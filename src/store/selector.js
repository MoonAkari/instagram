import { createSelector } from '@reduxjs/toolkit';

//Authenticated
export const selectLoginStatus = (state) => state.auth.authenticated;
export const selectCurrentUser = (state) => state.auth;

//Users
export const selectUserByPathname = (state) => state.users.user;

//Posts
export const selectPosts = (state) => state.posts;

//UsersApi
export const selectUsersFromApi = (state) => state.usersApi;

//UserSelected
export const selectUserSelected = (state) => state.userSelect.user;

export const postsInfo = createSelector(selectPosts, (posts) => {
  return posts;
});
