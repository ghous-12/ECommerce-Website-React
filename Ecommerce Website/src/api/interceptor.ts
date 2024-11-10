import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { routes } from "@/utils/constants";
import config from "../config";
import { getToken } from "../utils/helpers";

const api = axios.create({
  baseURL: config.SERVER_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers = config.headers ?? {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data }: { status: number; data: any } = error.response;
      console.error(
        `Error: ${status}`,
        data?.message || "Unknown server error"
      );

      // Example: Handle 401 Unauthorized
      if (status === 401) {
        localStorage.removeItem("token");
        window.location.href = routes.login;
      }
    } else if (error.request) {
      console.error("No response from server. Please try again later.");
    } else {
      console.error("Axios configuration error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
