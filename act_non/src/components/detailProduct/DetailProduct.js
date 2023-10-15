import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as ProductService from '../../service/ProductService'

export default function DetailProduct() {
    const param = useParams();
    const [productDetail, setProductDetail] = useState({});
    const getProductById = async () => {
        const data = await ProductService.getProductById(param.id)
        setProductDetail(data);
    }
    useEffect(() => {
        getProductById();
        document.title = "ActNoN - Detail Product";
    }, []);
    return (
        <>
            <div className="super_container" style={{
                backgroundImage: 'url(https://hapotravel.com/wp-content/uploads/2023/04/tron-bo-25-hinh-nen-den-dep-mat-cap-nhat-moi-nhat_15.jpg)'}}>

                <div className="single_product" >
                    <div className="container" style={{ padding: '11px'}}>
                        <div className="row" style={{marginTop:'150px'}}>
                            {/*<div className="col-lg-2 order-lg-1 order-2">*/}
                            {/*    <ul className="image_list">*/}
                            {/*        <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg">*/}
                            {/*            <img*/}
                            {/*                src="https://i.pinimg.com/474x/69/16/6b/69166b4dc8e8bddb3e78b2978dde0c3d.jpg"*/}
                            {/*                alt=""/>*/}
                            {/*        </li>*/}
                            {/*        <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg">*/}
                            {/*            <img*/}
                            {/*                src="https://eastcoastpaintball.com/cdn/shop/products/Frame788_1200x.png?v=1680489364"*/}
                            {/*                alt=""/>*/}
                            {/*        </li>*/}
                            {/*        <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg">*/}
                            {/*            <img*/}
                            {/*                src="https://m.media-amazon.com/images/I/61s6l77J98L._AC_UF1000,1000_QL80_.jpg"*/}
                            {/*                alt=""/>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
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
                                        {/*                            <div class="row" style="margin-top: 15px;">*/}
                                        {/*                                <div class="col-xs-6" style="margin-left: 15px;"><span class="product_options">RAM Options</span><br>*/}
                                        {/*                                    <button class="btn btn-primary btn-sm">4 GB</button>*/}
                                        {/*                                    <button class="btn btn-primary btn-sm">8 GB</button>*/}
                                        {/*                                    <button class="btn btn-primary btn-sm">16 GB</button>*/}
                                        {/*                                </div>*/}
                                        {/*                                <div class="col-xs-6" style="margin-left: 55px;"><span class="product_options">Storage Options</span><br>*/}
                                        {/*                                    <button class="btn btn-primary btn-sm">500 GB</button>*/}
                                        {/*                                    <button class="btn btn-primary btn-sm">1 TB</button>*/}
                                        {/*                                </div>*/}
                                        {/*                            </div>*/}
                                    </div>
                                    <hr className="singleline"/>
                                    <div className="order_info d-flex flex-row">
                                        <form action="#">
                                        </form>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6" style={{marginLeft: '13px'}}>
                                            <div className="product_quantity"><span>QTY: </span> <input
                                                id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1}/>
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
                                            <button type="button" className="btn shop-button text-white" style={{background:'#ffc107'}}>Add to Cart
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
            </div>

        </>
    )
}