import { httpClient } from '../utils/http.js';

export const getUser = async (id = '') => {
  const get = await httpClient(`users/${id}`);
  return get;
};
