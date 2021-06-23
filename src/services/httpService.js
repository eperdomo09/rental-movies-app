import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (onReject) => {
  const expectedError =
    onReject.response &&
    onReject.response.status >= 400 &&
    onReject.response.status < 500;

  if (!expectedError) {
    logger.log(onReject);
    toast.error("An unexpected error occurred");
  }

  return Promise.reject(onReject);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
