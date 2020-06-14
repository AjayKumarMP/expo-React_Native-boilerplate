import axios from "axios";

const httpClient = axios.create({
  baseURL: "",
  headers: [""],
});

httpClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const GET = (url, params = {}, headers = {}) => {
  return httpClient.get(url, {
    params,
    headers,
  });
};

export const POST = (url, requestBody, headers = {}) => {
  return httpClient.post(url, requestBody, {
    headers,
  });
};

export const DELET = (url, params = {}, headers = {}) => {
  return httpClient.delete(url, {
    headers,
    params,
  });
};

export const POST = (url, requestBody, headers = {}) => {
  return httpClient.post(url, requestBody, {
    headers,
  });
};

export const setDefaultHeaders = (headerName, headerValue) => {
  httpClient.defaults.headers.common[headerName] = headerValue;
};

export const removeDefaultHeaders = (headerName) => {
  httpClient.defaults.headers.common[headerName] = "";
};
