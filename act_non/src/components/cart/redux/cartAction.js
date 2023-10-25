import * as CartService from "../../../service/CartService"
import * as ProductService from "../../../service/ProductService"
export const getAllCarts = (appUserId) => async (dispatch) => {
  try {
    const res = await CartService.getCartList(appUserId);
    dispatch({
      type: "GET_ALL_CART",
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = (productId) => async (dispatch) => {
  try {
    const res = await ProductService.getProductList(productId);
    dispatch({
      type: "GET_ALL_PRODUCT",
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};
