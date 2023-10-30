import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as ProductService from '../../service/ProductService'
import {infoAppUserByJwtToken} from "../../service/LoginService";
import Swal from "sweetalert2";
import * as CartService from "../../service/CartService";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch} from "react-redux";
import {getAllCarts} from "../cart/redux/cartAction";

export default function DetailProduct() {
    const param = useParams();
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [isSearching, setIsSearching] = useState(false);
    const [productList, setProductList] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [typeName, setTypeName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const getProductById = async () => {
        const data = await ProductService.getProductById(param.id)
        setProductDetail(data);
    }

    const getListProduct = async (page) => {
        if (isSearching) {
            const dataSearch = await ProductService.getProductList(searchName, typeName, price, description, page, 4)
            setProductList(dataSearch.content);
        } else {
            const data = await ProductService.getProductList("", "", "", "", page, 4)
            if (data.content != null || data.content != undefined) {
                setProductList(data.content);

            } else {
                setProductList([]);
                Swal.fire({
                    icon: 'error',
                    title: 'Not found!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    }

    useEffect(() => {
        getListProduct();
        getProductById();
        document.title = "ActNoN - Detail Product";
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    console.log(quantity)
    const addProductToCart = async (id,quantity, e) => {
        e.preventDefault();
        const isLoggedIn = infoAppUserByJwtToken();
        if (!isLoggedIn) {
            Swal.fire("Please log in to your account!", "", "warning");
            navigate("/login");
        } else {
            const response = await CartService.addProductToCart(id,quantity);
            dispatch(getAllCarts(localStorage.getItem("id")));
            toast.success("Added product successfully");
        }
    };

    return (
        <>
            <div  style={{ height:'110px',
                backgroundImage: 'url(https://hapotravel.com/wp-content/uploads/2023/04/tron-bo-25-hinh-nen-den-dep-mat-cap-nhat-moi-nhat_15.jpg)'}}>
            </div>
            <div className="super_container" style={{background:'#eeeeee'}}>
                <div className="single_product" >
                    <div className="container" style={{ padding: '11px'}}>
                        <h1 className="text-uppercase  text-center"
                            style={{color:'#ffc107', paddingTop:'50px'}}>Detail product</h1>
                        <div className="row" style={{marginTop:'50px'}}>
                            <div className="col-lg-4 order-lg-2 order-1" >

                                <div className="image_selected"><img
                                    src={productDetail.img}
                                    alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-3">
                                <div className="product_description">
                                    <div className="product_name">{productDetail.name}
                                    </div>
                                    <div className="product-rating"><span className="badge" style={{color:'#fdc449'}}> 4.5 Star</span>
                                        <span className="rating-review">35 Ratings &amp; 45 Reviews</span></div>
                                    <div><span className="product_price" style={{color:'#fdc449'}}>$ {productDetail.price}</span> <strike
                                        className="product_discount"> <span style={{color: 'black'}}>$ {productDetail.price * 1.5}<span> </span></span></strike>
                                    </div>

                                    <hr className="singleline"/>
                                    <div><span className="product_info">{productDetail.description}</span></div>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="br-dashed">
                                                </div>
                                            </div>
                                            <div className="col-md-7"/>
                                        </div>
                                    </div>
                                    <hr className="singleline"/>
                                    <div className="order_info d-flex flex-row">
                                        <form action="#">
                                        </form>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6" style={{marginLeft: '13px'}}>
                                            <div className="product_quantity"><span>QUANTITY: </span>
                                                <input id="quantity_input" type="number" pattern="[0-9]*"
                                                       value={quantity}
                                                       style={{borderRadius:'5px', width:'107px'}}
                                                       onChange={(e) => setQuantity(e.target.value)}/>
                                                <div className="quantity_buttons">
                                                    <div id="quantity_inc_button"
                                                         className="quantity_inc quantity_control"><i
                                                        className="fas fa-chevron-up"/></div>
                                                    <div id="quantity_dec_button"
                                                         className="quantity_dec quantity_control"><i
                                                        className="fas fa-chevron-down"/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <button type="button"
                                                    className="btn shop-button text-white"
                                                    style={{background:'#ffc107', borderRadius:'5px', marginTop:'10px'}}
                                                    onClick={(e) => addProductToCart(productDetail.id,quantity , e)}>
                                                Add to Cart
                                            </button>
                                            {/*<button type="button" className="btn shop-button">Buy Now*/}
                                            {/*</button>*/}
                                            <div className="product_fav"><i className="fas fa-heart"/></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div style={{marginTop:'50px', }}>
                            <h2 style={{color:'#ffc107'}}>related products</h2>
                        </div>
                        <div className="row">
                            {productList.map((p) => (
                                <div className="col-lg-3 pb-4 px-3" key={p.id}>
                                    <div className="py-5 plan-post text-center" style={{background: ''}}>
                                        <p className="header-top" style={{fontSize:'25px'}}>{p.name}</p>
                                        <h2 className="display-5 mb-5">$ {p.price}</h2>
                                        <div className="price-option">
                                            <Link to={`/product/detail/${p.id}`}>
                                                <img className="portfolio-img img-fluid" src={p.img}
                                                     style={{minHeight: '', maxHeight: '320px'}}
                                                     alt=""/>
                                            </Link>
                                        </div>
                                        <a href="" className="btn btn-primary mt-3 px-4 py-3 mx-2"
                                           onClick={(e) => addProductToCart(p.id, e)}>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <ToastContainer autoClose={1000} className="toast-position"/>
            </div>

        </>
    )
}