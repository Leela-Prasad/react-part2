import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "68fadb44593d4273a3783baa310424dd",
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  fetchAll(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }

  fetch(config?: AxiosRequestConfig) {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  }
}

export default APIClient;
