import apiAction from '../utils/api/axiosAction';

export const getSearch = async (q, type = 'less') => {
  try {
    const apiData = {
      method: 'get',
      endpoint: '/users/search',
      data: {},
      params: {
        q,
        type,
      },
    };
    const res = await apiAction(apiData);
    const userArrayObject = [...res.data];
    return userArrayObject;
  } catch (error) {
    console.log(error);
  }
};

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
