import axios from "axios"
import { loadToken } from "../utils/helpers/storage.helper";

export const config = () => {
    const token = loadToken();
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};


export const api = axios.create({
    baseURL: process.env.API_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
    }
})