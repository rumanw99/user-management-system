import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { toast } from "react-toastify";

class ApiProvider {
  private instance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    this.instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error: AxiosError<{ error: { message: string } }>) {
        const errorMessage =
          error.response?.data?.error?.message ||
          error.message ||
          "An unknown error occurred";
        toast(errorMessage, {
          type: "error",
          position: "top-center",
        });
        return Promise.reject(error);
      }
    );
  }

  protected get<T = AxiosResponse["data"]>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.get(url, config).then((res) => res.data);
  }

  protected post<T = AxiosResponse["data"], D = Record<string, unknown>>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.post(url, data, config).then((res) => res.data);
  }

  protected put<T = AxiosResponse["data"], D = Record<string, unknown>>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.put(url, data, config).then((res) => res.data);
  }

  protected remove<T = AxiosResponse["data"]>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.delete(url, config).then((res) => res.data);
  }
}

export default ApiProvider;
