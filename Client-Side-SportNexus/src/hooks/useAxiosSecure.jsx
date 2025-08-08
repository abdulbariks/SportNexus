import axios from "axios";
import React, { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const axiosSecure = axios.create({
  baseURL: `https://b11a11-server-side-coral.vercel.app`,
});

const useAxiosSecure = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  console.log(user?.accessToken);
  if (!user) return;

  axiosSecure.interceptors.request.use(
    async (config) => {
      const token = await user?.accessToken;
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      const status = error.response?.status;
      if (status === 403) {
        navigate("/forbidden");
      } else if (status === 401) {
        logOut()
          .then(() => {
            navigate("/login");
          })
          .catch(() => {});
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
