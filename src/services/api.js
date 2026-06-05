import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
  }
  return config;
});


export const loginUser = (data) => apiClient.post("/login", data);
export const registerUser = (data) => apiClient.post("/register", data);
export const getCurrentUser = () => apiClient.get("/me");