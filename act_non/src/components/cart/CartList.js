import React, {useEffect, useState} from "react";
import * as CartService from "../../service/CartService"
import data from "bootstrap/js/src/dom/data";

export default function CartList() {
    const [cartList, setCartList] = useState([]);

    const getCartList = async () => {
        const data = await CartService.getCartList()
        console.log(data)
        setCartList(data);
    }
    console.log(data)
    useEffect(() => {
        getCartList();
        window.scroll({
            top: 0,

            behavior: "smooth",
        });
    }, [])
    return (
        <>
            <section className="shopping-cart dark" style={{
                backgroundImage: 'url(https://hapotravel.com/wp-content/uploads/2023/04/tron-bo-25-hinh-nen-den-dep-mat-cap-nhat-moi-nhat_15.jpg)'}}>
                <div className="container" style={{marginTop:'150px'}}>
                    <div className="block-heading">
                        <h2>Shopping Cart</h2>
                        <p/>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="items">
                                    {cartList.map((c)=>(
                                        <div className="product">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img className="img-fluid mx-auto d-block image" style={{width:'100px'}}
                                                         src={c.product.img}/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="info">
                                                        <div className="row">
                                                            <div className="col-md-5 product-name">
                                                                <div className="product-name">
                                                                    <a href="#">Lorem Ipsum dolor</a>
                                                                    <div className="product-info">
                                                                        <div>Brand: <span
                                                                            className="value">	{c.product.price}</span></div>
                                                                        <div>Item Dimensions: <span className="value">{c.product.name}</span>
                                                                        </div>
                                                                        <div>Item Weight: <span
                                                                            className="value">{c.product.description}</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 quantity">
                                                                <label htmlFor="quantity">Quantity:</label>
                                                                <input id="quantity" type="number" defaultValue={c.quantity}
                                                                       className="form-control quantity-input"/>
                                                            </div>
                                                            <div className="col-md-3 price">
                                                                <span>$120</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/*<div className="product">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col-md-3">*/}
                                    {/*            <img className="img-fluid mx-auto d-block image"*/}
                                    {/*                 src="https://m.media-amazon.com/images/I/61ttTtWUJfL._AC_UF1000,1000_QL80_.jpg"/>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-md-8">*/}
                                    {/*            <div className="info">*/}
                                    {/*                <div className="row">*/}
                                    {/*                    <div className="col-md-5 product-name">*/}
                                    {/*                        <div className="product-name">*/}
                                    {/*                            <a href="#">Lorem Ipsum dolor</a>*/}
                                    {/*                            <div className="product-info">*/}
                                    {/*                                <div>Brand: <span*/}
                                    {/*                                    className="value">	Maddog</span></div>*/}
                                    {/*                                <div>Item Dimensions: <span className="value">17 x 13 x 7 inches</span>*/}
                                    {/*                                </div>*/}
                                    {/*                                <div>Item Weight: <span*/}
                                    {/*                                    className="value">120 Ounces</span></div>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="col-md-4 quantity">*/}
                                    {/*                        <label htmlFor="quantity">Quantity:</label>*/}
                                    {/*                        <input id="quantity" type="number" defaultValue={1}*/}
                                    {/*                               className="form-control quantity-input"/>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="col-md-3 price">*/}
                                    {/*                        <span>$120</span>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="product">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col-md-3">*/}
                                    {/*            <img className="img-fluid mx-auto d-block image"*/}
                                    {/*                 src="https://m.media-amazon.com/images/I/61oj9XZWkML._AC_UF1000,1000_QL80_.jpg"/>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-md-8">*/}
                                    {/*            <div className="info">*/}
                                    {/*                <div className="row">*/}
                                    {/*                    <div className="col-md-5 product-name">*/}
                                    {/*                        <div className="product-name">*/}
                                    {/*                            <a href="#">Lorem Ipsum dolor</a>*/}
                                    {/*                            <div className="product-info">*/}
                                    {/*                                <div>Brand: <span*/}
                                    {/*                                    className="value">	Maddog</span></div>*/}
                                    {/*                                <div>Item Dimensions: <span className="value">17 x 13 x 7 inches</span>*/}
                                    {/*                                </div>*/}
                                    {/*                                <div>Item Weight: <span*/}
                                    {/*                                    className="value">120 Ounces</span></div>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="col-md-4 quantity">*/}
                                    {/*                        <label htmlFor="quantity">Quantity:</label>*/}
                                    {/*                        <input id="quantity" type="number" defaultValue={1}*/}
                                    {/*                               className="form-control quantity-input"/>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="col-md-3 price">*/}
                                    {/*                        <span>$120</span>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="summary">
                                    <h3>Summary</h3>
                                    <div className="summary-item"><span className="text">Subtotal</span><span
                                        className="price">$360</span></div>
                                    <div className="summary-item"><span className="text">Discount</span><span
                                        className="price">$0</span></div>
                                    <div className="summary-item"><span className="text">Shipping</span><span
                                        className="price">$0</span></div>
                                    <div className="summary-item"><span className="text">Total</span><span
                                        className="price">$360</span></div>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}