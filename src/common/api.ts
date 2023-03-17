import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://swapi.dev/api/",
});

apiClient.interceptors.response.use(
  (response) => {
    console.log("Api", response);
    return response;
  },
  (error) => {
    console.log("Api Error", error);
    return Promise.reject(error);
  }
);

export default apiClient