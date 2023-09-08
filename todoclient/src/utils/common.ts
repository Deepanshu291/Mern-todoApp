import axios from "axios";

export const url = "http://127.0.0.1:5000/api/"
export const api = axios.create({
    baseURL:url,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
});