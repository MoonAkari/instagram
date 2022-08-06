import { handleResponse, handleError } from './apiUtils';
import axios from 'axios';

const rootURL = `${process.env.REACT_APP_BASE_URL}`;

const apiAction = (api) =>
  axios({
    method: api.method,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
    },
    credentials: false,
    url: rootURL + api.endpoint,
    data: api.data,
    params: api.params,
  })
    .then(handleResponse)
    .catch(handleError);
export default apiAction;
