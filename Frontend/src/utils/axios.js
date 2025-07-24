import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/", // change to your backend URL
  withCredentials: true, // if using cookies/JWT
});

export default API;
