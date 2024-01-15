import axios from "axios";
const axiosApi = axios.create({
  baseURL: "http://192.168.0.109:8000/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosApi;
