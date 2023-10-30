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
export async function updateQuantityProductToCart(productId, quantity) {
    try {
        const response = await axios.post(
            `http://localhost:8080/api/cartDetail/update/${productId}/${quantity}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export async function deleteOrder(id) {
    const response = await axios.delete(`http://localhost:8080/api/cartDetail/delete/${id}`)
    return response.data;
}
export async function deleteMultiProduct(deletedCartIDs) {
    console.log(deletedCartIDs);
    const response = await axios.delete("http://localhost:8080/api/cartDetail/delete-multi", {
        data: deletedCartIDs
    });
    return response.data;
}
export async function checkAvailability(appUserId) {
    const res = await axios.get(
        `http://localhost:8080/api/carts/check-availability?appUserId=${appUserId}`
    );
    return res.data;
}

export async function addOrder(totalPrice) {
    const resolve = await axios.post(`http://localhost:8080/api/orders/add?totalPrice=${totalPrice}`)
    return resolve.data;
}
export async function addOrderDetail(currentPrice, quantity, idOrder, idProduct) {
    const resolve = await axios.post(`http://localhost:8080/api/orderDetail/add?currentPrice=${currentPrice}&&quantity=${quantity}&&idOrder=${idOrder}&&idProduct=${idProduct}`)
    return resolve.data;
}