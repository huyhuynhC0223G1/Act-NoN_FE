import React, {useEffect, useState} from "react";
import "../components/style.css"
import * as ProductService from '../service/ProductService'
import Logo from "./images/Logo main.png"
import Swal from "sweetalert2";
import VideoPlayer from "./VideoPlayer";
import {Link, useNavigate} from "react-router-dom";
import * as CartService from '../service/CartService'
import {ToastContainer, toast} from "react-toastify";
import {infoAppUserByJwtToken} from "../service/LoginService";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [searchName, setSearchName] = useState("");
    const [typeName, setTypeName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [productId, setProductId] = useState("");
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
        getListProduct();
    }, [])
    console.log(localStorage.getItem("JWT"));

    const [activeTab, setActiveTab] = useState('Gun');
    const addProductToCart = async (id, e) => {
        e.preventDefault();
        const isLoggedIn = infoAppUserByJwtToken();
        if (!isLoggedIn) {
            Swal.fire("Please log in to your account!", "", "warning");
            navigate("/login");
        } else {
            const response = await CartService.addProductToCart(id, 1);
            toast.success("Added product successfully");
        }
    };
    const handleTabClick = (typeName) => {
        setActiveTab(typeName);
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const filteredProducts = productList.filter((product) => product.productType.name === activeTab);

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
                                ALL PRODUCT >>
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
                                    <h2 className="display-4 ">ALWAYS REMEMBER ACTNON FOR THE BEST PRODUCTS</h2>
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
                                <p className="header-top mb-3">Combo</p>
                                <h2 className=" text-white display-4 ">Latest Products</h2>
                            </div>
                            <div className="swiper-arrow position-absolute end-0 mt-sm-5 ms-3">
                                <iconify-icon icon="teenyicons:arrow-left-solid" className="icon-arrow-left me-3"/>
                                <iconify-icon icon="teenyicons:arrow-right-solid" className="icon-arrow-right"/>
                            </div>
                        </div>

                        <div className="container px-5">
                            <div className="swiper project-swiper mb-4">
                                <Carousel responsive={responsive}>
                                    {productList
                                        .filter((product) => product.productType.name === "Combo")
                                        .map((product) => (
                                            <div className="col-lg pb-4 px-3" key={product.id}>
                                                <div className="py-5 plan-post text-center">
                                                    <p className="header-top">{product.name}</p>
                                                    <h2 className="display-5 mb-5">$ {product.price}</h2>
                                                    <div className="price-option">
                                                        <Link to={`/product/detail/${product.id}`}>
                                                            <a>
                                                                <img
                                                                    className="portfolio-img img-fluid"
                                                                    style={{ maxHeight: '272px' }}
                                                                    src={product.img}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <a
                                                        href=""
                                                        className="btn btn-primary mt-3 px-4 py-3 mx-2"
                                                        onClick={(e) => addProductToCart(product.id, e)}
                                                    >
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                </Carousel>
                            </div>
                        </div>
                        <div className="text-center pb-5 mb-5">
                            <a href="project.html" className="btn btn-primary mt-5 ">ALL Products <iconify-icon
                                icon="tabler:arrow-right" className="arrow-icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="price" className="">
                <div style={{overflow: 'hidden'}}>
                    <div className="px-5 container" style={{marginTop: '180px'}} data-aos="zoom-out">
                        <p className="header-top">retail products</p>
                        <h2 className="display-4 mb-5">New and best products</h2>
                        <ul className="nav nav-tabs my-3" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link me-4 px-4 py-1 mb-2 ${activeTab === 'Gun' ? 'active' : ''}`}
                                    id="regular-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#regular-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="regular-tab-pane"
                                    aria-selected={activeTab === 'Gun'}
                                    onClick={() => handleTabClick('Gun')}
                                >
                                    Gun
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link me-4 px-4 py-1 mb-2 ${activeTab === 'Mark' ? 'active' : ''}`}
                                    id="medium-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#mark-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="mark-tab-pane"
                                    aria-selected={activeTab === 'Mark'}
                                    onClick={() => handleTabClick('Mark')}
                                >
                                    Mark
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link me-4 px-4 py-1 mb-2 ${activeTab === 'Armor' ? 'active' : ''}`}
                                    id="van-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#van-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="van-tab-pane"
                                    aria-selected={activeTab === 'Armor'}
                                    onClick={() => handleTabClick('Armor')}
                                >
                                    Armor
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link me-4 px-4 py-1 mb-2 ${activeTab === 'Glove' ? 'active' : ''}`}
                                    id="truck-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#truck-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="truck-tab-pane"
                                    aria-selected={activeTab === 'Glove'}
                                    onClick={() => handleTabClick('Glove')}
                                >
                                    Elbow pads
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link me-4 px-4 py-1 mb-2 ${activeTab === 'Knee pads' ? 'active' : ''}`}
                                    id="cargo-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#cargo-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="cargo-tab-pane"
                                    aria-selected={activeTab === 'Knee pads'}
                                    onClick={() => handleTabClick('Knee pads')}
                                >
                                    Knee pads
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="regular-tab-pane" role="tabpanel"
                                 aria-labelledby="regular-tab" tabIndex={0}>
                                <div className="row py-4">
                                    <Carousel responsive={responsive}>
                                        {filteredProducts.map((product) => (
                                            <div className="col-lg pb-4 px-3" key={product.id}>
                                                <div className="py-5 plan-post text-center">
                                                    <p className="header-top">{product.name}</p>
                                                    <h2 className="display-5 mb-5">$ {product.price}</h2>
                                                    <div className="price-option">
                                                        <img className="portfolio-img img-fluid" src={product.img}
                                                             alt=""/>
                                                    </div>

                                                    <a href="" className="btn btn-primary mt-3 px-4 py-3 mx-2"
                                                       onClick={(e) => addProductToCart(product.id, e)}>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="mark-tab-pane" role="tabpanel"
                                 aria-labelledby="medium-tab" tabIndex={0}>
                                <div className="row py-4">
                                    <Carousel responsive={responsive}>
                                        {filteredProducts.map((product) => (
                                            <div className="col-lg pb-4 px-3" key={product.id}>
                                                <div className="py-5 plan-post text-center">
                                                    <p className="header-top">{product.name}</p>
                                                    <h2 className="display-5 mb-5">$ {product.price}</h2>
                                                    <div className="price-option">
                                                        <img className="portfolio-img img-fluid" src={product.img}
                                                             alt=""/>
                                                    </div>
                                                    <a href="" className="btn btn-primary mt-3 px-4 py-3 mx-2"
                                                       onClick={(e) => addProductToCart(product.id, e)}>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="van-tab-pane" role="tabpanel" aria-labelledby="van-tab"
                                 tabIndex={0}>
                                <div className="row py-4">
                                    <Carousel responsive={responsive}>
                                        {filteredProducts.map((product) => (
                                            <div className="col-lg pb-4 px-3" key={product.id}>
                                                <div className="py-5 plan-post text-center">
                                                    <p className="header-top">{product.name}</p>
                                                    <h2 className="display-5 mb-5">$ {product.price}</h2>
                                                    <div className="price-option">
                                                        <img className="portfolio-img img-fluid" src={product.img}
                                                             alt=""/>
                                                    </div>
                                                    <a href="" className="btn btn-primary mt-3 px-4 py-3 mx-2"
                                                       onClick={(e) => addProductToCart(product.id, e)}>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="truck-tab-pane" role="tabpanel"
                                 aria-labelledby="truck-tab" tabIndex={0}>
                                <div className="row py-4">
                                    <Carousel responsive={responsive}>
                                        {filteredProducts.map((product) => (
                                            <div className="col-lg pb-4 px-3" key={product.id}>
                                                <div className="py-5 plan-post text-center">
                                                    <p className="header-top">{product.name}</p>
                                                    <h2 className="display-5 mb-5">$ {product.price}</h2>
                                                    <div className="price-option">
                                                        <img className="portfolio-img img-fluid" src={product.img}
                                                             alt=""/>
                                                    </div>
                                                    <a href="" className="btn btn-primary mt-3 px-4 py-3 mx-2"
                                                       onClick={(e) => addProductToCart(product.id, e)}>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="cargo-tab-pane" role="tabpanel"
                                 aria-labelledby="cargo-tab" tabIndex={0}>
                                <div className="row py-4">
                                    <Carousel responsive={responsive}>
                                        {filteredProducts.map((product) => (
                                            <div className="col-lg pb-4 px-3" key={product.id}>
                                                <div className="py-5 plan-post text-center">
                                                    <p className="header-top">{product.name}</p>
                                                    <h2 className="display-5 mb-5">$ {product.price}</h2>
                                                    <div className="price-option">
                                                        <img className="portfolio-img img-fluid" src={product.img}
                                                             alt=""/>
                                                    </div>
                                                    <a href="" className="btn btn-primary mt-3 px-4 py-3 mx-2"
                                                       onClick={(e) => addProductToCart(product.id, e)}>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
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
                                        <a href="" className="text-decoration-none">
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
            <section id="trailer" className="video">
                <div style={{overflow: 'hidden'}}>
                    <div className="video-content position-relative open-up" data-aos="zoom-out">
                        <div className="video-bg" style={{color: 'white'}}>
                            <a className="youtube video-icon" href="https://youtu.be/cpx2r52E08o?si=XY2xTsL3rr-JraBR">
                                <img src="https://www.ypc.co.uk/wp-content/uploads/2023/04/paintball-artwork.jpg"
                                     alt="video" className="video-image img-fluid"/>
                                <iconify-icon icon="ion:play-sharp" className="video-icon p-5 text-white"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="competition">
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
                <ToastContainer autoClose={1000} className="toast-position"/>
            </section>

            {/* script ================================================== */}
        </div>
    );
}