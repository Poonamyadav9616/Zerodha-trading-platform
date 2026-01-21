import axios from "axios";

const api = axios.create({
    baseURL: "https://zerodha-backend-gi5m.onrender.com",
    withCredentials: true,
});

export default api;