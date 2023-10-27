import axios from "axios";

export async function getCustomerById(){
    const res = await  axios.get(`http://localhost:8080/api/customer`)
    return res.data;
}