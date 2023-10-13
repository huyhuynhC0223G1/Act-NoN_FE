import React from "react";

export default function Footer(){
    return(
        <>
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
                            <p>© 2023 RaiNoN, Carwash | All Rights Reserved</p>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-end">
                            <p className>© 2023 Designed By:<a href="https://templatesjungle.com/" className="website-link text-decoration-none" target="_blank"> <b>TemplatesJungle</b></a></p>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
}