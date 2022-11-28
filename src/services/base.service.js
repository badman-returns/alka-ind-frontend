import axios from "axios";

class BaseService {

  getAuthorizationClient = () => axios.create(
    {
      headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`
      },
      baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    });

  login = (email, password) => {
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

  logout = () => {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('token') != null) {
        localStorage.clear();
        return resolve(true);
      }
      return reject(true);
    })
  }
}

export default new BaseService();