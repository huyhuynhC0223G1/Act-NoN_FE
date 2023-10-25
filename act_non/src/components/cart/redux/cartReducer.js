const initState ={
  product:[],
  cart:[]
}

const cartReducer = (carts = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_CART":
      return {...carts, cart: payload}
    case "GET_ALL_PRODUCT":
      return {...carts, product: payload}
    default:
      return carts;
  }
};

export default cartReducer;
