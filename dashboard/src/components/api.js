import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_DASHBOARD_API_URL,
    withCredentials: true,
});

export default api;