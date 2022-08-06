import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import apiAction from '../../utils/api/axiosAction';
import * as TYPE from './types';

export const fetchUsersBySearch = createAsyncThunk(TYPE.GET_USER_FROM_API, async (q) => {
  try {
    const apiData = {
      method: 'get',
      endpoint: '/users/search',
      data: {},
      params: {
        q,
        type: 'more',
      },
    };
    const res = await apiAction(apiData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const setEmptySearchTerm = createAction(TYPE.EMPTY_SEARCH_TERM);
