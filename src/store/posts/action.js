import * as TYPE from './types';
import { createAction } from '@reduxjs/toolkit';

export const getPost = createAction(TYPE.GET_POST);
export const createPost = createAction(TYPE.CREATE_POST);
export const editPost = createAction(TYPE.EDIT_POST);
export const deletePost = createAction(TYPE.DELETE_POST);

export const setLikeStatus = createAction(TYPE.SET_LIKE);
export const setLikeCommentStatus = createAction(TYPE.SET_LIKE_COMMENT);
export const setBookmarkStatus = createAction(TYPE.SET_BOOKMARK);
export const addComment = createAction(TYPE.ADD_A_COMMENT);
