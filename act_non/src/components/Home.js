import React, {useEffect, useState} from "react";
import "../components/style.css"
import * as ProductService from '../service/ProductService'
import Logo from "./images/Logo main.png"
import Swal from "sweetalert2";

export default function Home() {
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [searchName, setSearchName] = useState("");
    const [typeName, setTypeName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [isSearching, setIsSearching] = useState(false);
    const getListProduct = async (page) => {
        if (isSearching) {
            const dataSearch = await ProductService.getProductList(searchName, typeName, price, description, page, 20)
            setProductList(dataSearch.content);
        } else {
            const data = await ProductService.getProductList("", "", "", "", page, 20)
            if (data.content != null || data.content != undefined) {
                setProductList(data.content);
                setTotalPages(data.totalPages);
            } else {
                setProductList([]);
                setTotalPages(1);
                Swal.fire({
                    icon: 'error',
                    title: 'Không tìm thấy dữ liệu!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    }
        useEffect(() => {
            getListProduct(currentPage);
        }, [])
        console.log(localStorage.getItem("JWT"));
        return (
            <div>
                <section id="hero" style={{
                    backgroundImage: 'url(https://i.pinimg.com/originals/23/ea/fe/23eafe44f1d4782b3a2f6fbf9c9b891c.jpg)',
                    height: '800px'
                }}>
                    <div className="container padding-large">
                        <div className="row">
                            <div className="col-md-6 offset-md-6 text-center">
                                <p className="header-top mb-4" style={{color: 'yellow'}}>Provide the best equipment for
                                    you
                                    to win.</p>
                                <h2 className="display-1 text-white mb-5">PaintBall equipment supply</h2>
                                <button type="button" className="btn btn-outline-primary align-items-center ">
                                    Learn More
                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about">
                    <div style={{overflow: 'hidden'}}>
                        <div className="container-fluid border-bottom" data-aos="zoom-out">
                            <div className="container">
                                <div className="row align-items-center ">
                                    <div className="col-md-6 px-5 padding-medium pe-5 border-end">
                                        <p className="header-top mb-3">Why choose us</p>
                                        <h2 className="display-4 ">always remember turbo to keep your car clean</h2>
                                    </div>
                                    <div className="col-md-6 padding-medium-2 ps-md-5">
                                        <p className="ms-md-5 ">Odio a faucibus cras lacus felis in enim. In tincidunt
                                            in
                                            tortor ligula
                                            risus
                                            nulla
                                            blandit. Et augue sed urna nisi augue. Amet nisi iaculis suspendisse
                                            fermentum
                                            curabitur
                                            feugiat. Velit sed ante in nisl amet sapien. Mauris a ullamcorper ut
                                            iaculis. Et
                                            massa
                                            non
                                            eu ac
                                            tristique egestas consectetur.
                                        </p>
                                        <a href="about.html" className="btn btn-primary ms-5 mt-3 ">About
                                            us <iconify-icon
                                                icon="tabler:arrow-right" className="arrow-icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="process" className="my-5">
                    <div style={{overflow: 'hidden'}}>
                        <div className="container" data-aos="zoom-out">
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="py-3 py-md-5 px-3">
                                        <h4 className="mb-3"><span className="heading-color">01.</span> Booking</h4>
                                        <p>Eget magna fermentum iaculis diam phasellus vestibulum lorem eget mauris
                                            pharetra
                                            et.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="py-3 py-md-5 px-3">
                                        <h4 className="mb-3"><span className="heading-color">02.</span> inspection</h4>
                                        <p>Velit sed ante in nisl amet sapien. Mauris a ullamcorper ut iaculis. Et massa
                                            non
                                            eu ac
                                            tristique.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="py-3 py-md-5 px-3">
                                        <h4 className="mb-3"><span className="heading-color">03.</span> Valuation</h4>
                                        <p>In tincidunt in tortor ligula risus nulla blandit eget mauris ete
                                            pharetraeget
                                            etem.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="py-3 py-md-5 px-3">
                                        <h4 className="mb-3"><span className="heading-color">04.</span> Completion</h4>
                                        <p>Mauris a ullamcorper ut iaculis. Et massa non eu ac tristique ligula risus
                                            egestas
                                            consectetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="project" className="py-5"
                         style={{backgroundImage: 'url(https://hapotravel.com/wp-content/uploads/2023/04/tron-bo-25-hinh-nen-den-dep-mat-cap-nhat-moi-nhat_15.jpg)'}}>
                    <div style={{overflow: 'hidden'}}>
                        <div data-aos="zoom-out">
                            <div className="px-5 container position-relative d-sm-flex py-5 mt-5 mb-2">
                                <div>
                                    <p className="header-top mb-3">Gallery</p>
                                    <h2 className=" text-white display-4 ">Latest Projects</h2>
                                </div>
                                <div className="swiper-arrow position-absolute end-0 mt-sm-5 ms-3">
                                    <iconify-icon icon="teenyicons:arrow-left-solid" className="icon-arrow-left me-3"/>
                                    <iconify-icon icon="teenyicons:arrow-right-solid" className="icon-arrow-right"/>
                                </div>
                            </div>
                            <div className="container px-5">
                                <div className="swiper project-swiper mb-4">
                                    <div className="swiper-wrapper">
                                        {productList.map((p) =>(
                                        <div className="swiper-slide">
                                            <div className="item">
                                                <a href="images/project1.jpg" title="Car Wash" className="image-link">
                                                    <img className="portfolio-img img-fluid" style={{width: '300px'}}
                                                         src={p.img}
                                                         alt=""/>
                                                    <div
                                                        className="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                                        <p style={{color: '#f8f7f6', background: '#575050'}}>{p.name}</p>
                                                        <h3 style={{color: '#fcfbfb', background: '#575050'}}>{p.description}</h3>
                                                        <h3 style={{color: '#fcfbfb', background: '#575050'}}>{p.price}</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        ))}
                                        {/*<div className="swiper-slide">*/}
                                        {/*    <div className="item">*/}
                                        {/*        <a href="images/project2.jpg" title="Car Wash" className="image-link">*/}
                                        {/*            <img className="portfolio-img img-fluid" style={{width: '300px'}}*/}
                                        {/*                 src="https://m.media-amazon.com/images/I/61s6l77J98L._AC_UF1000,1000_QL80_.jpg"*/}
                                        {/*                 alt=""/>*/}
                                        {/*            <div*/}
                                        {/*                className="description position-absolute top-50 start-50 translate-middle text-center p-3">*/}
                                        {/*                <p style={{color: '#f8f7f6', background: '#575050'}}>CB1911</p>*/}
                                        {/*                <h3 style={{color: '#fcfbfb', background: '#575050'}}>with*/}
                                        {/*                    mysterious black</h3>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="swiper-slide">*/}
                                        {/*    <div className="item">*/}
                                        {/*        <a href="images/project3.jpg" title="Car Wash" className="image-link">*/}
                                        {/*            <img className="portfolio-img img-fluid" style={{width: '300px'}}*/}
                                        {/*                 src="https://eastcoastpaintball.com/cdn/shop/products/Frame788_1200x.png?v=1680489364"*/}
                                        {/*                 alt=""/>*/}
                                        {/*            <div*/}
                                        {/*                className="description position-absolute top-50 start-50 translate-middle text-center p-3">*/}
                                        {/*                <p style={{color: '#f8f7f6', background: '#575050'}}>CB1843</p>*/}
                                        {/*                <h3 style={{color: '#fcfbfb', background: '#575050'}}>with*/}
                                        {/*                    mysterious black</h3>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="swiper-slide">*/}
                                        {/*    <div className="item">*/}
                                        {/*        <a href="images/project4.jpg" title="Car Wash" className="image-link">*/}
                                        {/*            <img className="portfolio-img img-fluid" style={{width: '300px'}}*/}
                                        {/*                 src="https://i.pinimg.com/474x/69/16/6b/69166b4dc8e8bddb3e78b2978dde0c3d.jpg"*/}
                                        {/*                 alt=""/>*/}
                                        {/*            <div*/}
                                        {/*                className="description position-absolute top-50 start-50 translate-middle text-center p-3">*/}
                                        {/*                <p style={{color: '#f8f7f6', background: '#575050'}}>CB1568</p>*/}
                                        {/*                <h3 style={{color: '#fcfbfb', background: '#575050'}}>with*/}
                                        {/*                    mysterious black</h3>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="swiper-slide">*/}
                                        {/*    <div className="item">*/}
                                        {/*        <a href="images/project1.jpg" title="Car Wash" className="image-link">*/}
                                        {/*            <img className="portfolio-img img-fluid" style={{width:'300px'}} src="https://m.media-amazon.com/images/I/61s6l77J98L._AC_UF1000,1000_QL80_.jpg" alt="" />*/}
                                        {/*            <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">*/}
                                        {/*                <p className="text-white">BMW Car</p>*/}
                                        {/*                <h3 className="text-white">External Hand Wash</h3>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="swiper-slide">*/}
                                        {/*    <div className="item">*/}
                                        {/*        <a href="images/project2.jpg" title="Car Wash" className="image-link">*/}
                                        {/*            <img className="portfolio-img img-fluid" style={{width:'300px'}} src="https://m.media-amazon.com/images/I/51LDn3CzMCL._AC_SY1000_.jpg" alt="" />*/}
                                        {/*            <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">*/}
                                        {/*                <p className="text-white">BMW Car</p>*/}
                                        {/*                <h3 className="text-white">External Hand Wash</h3>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="swiper-slide">*/}
                                        {/*    <div className="item">*/}
                                        {/*        <a href="images/project3.jpg" title="Car Wash" className="image-link">*/}
                                        {/*            <img className="portfolio-img img-fluid" style={{width:'300px'}} src="https://tiimg.tistatic.com/fp/1/007/387/ready-play-paintball-equipment-package-kit-297.jpg" alt="" />*/}
                                        {/*            <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">*/}
                                        {/*                <p className="text-white">BMW Car</p>*/}
                                        {/*                <h3 className="text-white">External Hand Wash</h3>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="swiper-slide">*/}
                                        {/*    <div className="item">*/}
                                        {/*        <a href="images/project4.jpg" title="Car Wash" className="image-link">*/}
                                        {/*            <img className="portfolio-img img-fluid" style={{width:'300px'}} src="https://cdn11.bigcommerce.com/s-n3wox/images/stencil/1280x1280/products/10264/33074/Valken-M17-PP__39796.1655334592.jpg?c=2&imbypass=on" alt="" />*/}
                                        {/*            <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">*/}
                                        {/*                <p className="text-white">BMW Car</p>*/}
                                        {/*                <h3 className="text-white">External Hand Wash</h3>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center pb-5 mb-5">
                                <a href="project.html" className="btn btn-primary mt-5 ">Browse projects <iconify-icon
                                    icon="tabler:arrow-right" className="arrow-icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="price" className="my-5">
                    <div style={{overflow: 'hidden'}}>
                        <div className="container py-5" data-aos="zoom-out">
                            <p className="header-top">Pricing plans</p>
                            <h2 className="display-4 mb-5 ">Wash packages</h2>
                            <ul className="nav nav-tabs my-3" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link me-4 px-4 py-1 mb-2 active" id="regular-tab"
                                            data-bs-toggle="tab" data-bs-target="#regular-tab-pane" type="button"
                                            role="tab"
                                            aria-controls="regular-tab-pane" aria-selected="true">Gun
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link me-4 px-4 py-1 mb-2" id="medium-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#medium-tab-pane" type="button" role="tab"
                                            aria-controls="medium-tab-pane" aria-selected="false">mark
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link me-4 px-4 py-1 mb-2" id="van-tab" data-bs-toggle="tab"
                                            data-bs-target="#van-tab-pane" type="button" role="tab"
                                            aria-controls="van-tab-pane" aria-selected="false">armor
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link me-4 px-4 py-1 mb-2" id="truck-tab" data-bs-toggle="tab"
                                            data-bs-target="#truck-tab-pane" type="button" role="tab"
                                            aria-controls="truck-tab-pane" aria-selected="false">elbow pads
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link me-4 px-4 py-1 mb-2" id="cargo-tab" data-bs-toggle="tab"
                                            data-bs-target="#cargo-tab-pane" type="button" role="tab"
                                            aria-controls="cargo-tab-pane" aria-selected="false">knee pads
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="regular-tab-pane" role="tabpanel"
                                     aria-labelledby="regular-tab" tabIndex={0}>
                                    <div className="row py-4">
                                        <div className="col-lg-3 pb-4">
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Basic</p>
                                                <h2 className="display-5 mb-5">$16.95</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://impactfull-9512.kxcdn.com/wp-content/uploads/2017/02/CRONUS-OD-2-min.jpg"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 pb-4">
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Deluxe</p>
                                                <h2 className="display-5 mb-5">$29.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://www.scvillage.com/cdn/shop/files/IMG_4820.jpg?v=1685161334"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 pb-4">
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Ultimate</p>
                                                <h2 className="display-5 mb-5">$44.40</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://eastcoastpaintball.com/cdn/shop/products/Tippmann_Sierra_One_Black_Paintball_Gun_Front_Oblique_View__73719_1200x1200_crop_center.jpg?v=1669895894"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 pb-4">
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">ultra ultimate</p>
                                                <h2 className="display-5 mb-5">$70.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://i.ebayimg.com/images/g/7ioAAOSwQndgM1nn/s-l600.jpg"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="medium-tab-pane" role="tabpanel"
                                     aria-labelledby="medium-tab" tabIndex={0}>
                                    <div className="row py-4">
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={0}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Basic</p>
                                                <h2 className="display-5 mb-5">$18.95</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://cdn11.bigcommerce.com/s-utijnwwvdm/images/stencil/1280x1280/products/74320/233647/c214b6b3cce6f650f129e66960f11724da691a0cd5ad28eb29ac905fc8daa33f__65825.1687799681.jpg?c=1"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={300}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Deluxe</p>
                                                <h2 className="display-5 mb-5">$30.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://cdn11.bigcommerce.com/s-i7rtxdhtek/images/stencil/1280x1280/products/86666/97612/JTFLEX8GREY-2__23438.1681478850.png?c=1"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={600}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Ultimate</p>
                                                <h2 className="display-5 mb-5">$49.40</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://cdn11.bigcommerce.com/s-utijnwwvdm/images/stencil/1280x1280/products/103396/233648/990c08ded97a816232b39322734fa45727953d5e2a84e4e7de9a63968d0ceddf__01983.1687799697.jpg?c=1"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={900}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">ultra ultimate</p>
                                                <h2 className="display-5 mb-5">$80.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://i.redd.it/96df8i5tolsa1.jpg" alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="van-tab-pane" role="tabpanel"
                                     aria-labelledby="van-tab"
                                     tabIndex={0}>
                                    <div className="row py-4">
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={0}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Basic</p>
                                                <h2 className="display-5 mb-5">$20.95</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://i.ebayimg.com/images/g/4dYAAOSw3opbbWGa/s-l1200.jpg"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={300}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Deluxe</p>
                                                <h2 className="display-5 mb-5">$33.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://sc04.alicdn.com/kf/HTB13sVyd7yWBuNjy0Fpq6yssXXaw.jpg"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={600}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Ultimate</p>
                                                <h2 className="display-5 mb-5">$54.40</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://i.pinimg.com/originals/49/13/99/4913992f127b95da4a2ce64fa7c86731.jpg"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={900}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">ultra ultimate</p>
                                                <h2 className="display-5 mb-5">$90.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://m.media-amazon.com/images/I/614tpPHKfUL._AC_UF894,1000_QL80_.jpg"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="truck-tab-pane" role="tabpanel"
                                     aria-labelledby="truck-tab" tabIndex={0}>
                                    <div className="row py-4">
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={0}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Basic</p>
                                                <h2 className="display-5 mb-5">$30.95</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://eastcoastpaintball.com/cdn/shop/products/HK_Crash_Camo_Arm_Pad_1_1200x.jpg?v=1653141164"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={300}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Deluxe</p>
                                                <h2 className="display-5 mb-5">$40.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://paintball.tippmannparts.com/photos/products/12012-2.jpg"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={600}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Ultimate</p>
                                                <h2 className="display-5 mb-5">$68.40</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://www.hkarmy.com/cdn/shop/products/HK_HSTL_Pads_Front_Back_01.jpg?v=1535936317"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={900}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">ultra ultimate</p>
                                                <h2 className="display-5 mb-5">$101.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://www.hkarmy.com/cdn/shop/products/new-crashpadsarm.jpg?v=1653343937"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cargo-tab-pane" role="tabpanel"
                                     aria-labelledby="cargo-tab" tabIndex={0}>
                                    <div className="row py-4">
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={0}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Basic</p>
                                                <h2 className="display-5 mb-5">$50.95</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://www.hkarmy.com/cdn/shop/products/new-crashpads_1200x.jpg?v=1653343677"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={300}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Deluxe</p>
                                                <h2 className="display-5 mb-5">$78.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://cdn11.bigcommerce.com/s-utijnwwvdm/images/stencil/original/products/71641/305932/2116b521d5ab5e80dd975dd24d1eb9c3fc2ea88b1f22948a5d4135520ec49cb7__53938.1693505539.jpg?c=1"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={600}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">Ultimate</p>
                                                <h2 className="display-5 mb-5">$97.40</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://cdn11.bigcommerce.com/s-utijnwwvdm/images/stencil/1280x1280/products/71643/305956/bc81ede11c2b4206123122d27b1063c929df6816ed3ee0abfbf2fe469f610e1b__65637.1693505565.jpg?c=1"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6 pb-4" data-aos="fade-up"
                                             data-aos-easing="ease-in-sine" data-aos-delay={900}>
                                            <div className="py-5 plan-post text-center">
                                                <p className="header-top">ultra ultimate</p>
                                                <h2 className="display-5 mb-5">$150.50</h2>
                                                <div className="price-option">
                                                    <img className="portfolio-img img-fluid"
                                                         src="https://cdn11.bigcommerce.com/s-utijnwwvdm/images/stencil/1280x1280/products/69809/305827/fb0b201d662d0d0e008db14e5d666918ef704d43ea791b10f2de6db8fd3ada7e__27612.1693505422.jpg?c=1"
                                                         alt=""/>
                                                </div>
                                                <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book
                                                    now
                                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="blog" className="my-5">
                    <div style={{overflow: 'hidden'}}>
                        <div className="container  py-5" data-aos="zoom-out">
                            <p className="text-center header-top">Our blog</p>
                            <h2 className="text-center display-4 mb-5 ">Latest posts</h2>
                            <div className="row blog-content border-bottom">
                                <div className="col-md-6 offset-md-3">
                                    <div className="py-3 mt-3 d-flex">
                                        <div className="mt-1">
                                            <h4 className="heading-color">09</h4>
                                            <p>Feb</p>
                                        </div>
                                        <div className="ms-5 mt-1">
                                            <a href className="text-decoration-none">
                                                <p className="blog-topic text-uppercase mb-1">Car - Tips</p>
                                            </a>
                                            <a href="#" className="text-decoration-none">
                                                <h4 className="blog-title">Main thing to remember while washing car</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row blog-content border-bottom">
                                <div className="col-md-6 offset-md-3">
                                    <div className=" py-3 mt-3 d-flex ">
                                        <div className>
                                            <h4 className="heading-color">11</h4>
                                            <p>Feb</p>
                                        </div>
                                        <div className="ms-5 ">
                                            <a href className="text-decoration-none">
                                                <p className="blog-topic text-uppercase mb-1">Car - Tips</p>
                                            </a>
                                            <a href="#" className="text-decoration-none">
                                                <h4 className="blog-title">Important points for keeping your car
                                                    clean</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row blog-content border-bottom">
                                <div className="col-md-6 offset-md-3">
                                    <div className="py-3 mt-3 d-flex">
                                        <div className="mt-1">
                                            <h4 className="heading-color">15</h4>
                                            <p>Feb</p>
                                        </div>
                                        <div className="ms-5 mt-1">
                                            <a href className="text-decoration-none">
                                                <p className="blog-topic text-uppercase mb-1">Car - Tips</p>
                                            </a>
                                            <a href="#" className="text-decoration-none">
                                                <h4 className="blog-title">10 best car wash to Book your car wash
                                                    online</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <a href="blog.html" className="btn btn-primary mt-5">Browse projects
                                    <iconify-icon icon="tabler:arrow-right" className="arrow-icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="video">
                    <div style={{overflow: 'hidden'}}>
                        <div className="video-content position-relative open-up" data-aos="zoom-out">
                            <div className="video-bg">
                                <img src="images/vid-img.jpg" alt="video" className="video-image img-fluid"/>
                            </div>
                            <div className="video-player position-absolute">
                                <a className="youtube" href="https://youtu.be/cpx2r52E08o?si=XY2xTsL3rr-JraBR">
                                    <iconify-icon icon="ion:play-sharp" className="video-icon p-5"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="info">
                    <div style={{overflow: 'hidden'}}>
                        <div className="container" data-aos="zoom-out">
                            <div className="row align-items-center ">
                                <div className="col-md-4 text-center padding-medium border-end">
                                    <p className="header-top mb-4">Why choose us</p>
                                    <p className="mb-2">+123 222 333 44</p>
                                    <p className="mb-2">+123 666 777 88</p>
                                </div>
                                <div className="col-md-4 text-center padding-medium border-end">
                                    <p className="header-top mb-4">Working hours</p>
                                    <p className="mb-2">Mon - Fri: 6 am - 6 pm</p>
                                    <p className="mb-2">Sun - Sat: 9 am - 4 pm</p>
                                </div>
                                <div className="col-md-4 text-center padding-medium">
                                    <p className="header-top mb-4">Our address</p>
                                    <p className="mb-2">13 Rue Montmartre 75001, Paris, France</p>
                                    <p className="mb-2">13 Rue Martre 75001, Paris, France</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* script ================================================== */}
            </div>
        );
    }