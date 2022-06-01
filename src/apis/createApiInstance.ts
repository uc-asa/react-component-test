import axios from "axios";
import Cookies from "js-cookie";
// import { getAccessToken, logout } from "../utils/auth";
// import { errorToast } from "../utils/toast";
// import { API_STATUS } from "../constants/common";

/**
 * @typedef {{
 *  type: string;
 *  code: string;
 *  status: number;
 *  message: string;
 *  details: any;
 * }} ApiException
 */

const defaultTimeout = 40000;

// const handleRequest = (config: any) => {
//   return {
//     ...config,
//     headers: {
//       ...config.headers,
//     },
//   };
// };

/**
 *
 * @param {ApiInterceptorToast} toast
 * @param {import('react-router-dom').RouterProps['history']} history
 * @returns {(err: import('axios').AxiosError<any>) => void}
 */
// eslint-disable-next-line no-unused-vars
// const handleErrorResponse = async (error) => {
//   const { config, response } = error;
//   if (noAuthCheckUrls.indexOf(config?.url) > -1 || isNoAuth(config?.url)) {
//     const { status = "", error, meta } = response?.data || {};
//     if (status === API_STATUS.ERROR) {
//       if (meta?.errorMessage) {
//         errorToast(meta?.errorMessage);
//       } else {
//         errorToast(error?.detail);
//       }
//     }
//   } else {
//     if (response.status == 401) {
//       logout();
//     }
//     errorToast(error?.detail);
//     return;
//   }
//   throw error;
// };

/**
 * @param {string} baseURL
 * @param {string} [name]
 */
const createApiInstance = (baseURL: string, name = "") => {
  const api = axios.create({ baseURL, timeout: defaultTimeout });

  if (!baseURL) {
    throw new Error(
      `${name} baseURL not set during built. Please, set baseURL`
    );
  }

  // api.interceptors.request.use(handleRequest);

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // handleErrorResponse(error);
    }
  );

  return {
    /**
     *
     * @param {ApiInterceptorToast} toast
     * @param {import('react-router-dom').RouterProps['history']} history
     */
    // initializeInterceptors: (toast, history) => {
    //   if (!privateToast) {
    //     api.interceptors.request.use(handleRequest);
    //     api.interceptors.response.use(null, handleErrorResponse(toast, history));
    //     privateToast = toast;
    //   }
    // },
    instance: api,
  };
};

export default createApiInstance;
