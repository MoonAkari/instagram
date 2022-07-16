import { handleResponse, handleError } from './apiUtils';
import axios from 'axios';

const rootURL = `https://tiktok.fullstack.edu.vn/api`;

const apiAction = (api) =>
  axios({
    method: api.method,
    url: rootURL + api.endpoint,
    data: api.data,
    params: api.params,
  })
    .then(handleResponse)
    .catch(handleError);
export default apiAction;
