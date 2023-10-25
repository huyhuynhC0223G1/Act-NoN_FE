import React, {useEffect, useRef, useState} from "react";
import * as CartService from "../../service/CartService"
import data from "bootstrap/js/src/dom/data";
import Swal from "sweetalert2";
import {FaRegTrashAlt} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {getAllCarts} from "./redux/cartAction";
import {useNavigate} from "react-router-dom";
import {Provider} from 'react-redux';
import {infoAppUserByJwtToken} from "../../service/LoginService";
import {toast} from "react-toastify";
import swal from "sweetalert2";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";

export default function CartList() {
    const [cartList, setCartList] = useState([]);
    const carts = useSelector((state) => state.cartReducer);
    const [totalCard, setTotalCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPriceSelected, setTotalPriceSelected] = useState(0);
    const [totalQuantitySelected, setTotalQuantitySelected] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [newQuantity, setNewQuantity] = useState(1);

    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [isUpdated, setIsUpdated] = useState(false);

    const [checkout, setCheckOut] = useState(false);
    const [showCf, setShowCf] = useState(false);
    const [checkSelected, setCheckSelected] = useState(false);
    const [customerToPay, setCustomerToPay] = useState({});
    const totalPriceRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getCartList = async () => {
        const data = await CartService.getCartList();
        console.log(data);
        const quantities = data.map((item) => item.quantity);
        setCartList(data);
        setNewQuantity(quantities);
    }

    useEffect(() => {
        getCartList();
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, [])




    const [isSelectedMap, setIsSelectedMap] = useState(() => {
        const initialSelectedMap = {};
        cartList.forEach((product) => {
            initialSelectedMap[product.id] = true;
        });
        return initialSelectedMap;
    });

    const handleCheckedAll = () => {
        setIsCheckedAll(!isCheckedAll);
        const newSelectedProducts = isCheckedAll ? [] : cartList;
        setSelectedProducts(newSelectedProducts);
        setDiscount(0);
    };

    // const handleCheckedAll = () => {
    //     const newIsSelectedMap = {};
    //     cartList.forEach((product) => {
    //         newIsSelectedMap[product.id] = !isCheckedAll;
    //     });
    //
    //     setSelectedProducts(isCheckedAll ? [] : cartList);
    //     setIsSelectedMap(newIsSelectedMap);
    //     setDiscount(0);
    //
    //     // Xóa các sản phẩm đã chọn nếu checkbox đã được chọn
    //     if (isCheckedAll) {
    //         setSelectedProducts([]);
    //     }
    // };

    useEffect(() => {
        let total = 0;
        let sumQuantity = 0;
        if (cartList.length > 0) {
            cartList.forEach((el, index) => {
                const productTotal = el.product.price * newQuantity[index];
                const quantity = el.quantity
                console.log(quantity)
                total += productTotal;
                sumQuantity += quantity

            });
        }
        setTotalQuantity(sumQuantity);
        console.log(totalQuantity)
        setTotalPrice(total);
    }, [cartList, newQuantity]);


    useEffect(() => {
        let total = 0;
        let sumQuantity = 0;
        if (selectedProducts.length > 0) {
            selectedProducts.forEach((el, index) => {
                const productTotal = el.product.price * newQuantity[index];
                const quantity = el.quantity
                console.log(quantity)
                total += productTotal;
                sumQuantity += quantity

            });
        }
        setTotalQuantitySelected(sumQuantity);
        console.log(totalQuantity)
        setTotalPriceSelected(total);
    }, [selectedProducts, newQuantity]);

    // useEffect(() => {
    //     let newTotalPrice = selectedMedicines.reduce(
    //         (total, el) => total + el.medicinePrice * el.quantityInCart,
    //         0
    //     );
    //
    //     setTotalPrice(newTotalPrice);
    // }, [selectedMedicines]);
    const handleDelete = async (id) => {
        Swal.fire({
                title: 'Do you want to remove product <br><span style="color: #dfa512">' + id + '</span> from your shopping cart?',
                html: '<p style = " color: red">You will not be able to undo this action!</p>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'OK ',
                cancelButtonText: 'Cancel',
                reverseButtons: true,
                customClass: {
                    confirmButton: 'custom-confirm-button-employee',
                }
            }
        ).then((res) => {
            if (res.isConfirmed) {
                CartService.deleteOrder(id).then(() => {
                    getCartList().then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Delete Successfully!',
                            showConfirmButton: false,
                            timer: 2000,

                        })
                    })
                });
            } else if (res.dismiss === Swal.DismissReason.cancel) {
            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Error! An error occurred. Please try again later! Deletion failed!',
                    showConfirmButton: false,
                    timer: 2000,
                })

            }
        })
    }

    const handleDeleteMuti = async () => {
        console.log(selectedProducts)
        if (selectedProducts.length === 0) {
            swal.fire({
                title: "Please select the product to delete!",
                icon: "warning",
            });
        } else {
            let deletedCartIDs = [];
            selectedProducts.forEach((med) => deletedCartIDs.push(med.id));
            let names = selectedProducts
                .map((product) => product.name)
                .join(", ");
            console.log(deletedCartIDs)
            swal
                .fire({
                    title:
                        "Do you want to delete " +
                        selectedProducts.length +
                        " This product is removed from the cart?",
                    text: names,
                    html: '<p style = " color: red">You will not be able to undo this action!</p>',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'OK ',
                    cancelButtonText: 'Cancel',
                    reverseButtons: true,
                })
                .then(async (willDelete) => {
                    if (willDelete.isConfirmed) {
                        await CartService.deleteMultiProduct(deletedCartIDs);

                        setIsUpdated((prev) => !prev);
                        // update the selectedMedicines
                        setSelectedProducts(
                            selectedProducts.filter(
                                (med) => !deletedCartIDs.includes(med.id)
                            )
                        );

                        getCartList().then(() => {
                            Swal.fire({
                                icon: 'success',
                                title: 'Delete Successfully!',
                                showConfirmButton: false,
                                timer: 2000,

                            })
                        })
                        dispatch(getAllCarts(localStorage.getItem("id")));
                        setDiscount(0);
                    }
                });
        }
    };
    const handleQuantityChange = async (event, productId) => {
        const newQuantity = parseInt(event.target.value);
        console.log(newQuantity);
        const isLoggedIn = infoAppUserByJwtToken();
        if (!isLoggedIn) {
            Swal.fire("Please log in to your account!", "", "warning");
            navigate("/login");
        } else {
            if(newQuantity == 99 || newQuantity > 99){
                Swal.fire({
                    icon: 'error',
                    title: 'you have set the maximum quantity.!',
                    showConfirmButton: false,
                    timer: 2000,
                })

                const data = await CartService.updateQuantityProductToCart(productId, 99);
                getCartList();
            }
            if (isNaN(newQuantity)) {
                const data = await CartService.updateQuantityProductToCart(productId, 1);
                getCartList();
            } else {
                const data = await CartService.updateQuantityProductToCart(productId, newQuantity);
                getCartList();
            }
        }
    };
    const decreaseQuantity = (productId) => {
        const inputElement = document.getElementById(`input-quantity${productId}`);
        let newQuantity = parseInt(inputElement.value) || 0;
        newQuantity = Math.max(1, newQuantity - 1); // Giảm giá trị số lượng và đảm bảo không nhỏ hơn 1
        inputElement.value = newQuantity;
        handleQuantityChange({target: {value: newQuantity}}, productId);
    };

    const increaseQuantity = (productId) => {
        const inputElement = document.getElementById(`input-quantity${productId}`);
        let newQuantity = parseInt(inputElement.value) || 0;
        newQuantity += 1; // Tăng giá trị số lượng
        inputElement.value = newQuantity;
        handleQuantityChange({target: {value: newQuantity}}, productId);
    };


    // ---------------------Payment------------------
    // const handleChooseItem = (item) => {
    //     if (selectedProducts.includes(item)) {
    //         const updatedItemCarts = selectedProducts.filter((cartItem) => cartItem !== item);
    //         setSelectedProducts(updatedItemCarts);
    //     } else {
    //         setSelectedProducts((prevItemCarts) => [...prevItemCarts, item]);
    //     }
    // }
    const handleMultiSelect = (el) => {
        if (selectedProducts.some((product) => product.id === el.id)) {
            setSelectedProducts(selectedProducts.filter((product) => product.id !== el.id));
        } else {
            setSelectedProducts([...selectedProducts, el]);
        }
        setDiscount(0);
        if (selectedProducts.length === 1 && selectedProducts[0].id === el.id) {
            setSelectedProducts([]);
        }
    };

    const handleBlur = (event, productId) => {
        const inputElement = event.target;
        const inputValue = inputElement.value.trim();
        console.log(inputValue)
        if (!inputValue) {
            inputElement.value = 1;
            handleQuantityChange({target: {value: 1}}, productId);
        }else if (inputValue > 99){
            inputElement.value = 99;
            handleQuantityChange({target: {value: 99}}, productId);
        } else {
            const parsedValue = parseInt(inputValue, 10);
            if (!isNaN(parsedValue)) {
                inputElement.value = parsedValue;
                handleQuantityChange({ target: { value: parsedValue } }, productId);
            }
        }
    };
    const renderPaypalButton = (itemCarts) => {
        const createOrder = (data, actions) => {
            try {
                const totalAmount = document.getElementById("totalAmount").innerText;
                console.log(totalAmount);
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: totalAmount
                            },
                        },
                    ],
                });
            } catch (error) {
                console.error("Error creating order:", error);
                throw error;
            }
        };

        window.paypal
            .Buttons({
                style: {
                    color: "gold",
                    layout: "vertical",
                    shape: "rect",
                    label: "pay",
                    height: 40,
                    marginLeft: 400,
                },
                createOrder: createOrder,
                onApprove: async (data, actions) => {
                    let isQuantityValid = true;

                    itemCarts.forEach((item) => {
                        if (item.quality > item.product.quantity) {
                            isQuantityValid = false;
                            Swal.fire({
                                icon: 'error',
                                timer: 3000,
                                title: 'Quantity of ' + item.product.name + ' not enough to continue this action'
                            });
                        }
                    });

                    if (!isQuantityValid) {
                        navigate("/cart");
                        return;
                    }
                    const order = await actions.order.capture();
                    const dataOrder = await CartService.addOrder(totalPrice);
                    let deletedCartIDs = [];
                    selectedProducts.forEach((med) => deletedCartIDs.push(med.id));
                    itemCarts.forEach((item) => {
                        console.log(item)
                        CartService.addOrderDetail((item.product.price), item.quantity, dataOrder.id, item.product.id)

                        CartService.deleteMultiProduct(deletedCartIDs);
                        // updateQuantityWines(item.quality,item.wines.idWines);
                        dispatch(getAllCarts(localStorage.getItem("id")));

                    });

                    if (
                        order.status === "COMPLETED" ||
                        order.status === 200
                    ) {
                        Swal.fire({
                            icon: "success",
                            title: "Payment success",
                            timer: 3000,
                        });
                        navigate("/home");
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Payment Failed",
                            timer: 3000,
                        });
                        navigate("/home");
                    }
                },
            })
            .render("#paypal-button-container");
    };
    let [total, setTotal] = useState(0);
    let stateButton = 0
    cartList.forEach((item) => {
        total += item.product.price * item.quality;
    });
    const handlePayment = () => {
        Swal.fire({
            icon: "warning",
            text: "Do you want to pay for these products?",
            showCancelButton: true,
            confirmButtonText: 'OK ',
            cancelButtonText: 'Cancel',
            reverseButtons: true,

        }).then((result) => {
            if (result && result.value) {
                if (stateButton === 0) {
                    renderPaypalButton(selectedProducts);
                    console.log(selectedProducts);
                    stateButton++;

                    const kiemTraButton = document.querySelector(
                        "#paypal-button-container button"
                    );
                    kiemTraButton.style.display = "none";
                }
            }
        });
    };
    //---------------------------------------------

    // const handleVNPAY = async () => {
    //     let finalPrice = totalPrice - discount;
    //     const plusPoint = totalPrice / 100;
    //     const loyaltyPoint = point + plusPoint - discount;
    //     let deletedCartIDs = [];
    //     selectedMedicines.forEach((med) => deletedCartIDs.push(med.cartId));
    //     const tempOrder = {
    //         appUserId: appUserId,
    //         loyaltyPoint: loyaltyPoint,
    //         totalPrice: finalPrice,
    //         customerToPay: customerToPay,
    //         deletedCartIDs: deletedCartIDs,
    //         totalPriceBeforeDiscount: totalPrice,
    //         discount: discount,
    //     };
    //     localStorage.setItem("tempOrder", JSON.stringify(tempOrder));
    //
    //     const res = await createVNPayPayment(finalPrice);
    //     window.location.href = res;
    // };

    return (
        < >
            <section className="shopping-cart dark" style={{}}>
                <div className="container" style={{marginTop: '30px'}}>
                    <div className="block-heading text-lg-center">
                        <h1>Shopping Cart</h1>
                        <p/>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="items">
                                    <div className=" d-flex ">
                                        <button
                                            type="button"
                                            className="btn mx-5 p-0"
                                            style={{
                                                color: '#f8c449',
                                                fontSize: "14px",
                                            }}
                                            checked={isCheckedAll}
                                            onClick={handleCheckedAll}
                                        >
                                            Select all
                                        </button>
                                        <button
                                            type="button"
                                            className="btn mx-5 p-0 text-danger "
                                            style={{

                                                fontSize: "30px",
                                            }}
                                            onClick={handleDeleteMuti}
                                        >
                                            <FaRegTrashAlt/>
                                        </button>
                                    </div>
                                    <table className="table table-hover">
                                        <thead className="text-secondary">
                                        <tr className="text-center fw-bold">
                                            <td>Product</td>
                                            <td>Price(USD)</td>
                                            <td>Quantity</td>
                                            <td>Total amount(USD)</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {cartList.length > 0 &&
                                            cartList.map((el, index) => {
                                                return (
                                                    <tr key={`el_${el.id}`}>
                                                        <td>
                                                            <div
                                                                className="d-flex flex-column flex-md-row align-items-center justify-content-start ">
                                   <span>
  <input
      id={`el_${el.id}`}
      type="checkbox"
      name="multiSelect"
      style={{
          width: "15px",
          height: "15px",
          marginRight: "20px",
      }}
      onChange={() => handleMultiSelect(el)}
      checked={selectedProducts.some((product) => product.id === el.id)}
  />
</span>
                                                                <img
                                                                    src={el.product.img}
                                                                    style={{
                                                                        width: "3.5rem",
                                                                        height: "4.0rem",
                                                                        cursor: "pointer",
                                                                    }}
                                                                    onClick={() =>
                                                                        navigate(`/product/detail/${el.product.id}`)
                                                                    }
                                                                />
                                                                <div
                                                                    style={{cursor: "pointer"}}
                                                                    className="text-center align-middle mx-2"
                                                                    onClick={() =>
                                                                        navigate(`/product/detail/${el.product.id}`)
                                                                    }
                                                                >
                                                                    <div>{el.product.name}</div>
                                                                </div>
                                                            </div>
                                                            {/*{quantities[el.medicineId] >= 0 && (*/}
                                                            {/*    <small*/}
                                                            {/*        className="text-center text-danger align-middle">*/}
                                                            {/*        Số lượng còn lại ở kho:{" "}*/}
                                                            {/*        <small>{quantities[el.medicineId]}</small>*/}
                                                            {/*    </small>*/}
                                                            {/*)}*/}
                                                        </td>

                                                        <td className=" text-center align-middle fw-bold">
                                                            {el.product.price}
                                                        </td>
                                                        {/*                            quantity*/}
                                                        <td className="align-middle">
                                                            <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
                                                                <button
                                                                    className=""
                                                                    style={{
                                                                        border: '0',
                                                                        fontSize: '35px',
                                                                        height: '35px',
                                                                        background: el.quantity === 1 ? 'gray' : '#fdc449'
                                                                    }}
                                                                    onClick={() => decreaseQuantity(el.product.id)}
                                                                    disabled={el.quantity === 1}
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    id={`input-quantity${el.product.id}`}
                                                                    style={{ width: '5rem' }}
                                                                    type="text"
                                                                    min="1"
                                                                    max="99"
                                                                    defaultValue={el.quantity}
                                                                    className=""
                                                                    onChange={(event) => handleQuantityChange(event, el.product.id)}
                                                                    onBlur={(event) => handleBlur(event, el.product.id)}
                                                                />
                                                                <button
                                                                    className=""
                                                                    style={{
                                                                        border: '0',
                                                                        width: '30px',
                                                                        fontSize: '30px',
                                                                        height: '35px',
                                                                        background: el.quantity > 98 ? 'gray' : '#fdc449'
                                                                    }}
                                                                    onClick={() => increaseQuantity(el.product.id)}
                                                                    disabled={el.quantity === 99}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </td>
                                                        {/*                            total price*/}
                                                        <td id="totalPriceOfProduct"
                                                            className="align-middle text-center fw-bold">
                                                            {el.product.price * newQuantity[index]}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>

                                    <div
                                        className=" mb-3"
                                        style={{display: showCf ? "block" : "none"}}
                                        id="confirm-order"
                                    >
                                        <h3 className=" text-center" style={{color: "#0340c1"}}>
                                            XÁC NHẬN THÔNG TIN GIAO HÀNG
                                            <img
                                                style={{
                                                    marginLeft: "20px",
                                                    height: "60px",
                                                    width: "60px",
                                                    opacity: "20%",
                                                }}
                                                src="https://static.vecteezy.com/system/resources/previews/002/206/240/original/fast-delivery-icon-free-vector.jpg"
                                            />
                                        </h3>
                                        <Formik
                                            initialValues={{
                                                // id: cartList[0].customer.id,
                                                // name: cartList[0].customer.name,
                                                // phoneNumber: cartList[0].customer.phoneNumber,
                                                // email: cartList[0].customer.email,
                                                // address: cartList[0].customer.address,
                                                // note: "",
                                            }}
                                            validationSchema={yup.object({
                                                name: yup
                                                    .string()
                                                    .required("Vui lòng nhập tên khách hàng!"),
                                                phoneNumber: yup
                                                    .string()
                                                    .matches(/^0[0-9]{9}$/, "0905222777")
                                                    .required("Vui lòng nhập vào số điện thoại!"),
                                                email: yup
                                                    .string()
                                                    .email()
                                                    .required("Vui lòng nhập vào email!"),
                                                address: yup
                                                    .string()
                                                    .required("Vui lòng nhập vào địa chỉ của bạn!"),
                                                note: yup.string().max(255),
                                            })}
                                            onSubmit={async (values, {setErrors}) => {
                                                setCustomerToPay(values);
                                                try {
                                                    swal.fire(
                                                        "Cập nhật thông tin thành công!",
                                                        "",
                                                        "success"
                                                    );
                                                    // the checkout here is to temporarily fix paypal bug somehow :)
                                                    if (!checkout) {
                                                        setCheckOut(true);
                                                        // renderPaypal(values);
                                                    }
                                                } catch (error) {
                                                    if (error.response && error.response.data) {
                                                        setErrors(error.response.data);
                                                    }
                                                }
                                            }}
                                        >
                                            <Form>
                                                <div
                                                    className=" d-flex flex-column justify-content-center align-items-center">
                                                    <div className=" mb-1 w-100">
                                                        <label htmlFor="name">
                                                            Name Customer{" "}
                                                            <span className=" text-danger">*</span>
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            className=" form-control w-100"
                                                        ></Field>
                                                        <ErrorMessage
                                                            name="name"
                                                            component="p"
                                                            className="text-danger"
                                                        ></ErrorMessage>
                                                    </div>
                                                </div>

                                                <div className=" mb-1 w-100">
                                                    <label htmlFor="phoneNumber">
                                                        Phone number{" "}
                                                        <span className=" text-danger">*</span>
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        className=" form-control w-100"
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="phoneNumber"
                                                        component="span"
                                                        className=" text-danger"
                                                    ></ErrorMessage>
                                                </div>
                                                <div className=" mb-1 w-100">
                                                    <label htmlFor="email">
                                                        Email<span className=" text-danger">*</span>
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        className=" form-control w-100"
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="email"
                                                        component="span"
                                                        className=" text-danger"
                                                    ></ErrorMessage>
                                                </div>
                                                <div className="  mb-1 w-100">
                                                    <label htmlFor="address">
                                                        Address<span className=" text-danger">*</span>
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="address"
                                                        name="address"
                                                        className=" form-control w-100"
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="address"
                                                        component="span"
                                                        className=" text-danger"
                                                    ></ErrorMessage>
                                                </div>
                                                <div className="mb-1 w-100">
                                                    <label htmlFor="note">Note:</label>
                                                    <Field
                                                        as="textarea"
                                                        id="note"
                                                        name="note"
                                                        className=" form-control w-100"
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="note"
                                                        component="span"
                                                        className=" text-danger"
                                                    ></ErrorMessage>
                                                </div>
                                                <div className=" w-100 d-flex justify-content-center">
                                                    <button
                                                        type="submit"
                                                        className=" fw-bold btn btn-success mt-3 w-50"
                                                    >

                                                        CONFIRMATION AND PAYMENT
                                                    </button>
                                                </div>
                                            </Form>
                                        </Formik>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="summary">
                                    <div className=" mt-5 cart-wrap ftco-animate">
                                        <div className="cart-total mb-3">
                                            <h3>Cart Totals</h3>
                                            <table>
                                                <tr>
                                                    <td><span>Gross product: </span></td>
                                                    <td style={{paddingLeft: '4rem'}}><span
                                                        id=""><b>{cartList.length}</b></span></td>
                                                    <td><span style={{
                                                        textAlign: 'end',
                                                        fontWeight: '600',
                                                        color: 'black'
                                                    }}></span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Quantity: </span></td>
                                                    <td style={{paddingLeft: '4rem'}}><span id=""><b>{totalQuantity}</b></span>
                                                    </td>
                                                    <td><span style={{
                                                        textAlign: 'end',
                                                        fontWeight: '600',
                                                        color: 'black'
                                                    }}></span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Total amount: </span></td>
                                                    <td style={{paddingLeft: '4rem'}}><span id=""><b> {totalPrice} </b></span>
                                                    </td>
                                                    <td><span style={{
                                                        textAlign: 'end',
                                                        fontWeight: '600',
                                                        color: 'black'
                                                    }}>$</span></td>
                                                </tr>

                                            </table>

                                        </div>
                                        {/*<div id="paypal-button-container">*/}
                                        {/*    <button style={{width: '100%', border: '1px'}}*/}
                                        {/*            onClick={() => handlePayment()}*/}
                                        {/*            className=" btn btn-primary py-3 px-4 text-center"*/}
                                        {/*    >*/}
                                        {/*        Proceed to Checkout*/}
                                        {/*    </button>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className=" mt-5 cart-wrap ftco-animate">
                                        <div className="cart-total mb-3">
                                            <h3>TOTAL PAYMENT</h3>
                                            <table>
                                                <tr>
                                                    <td><span>Gross product: </span></td>
                                                    <td style={{paddingLeft: '4rem'}}><span
                                                        id=""><b>{selectedProducts.length}</b></span></td>
                                                    <td><span style={{
                                                        textAlign: 'end',
                                                        fontWeight: '600',
                                                        color: 'black'
                                                    }}></span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Quantity: </span></td>
                                                    <td style={{paddingLeft: '4rem'}}><span
                                                        id=""><b>{totalQuantitySelected}</b></span></td>
                                                    <td><span style={{
                                                        textAlign: 'end',
                                                        fontWeight: '600',
                                                        color: 'black'
                                                    }}></span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Total amount: </span></td>
                                                    <td style={{paddingLeft: '4rem'}}><span
                                                        id="totalAmount"><b> {totalPriceSelected} </b></span></td>
                                                    <td><span style={{
                                                        textAlign: 'end',
                                                        fontWeight: '600',
                                                        color: 'black'
                                                    }}>$</span></td>
                                                </tr>

                                            </table>

                                        </div>
                                        <div id="paypal-button-container">
                                            <button style={{width: '100%', border: '1px'}}
                                                    onClick={() => handlePayment()}
                                                    className=" btn btn-primary py-3 px-4 text-center"
                                            >
                                                Proceed to payment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}