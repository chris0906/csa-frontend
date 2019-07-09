import axios from "axios";

axios.interceptors.response.use(null, error => {
  // error.request //if submit to server succcessfuly request will be set, otherwise will be null
  // error.response //if there is no response from server, response will be null
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    //unexpected error
    console.log("Logging the error", error);
    console.log("unexpected error occurred");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put
};
