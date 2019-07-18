import jwtDecode from "jwt-decode";
import http from "./httpService";

export const isVerifiedUser = () => {
  const token = localStorage.getItem("token");
  try {
    jwtDecode(token);
    return true;
  } catch (ex) {
    return false;
  }
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  try {
    const user = jwtDecode(token);
    return user;
  } catch (ex) {
    return null;
  }
};

export const login = async (email, password) => {
  const data = {
    email,
    password
  };
  const {
    data: { token }
  } = await http.post(process.env.REACT_APP_LOGIN_API, data);
  localStorage.setItem("token", token);
};

export const register = async data => {
  const postUserData = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password
  };
  await http.post(process.env.REACT_APP_REGISTER_API, postUserData);
};

export default {
  isVerifiedUser,
  getCurrentUser,
  login,
  register
};
