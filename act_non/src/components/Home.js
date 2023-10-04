import React from "react";
import "../components/style.css"
import Logo from "./images/Logo main.png"
export default function Home(){

    return(
        <div>



            <nav className="navbar fixed-top navbar-expand-lg container-fluid p-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><p style={{color:"#fdc449", fontSize:'60px'}}>▫ᵒ༙༙྇𝗔𝗰𝘁 𝗡𝗼𝗡</p></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <iconify-icon icon="system-uicons:menu-hamburger" className="hamburger-menu" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav align-items-center justify-content-end justify-content-xxl-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  active mx-2 px-3 mb-2 mb-lg-0" aria-current="page" href="index.html">home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-white text-uppercase mx-2 px-3 mb-2 mb-lg-0 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="about.html" className="dropdown-item text-uppercase ">About <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="blog.html" className="dropdown-item text-uppercase ">Blog <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="blog-single.html" className="dropdown-item text-uppercase ">Blog-Single <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="booking.html" className="dropdown-item text-uppercase ">Booking <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="services.html" className="dropdown-item text-uppercase ">Services <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="services-single.html" className="dropdown-item text-uppercase ">Service-Single
                                            <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="project.html" className="dropdown-item text-uppercase ">Project <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="pricing.html" className="dropdown-item text-uppercase ">Pricing <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="contact.html" className="dropdown-item text-uppercase ">Contact <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="team.html" className="dropdown-item text-uppercase ">Our Team <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="review.html" className="dropdown-item text-uppercase ">Reviews <span className="badge bg-secondary">Pro</span></a></li>
                                        {/*                                <li><a href="faq.html" class="dropdown-item text-uppercase ">FAQs <span*/}
                                        {/*                                            class="badge bg-secondary">Pro</span></a></li>*/}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0" href="#price">ComBo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0" href="#">Gun</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0" href="#blog">Mask</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0" href="#project">Ammunition box</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0" href="#">Armor</a>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*    <a href="https://templatesjungle.gumroad.com/l/turbo-car-wash-bootstrap-website-template" className="btn btn-outline-primary mx-2 px-3 py-2">Get pro<iconify-icon icon="tabler:arrow-right" className="arrow-icon" />*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                            <div className="  d-flex mt-5 mt-lg-0 ps-lg-5 align-items-center justify-content-end ">
                                <ul className="navbar-nav social-div justify-content-end align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center px-3" href="#">
                                            <iconify-icon icon="ri:facebook-fill" className="social-icon text-white" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center px-3" href="#">
                                            <iconify-icon icon="ri:instagram-line" className="social-icon text-white" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center px-3" href="#">
                                            <iconify-icon icon="ri:twitter-fill" className="social-icon text-white" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center px-3" href="#">
                                            <iconify-icon icon="ri:linkedin-fill" className="social-icon text-white" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center px-3" href="#">
                                            <iconify-icon icon="ri:youtube-fill" className="social-icon text-white" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section id="hero" style={{backgroundImage: 'url(https://i.pinimg.com/originals/23/ea/fe/23eafe44f1d4782b3a2f6fbf9c9b891c.jpg)', height:'800px'}}>
                <div className="container padding-large">
                    <div className="row">
                        <div className="col-md-6 offset-md-6 text-center">
                            <p className="header-top mb-4" style={{color: 'yellow'}}>Provide the best equipment for you to win.</p>
                            <h2 className="display-1 text-white mb-5">PaintBall equipment supply</h2>
                            <button type="button" className="btn btn-outline-primary align-items-center ">
                                Learn More
                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
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
                                <div className="col-md-6 padding-medium pe-5 border-end">
                                    <p className="header-top mb-3">Why choose us</p>
                                    <h2 className="display-4 ">always remember turbo to keep your car clean</h2>
                                </div>
                                <div className="col-md-6 padding-medium-2 ps-md-5">
                                    <p className="ms-md-5 ">Odio a faucibus cras lacus felis in enim. In tincidunt in tortor ligula
                                        risus
                                        nulla
                                        blandit. Et augue sed urna nisi augue. Amet nisi iaculis suspendisse fermentum curabitur
                                        feugiat. Velit sed ante in nisl amet sapien. Mauris a ullamcorper ut iaculis. Et massa
                                        non
                                        eu ac
                                        tristique egestas consectetur.
                                    </p>
                                    <a href="about.html" className="btn btn-primary ms-5 mt-3 ">About us <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
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
                                    <h4 className="mb-3"> <span className="heading-color">01.</span> Booking</h4>
                                    <p>Eget magna fermentum iaculis diam phasellus vestibulum lorem eget mauris pharetra et.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="py-3 py-md-5 px-3">
                                    <h4 className="mb-3"> <span className="heading-color">02.</span> inspection</h4>
                                    <p>Velit sed ante in nisl amet sapien. Mauris a ullamcorper ut iaculis. Et massa non eu ac
                                        tristique.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="py-3 py-md-5 px-3">
                                    <h4 className="mb-3"> <span className="heading-color">03.</span> Valuation</h4>
                                    <p>In tincidunt in tortor ligula risus nulla blandit eget mauris ete pharetraeget etem.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="py-3 py-md-5 px-3">
                                    <h4 className="mb-3"> <span className="heading-color">04.</span> Completion</h4>
                                    <p>Mauris a ullamcorper ut iaculis. Et massa non eu ac tristique ligula risus egestas
                                        consectetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="project" className="py-5" style={{backgroundImage: 'url(images/project-img.jpg)'}}>
                <div style={{overflow: 'hidden'}}>
                    <div data-aos="zoom-out">
                        <div className="container position-relative d-sm-flex py-5 mt-5 mb-2">
                            <div>
                                <p className="header-top mb-3">Gallery</p>
                                <h2 className=" text-white display-4 ">Latest Projects</h2>
                            </div>
                            <div className="swiper-arrow position-absolute end-0 mt-sm-5 ms-3">
                                <iconify-icon icon="teenyicons:arrow-left-solid" className="icon-arrow-left me-3" />
                                <iconify-icon icon="teenyicons:arrow-right-solid" className="icon-arrow-right" />
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="swiper project-swiper mb-4">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <a href="images/project1.jpg" title="Car Wash" className="image-link">
                                                <img className="portfolio-img img-fluid" src="images/project1.jpg" alt="" />
                                                <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                                    <p className="text-white">BMW Car</p>
                                                    <h3 className="text-white">External Hand Wash</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <a href="images/project2.jpg" title="Car Wash" className="image-link">
                                                <img className="portfolio-img img-fluid" src="images/project2.jpg" alt="" />
                                                <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                                    <p className="text-white">BMW Car</p>
                                                    <h3 className="text-white">External Hand Wash</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <a href="images/project3.jpg" title="Car Wash" className="image-link">
                                                <img className="portfolio-img img-fluid" src="images/project3.jpg" alt="" />
                                                <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                                    <p className="text-white">BMW Car</p>
                                                    <h3 className="text-white">External Hand Wash</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <a href="images/project4.jpg" title="Car Wash" className="image-link">
                                                <img className="portfolio-img img-fluid" src="images/project4.jpg" alt="" />
                                                <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                                    <p className="text-white">BMW Car</p>
                                                    <h3 className="text-white">External Hand Wash</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <a href="images/project1.jpg" title="Car Wash" className="image-link">
                                                <img className="portfolio-img img-fluid" src="images/project1.jpg" alt="" />
                                                <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                                    <p className="text-white">BMW Car</p>
                                                    <h3 className="text-white">External Hand Wash</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <a href="images/project2.jpg" title="Car Wash" className="image-link">
                                                <img className="portfolio-img img-fluid" src="images/project2.jpg" alt="" />
                                                <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                                    <p className="text-white">BMW Car</p>
                                                    <h3 className="text-white">External Hand Wash</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <a href="images/project3.jpg" title="Car Wash" className="image-link">
                                                <img className="portfolio-img img-fluid" src="images/project3.jpg" alt="" />
                                                <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                                    <p className="text-white">BMW Car</p>
                                                    <h3 className="text-white">External Hand Wash</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <a href="images/project4.jpg" title="Car Wash" className="image-link">
                                                <img className="portfolio-img img-fluid" src="images/project4.jpg" alt="" />
                                                <div className="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                                    <p className="text-white">BMW Car</p>
                                                    <h3 className="text-white">External Hand Wash</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pb-5 mb-5">
                            <a href="project.html" className="btn btn-primary mt-5 ">Browse projects <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
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
                                <button className="nav-link me-4 px-4 py-1 mb-2 active" id="regular-tab" data-bs-toggle="tab" data-bs-target="#regular-tab-pane" type="button" role="tab" aria-controls="regular-tab-pane" aria-selected="true">regular</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link me-4 px-4 py-1 mb-2" id="medium-tab" data-bs-toggle="tab" data-bs-target="#medium-tab-pane" type="button" role="tab" aria-controls="medium-tab-pane" aria-selected="false">medium</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link me-4 px-4 py-1 mb-2" id="van-tab" data-bs-toggle="tab" data-bs-target="#van-tab-pane" type="button" role="tab" aria-controls="van-tab-pane" aria-selected="false">mini van</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link me-4 px-4 py-1 mb-2" id="truck-tab" data-bs-toggle="tab" data-bs-target="#truck-tab-pane" type="button" role="tab" aria-controls="truck-tab-pane" aria-selected="false">pickup
                                    truck</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link me-4 px-4 py-1 mb-2" id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">cargo
                                    truck</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="regular-tab-pane" role="tabpanel" aria-labelledby="regular-tab" tabIndex={0}>
                                <div className="row py-4">
                                    <div className="col-lg-3 pb-4">
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Basic</p>
                                            <h2 className="display-5 mb-5">$16.95</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pb-4">
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Deluxe</p>
                                            <h2 className="display-5 mb-5">$29.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pb-4">
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Ultimate</p>
                                            <h2 className="display-5 mb-5">$44.40</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Ipsum dolor</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pb-4">
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">ultra ultimate</p>
                                            <h2 className="display-5 mb-5">$70.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> It ir ivamus</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> lit mir iamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="medium-tab-pane" role="tabpanel" aria-labelledby="medium-tab" tabIndex={0}>
                                <div className="row py-4">
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={0}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Basic</p>
                                            <h2 className="display-5 mb-5">$18.95</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={300}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Deluxe</p>
                                            <h2 className="display-5 mb-5">$30.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={600}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Ultimate</p>
                                            <h2 className="display-5 mb-5">$49.40</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Ipsum dolor</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={900}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">ultra ultimate</p>
                                            <h2 className="display-5 mb-5">$80.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> It ir ivamus</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> lit mir iamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="van-tab-pane" role="tabpanel" aria-labelledby="van-tab" tabIndex={0}>
                                <div className="row py-4">
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={0}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Basic</p>
                                            <h2 className="display-5 mb-5">$20.95</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={300}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Deluxe</p>
                                            <h2 className="display-5 mb-5">$33.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={600}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Ultimate</p>
                                            <h2 className="display-5 mb-5">$54.40</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Ipsum dolor</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={900}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">ultra ultimate</p>
                                            <h2 className="display-5 mb-5">$90.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> It ir ivamus</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> lit mir iamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="truck-tab-pane" role="tabpanel" aria-labelledby="truck-tab" tabIndex={0}>
                                <div className="row py-4">
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={0}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Basic</p>
                                            <h2 className="display-5 mb-5">$30.95</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={300}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Deluxe</p>
                                            <h2 className="display-5 mb-5">$40.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={600}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Ultimate</p>
                                            <h2 className="display-5 mb-5">$68.40</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Ipsum dolor</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={900}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">ultra ultimate</p>
                                            <h2 className="display-5 mb-5">$101.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> It ir ivamus</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> lit mir iamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="cargo-tab-pane" role="tabpanel" aria-labelledby="cargo-tab" tabIndex={0}>
                                <div className="row py-4">
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={0}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Basic</p>
                                            <h2 className="display-5 mb-5">$50.95</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={300}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Deluxe</p>
                                            <h2 className="display-5 mb-5">$78.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={600}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">Ultimate</p>
                                            <h2 className="display-5 mb-5">$97.40</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Ipsum dolor</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 pb-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay={900}>
                                        <div className="py-5 plan-post text-center">
                                            <p className="header-top">ultra ultimate</p>
                                            <h2 className="display-5 mb-5">$150.50</h2>
                                            <div className="price-option">
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                                <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                                <p><span className="price-tick">✓</span> It ir ivamus</p>
                                                <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                                <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                                <p><span className="price-tick">✓</span> lit mir iamus</p>
                                            </div>
                                            <a href="booking.html" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now
                                                <iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
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
                                            <h4 className="blog-title">Important points for keeping your car clean</h4>
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
                                            <h4 className="blog-title">10 best car wash to Book your car wash online</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="blog.html" className="btn btn-primary mt-5">Browse projects<iconify-icon icon="tabler:arrow-right" className="arrow-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div style={{overflow: 'hidden'}}>
                    <div className="video-content position-relative open-up" data-aos="zoom-out">
                        <div className="video-bg">
                            <img src="images/vid-img.jpg" alt="video" className="video-image img-fluid" />
                        </div>
                        <div className="video-player position-absolute">
                            <a className="youtube" href="https://www.youtube.com/embed/RLHSvmh4rHw">
                                <iconify-icon icon="ion:play-sharp" className="video-icon p-5" />
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
            <section id="footer">
                <div className="container footer-containerG mt-5 mt-md-0 pt-3">
                    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 my-5 py-5 ">
                        <div className=" col-md-3 my-5 mt-md-0 ">
                            <img src="images/logo-dark.png" alt="" className />
                            <p className="my-4">Velit sed ante in nisl amet sapien. Mauris a ullamcorper ut iaculis. Et massa non eu
                                ac tristique assa non eu ac tristique.</p>
                            <div className="d-flex align-items-center ">
                                <a href="#" target="_blank"><iconify-icon className="social-icon-footer active pe-4" icon="mdi:facebook" /></a>
                                <a href="#" target="_blank"><iconify-icon className="social-icon-footer pe-4" icon="mdi:twitter" /></a>
                                <a href="#" target="_blank"><iconify-icon className="social-icon-footer pe-4" icon="mdi:instagram" /></a>
                                <a href="#" target="_blank"><iconify-icon className="social-icon-footer pe-4" icon="mdi:linkedin" /></a>
                                <a href="#" target="_blank"><iconify-icon className="social-icon-footer pe-4" icon="mdi:youtube" /></a>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-1">
                            <h5 className="fs-5 mt-3 mt-md-0 mb-3">About us</h5>
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">About
                                    us</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">WHo are
                                    we</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Why
                                    choose us</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Our
                                    history</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5 className="fs-5 mt-3 mt-md-0 mb-3">Our services</h5>
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Our
                                    history</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Tiring
                                    dressing</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Wheel
                                    shine</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Interior
                                    vacuum</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 ">
                            <h5 className="fs-5 mt-3 mt-md-0 mb-3">Contact us</h5>
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Our
                                    location</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Contact</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Address</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Facebook</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 ">
                            <h5 className="fs-5 mt-3 mt-md-0 mb-3">More info</h5>
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">VEhicle</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">bike</a>
                                </li>
                                <li className="nav-item footer-list mb-3"><a href="#" className="nav-link text-uppercase p-0 ">Scooter</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
                <footer className="d-flex flex-wrap justify-content-between align-items-center border-top" />
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 pt-4">
                        <div className="col-md-6 d-flex align-items-center">
                            <p>© 2023 Turbo, Carwash | All Rights Reserved</p>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-end">
                            <p className>© 2023 Designed By:<a href="https://templatesjungle.com/" className="website-link text-decoration-none" target="_blank"> <b>TemplatesJungle</b></a></p>
                        </div>
                    </footer>
                </div>
            </section>
            {/* script ================================================== */}
        </div>
    );
}