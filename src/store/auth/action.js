import * as TYPE from './types';
import { createAction } from '@reduxjs/toolkit';

export const setLoginSuccess = createAction(TYPE.LOGIN_SUCCESS);
