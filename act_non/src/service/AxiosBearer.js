// import axios from "axios";
// import {config} from "exceljs";

// export const axiosBearer = () => {
//     axios.interceptors.request.use(async (config) => {
//         const accessToken = localStorage.getItem("JWT")
//         console.log(accessToken)
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     })
// }
import axios from 'axios';

const AxiosBearer = axios.create({
    baseURL: "http://localhost:8080"
});

AxiosBearer.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("JWT");
        const auth = token ? `Bearer ${token}` : '';
        config.headers.common['Authorization'] = auth;
        return config;
    },
    (error) => Promise.reject(error),
);

export default AxiosBearer;
