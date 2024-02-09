import { httpClient } from "../utils/http.js";

export const getPost = async (id = "") => {
  const get = await httpClient(`test/${id}`);
  return get;
};

export const addPost = async (data) => {
  const add = await httpClient(`posts`, "POST", data);
  return add;
};
