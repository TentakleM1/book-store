import axios from "axios";
import { axiosDefault } from "../axiosDefault";

axiosDefault.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosDefault.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err.response) {
      if (err.response.status === 401 && !originalRequest._retry) {
        debugger
        originalRequest._retry = true;
        
        const tokens = await refreshToken();
        console.log(tokens)
        if (!tokens) {
          return Promise.reject(err);
        }
        localStorage.setItem("token", tokens.data.payload.tokens.token);
        localStorage.setItem(
          "refresh_token",
          tokens.data.payload.tokens.refresh_token
        );
        axiosDefault.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${tokens.data.payload.tokens.token}`;
        return axiosDefault(originalRequest);
      }
    }
    return Promise.reject(err);
  }
);

const refreshToken = async () => {
  try {
    const res = await axios.get("http://localhost:3000/auth/refresh", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
      },
    });
    return res;
  } catch (error) {
    console.error('Token refresh failed:', error);
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  }
};

export const getUser = async () => {
  try {
    const res = await axiosDefault.get(`/user`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error", error);
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
