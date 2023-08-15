import axios from "axios";

// axios.defaults.baseURL = "https://dfi-example-project.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "/api";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();