import * as TYPE from './types';
import { createAction } from '@reduxjs/toolkit';

export const getUserByPathname = createAction(TYPE.GET_USER_BY_NAME);
export const getUserList = createAction(TYPE.GET_USER_LIST);
export const setFollowStatus = createAction(TYPE.TRIGGER_FOLLOW_USER);
