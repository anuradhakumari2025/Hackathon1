import axios from "axios";

const API = axios.create({
  baseURL: "https://hackathon1-0xdr.onrender.com/", // change to your backend URL
  withCredentials: true, // if using cookies/JWT
});

export default API;
