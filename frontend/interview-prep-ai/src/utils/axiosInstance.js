import axios from "axios";
import { BASE_URL } from "../config/config";
console.log(BASE_URL);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // ✅ allow cookies to be sent/received
});

// ✅ You can remove the request interceptor that adds Authorization header
// because cookies will be automatically attached by the browser
axiosInstance.interceptors.request.use(
  (config) => {
    // You can log or modify config if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Keep the same response interceptor (optional tweaks below)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.warn("Unauthorized, redirecting...");
      } else if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
