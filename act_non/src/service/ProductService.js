import axios from "axios";

export async function getProductList(name, typeName, price, description, page, size) {
    try {
        const res = await axios.get(`http://localhost:8080/api/product`, {
            params: {
                page: page,
                size: size,
                name: name,
                typeName: typeName,
                price: price,
                description: description,
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export async function getProductById(id){
    const res = await  axios.get(`http://localhost:8080/api/product/detail/${id}`)
    return res.data;
}
export async function getHistoryById(id){
    const res = await  axios.get(`http://localhost:8080/api/orderDetail/${id}`)
    return res.data;
}
export async function getHistoryList( page, size) {
    try {
        const res = await axios.get(`http://localhost:8080/api/orders/his`, {
            params: {
                page: page,
                size: size,
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}