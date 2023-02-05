import axios from "axios";

export const http = axios.create({
  baseURL: "https://server.cheercharms.link",
});

http.defaults.withCredentials = true;

export const token = localStorage.getItem("token") ?? false;

//console.log("토큰: ", token);

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
