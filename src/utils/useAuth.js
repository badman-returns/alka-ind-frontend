import React, { useContext, createContext} from "react";
import { useNavigate } from "react-router";
import {BaseLoginService, BaseLogoutService} from "../services/base.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      let response = await BaseLoginService(email, password);
      if (response.status === 200) {
        const token = response.headers['authorization'];
        const user = response.data;
        if (token && user) {
          window.localStorage.setItem('token', token);
          window.localStorage.setItem('user', JSON.stringify(user));
          navigate('/admin/dashboard')
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  const logout = () => {
    BaseLogoutService().then(() => {
      console.log('Logout');
      navigate('/admin/login');
    }).catch((error) => {
      console.log(error);
    })
  }

  const loggedInStatus = () => {
    const token = localStorage.getItem('token');
    if(token && token !== null){
      return true;
    }
  }

  const value = { login, logout, loggedInStatus };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
}
