import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as ProductService from '../../service/ProductService'
import {infoAppUserByJwtToken} from "../../service/LoginService";
import Swal from "sweetalert2";
import * as CartService from "../../service/CartService";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DetailProduct() {
    const param = useParams();
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState({});
    const [quantity, setQuantity] = useState(1);
    const getProductById = async () => {
        const data = await ProductService.getProductById(param.id)
        setProductDetail(data);
    }
    useEffect(() => {
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
            toast.success("Added product successfully");
        }
    };

    return (
        <>
            <div  style={{ height:'300px',
                backgroundImage: 'url(https://hapotravel.com/wp-content/uploads/2023/04/tron-bo-25-hinh-nen-den-dep-mat-cap-nhat-moi-nhat_15.jpg)'}}>
                <h1 className="text-uppercase  text-center"
                style={{paddingTop:'220px', color:'white'}}>Detail product</h1>
            </div>
            <div className="super_container">
                <div className="single_product" >
                    <div className="container" style={{ padding: '11px'}}>
                        <div className="row" style={{marginTop:'150px'}}>
                            <div className="col-lg-4 order-lg-2 order-1" >
                                <div className="image_selected"><img
                                    src={productDetail.img}
                                    alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-3">
                                <div className="product_description">
                                    <div className="product_name">Maddog Tippmann Cronus Tactical Silver Paintball Gun
                                        Marker Starter
                                        Package
                                    </div>
                                    <div className="product-rating"><span className="badge badge-success"><i
                                        className="fa fa-star"/> 4.5 Star</span>
                                        <span className="rating-review">35 Ratings &amp; 45 Reviews</span></div>
                                    <div><span className="product_price">$ 120</span> <strike
                                        className="product_discount"> <span style={{color: 'black'}}>$ 500<span> </span></span></strike>
                                    </div>
                                    <div><span className="product_saved">You Saved:</span> <span
                                        style={{color: 'black'}}>$ 250<span/></span></div>
                                    <hr className="singleline"/>
                                    <div><span className="product_info">Style: Olive CO2 Package</span><br/>
                                        <span className="product_info"/><br/>
                                        <span className="product_info">Brand: Maddog</span><br/>
                                        <span className="product_info">Color: Tactical Black / Olive CO2 Kit</span><br/>
                                        <span className="product_info">Rounds: 200</span><br/>
                                        <span className="product_info">Caliber: 	0.68</span><br/>
                                        <span className="product_info">Item Dimensions: 17 x 13 x 7 inches</span><br/>
                                        <span className="product_info">Item Weight: 	120 Ounces</span></div>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="br-dashed">
                                                    <div className="row">
                                                        <div className="col-md-3 col-xs-3"><img
                                                            src="https://img.icons8.com/color/48/000000/price-tag.png"/>
                                                        </div>
                                                        <div className="col-md-9 col-xs-9">
                                                            <div className="pr-info"><span className="break-all">Get 5% instant discount + 10X rewards @ RENTOPC</span>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                            <div className="product_quantity"><span>QTY: </span>
                                                <input id="quantity_input" type="number" pattern="[0-9]*"
                                                       value={quantity}
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
                                                    style={{background:'#ffc107'}}
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
                    </div>
                </div>
                <ToastContainer autoClose={1000} className="toast-position"/>
            </div>

        </>
    )
}