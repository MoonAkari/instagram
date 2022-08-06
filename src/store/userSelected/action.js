import * as TYPE from './types';
import { createAction } from '@reduxjs/toolkit';

export const getUserSelected = createAction(TYPE.GET_USER_SELECTED);
