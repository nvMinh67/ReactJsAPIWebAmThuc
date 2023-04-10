import axios from 'axios';
import queryString from 'query-string'

import { parse, stringify } from 'qs'

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  mode: "cors",
  baseURL: 'https://localhost:7276/api',
  headers: {
    Accept: "application/json",
},
//   paramsSerializer: params => queryString.stringify(params),
paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
});
axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  // Handle errors
  throw error;
});

export default axiosClient;