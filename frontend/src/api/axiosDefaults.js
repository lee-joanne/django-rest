import axios from "axios";

// axios.defaults.baseURL = "https://dfi-example-project.herokuapp.com/";
axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();