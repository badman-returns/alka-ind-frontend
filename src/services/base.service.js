import axios from "axios";
import { dispatchLoader } from "../store/slices/loader";
import {store} from '../index';

const getAuthorizationClient = axios.create(
  {
    headers: {
      Authorization: `bearer ${localStorage.getItem('token')}`
    },
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  });

  getAuthorizationClient.interceptors.request.use((request) => {
    store.dispatch(dispatchLoader(true));
    return request;
  }, (error) => {
    return Promise.reject(error);
  });

  getAuthorizationClient.interceptors.response.use((response) => {
    if(response.status=== 200){
      store.dispatch(dispatchLoader(false));
    }
    return response;
  }, (error) => {
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
    if (localStorage.getItem('token') != null) {
      localStorage.clear();
      return resolve(true);
    }
    return reject(true);
  })
}

const BaseLoginService = login;
const BaseLogoutService = logout;
const GetAuthorizationClient = getAuthorizationClient;

export {
  BaseLoginService,
  BaseLogoutService,
  GetAuthorizationClient,
};
