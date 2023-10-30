import axios from "axios";
import {config} from "exceljs";

export const AxiosBearer = () => {
    axios.interceptors.request.use(async (config) => {
        const accessToken = localStorage.getItem("JWT")
        console.log(accessToken)
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    })
}


