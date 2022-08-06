import * as TYPE from './types';
import { createAction } from '@reduxjs/toolkit';
import { getSearch } from '../../services/apiServices';

export const getSuggBar = async () => {
  try {
    const apiData = {
      method: 'get',
      endpoint: '/users/search',
      data: {},
      params: {
        q: 'n',
        type: 'less',
      },
    };
    const res = await apiAction(apiData);
    const userArrayObject = [...res.data];
    return userArrayObject;
  } catch (error) {
    console.log(error);
  }
};
