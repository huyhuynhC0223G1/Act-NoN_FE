import axios from "axios";

export async function getCartList(){
    const res = await axios.post(`http://localhost:8080/api/cartDetail`)
    return res.data;
}

export async function addProductToCart(productId, quantity) {
    try {
        const response = await axios.post(
            `http://localhost:8080/api/cartDetail/add/${productId}/${quantity}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}