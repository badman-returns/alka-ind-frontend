import axios from "axios";
import { dispatchLoader } from "../store/slices/loader";
import {store} from '../index';

const token = sessionStorage.getItem('token');

const axiosInstance = axios.create(
  {
    headers: {
      Authorization: `bearer ${token}`
    },
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  });

  axiosInstance.interceptors.request.use((request) => {
    store.dispatch(dispatchLoader(true));
    return request;
  }, (error) => {
    return Promise.reject(error);
  });

  axiosInstance.interceptors.response.use((response) => {
    if(response.status=== 200){
      store.dispatch(dispatchLoader(false));
    }
    return response;
  }, (error) => {
    store.dispatch(dispatchLoader(false));
    return Promise.reject(error);
  });


const login = (email, password) => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/authentication`, {
      auth: {
        username: email,
        password: password,
      },
    })
    .then((response) => {
      return response;
    });
};

const logout = () => {
  return new Promise((resolve, reject) => {
    if (sessionStorage.getItem('token') != null) {
      sessionStorage.clear();
      return resolve(true);
    }
    return reject(true);
  })
}

const BaseLoginService = login;
const BaseLogoutService = logout;
const AxiosInstance = axiosInstance;

export {
  BaseLoginService,
  BaseLogoutService,
  AxiosInstance,
};
