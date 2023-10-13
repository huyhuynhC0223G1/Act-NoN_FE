import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {BiLogOutCircle} from "react-icons/bi";
import Swal from "sweetalert2";
import * as LoginService from '../service/LoginService';

export default function Header() {
    const navigate = useNavigate();
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [userName, setUsername] = useState("");
    console.log(localStorage.getItem("JWT"))


    const getUserName = async () => {
        const response = await LoginService.infoAppUserByJwtToken();
        setUsername(response);
    };

    useEffect(() => {
        getUserName();
    }, []);
    const handleLogOut = () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUsername(undefined);
        Swal.fire({
            title: "Đăng xuất thành công",
            icon: "success",
        });
        navigate("/");
    };
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg container-fluid p-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><p
                        style={{color: "#fdc449", fontSize: '60px'}}>▫ᵒ༙༙྇𝗔𝗰𝘁 𝗡𝗼𝗡</p></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <iconify-icon icon="system-uicons:menu-hamburger" className="hamburger-menu"/>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white text-reset"
                                    data-bs-dismiss="offcanvas" aria-label="Close"/>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav align-items-center justify-content-end justify-content-xxl-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  active mx-2 px-3 mb-2 mb-lg-0"
                                       aria-current="page" href="index.html">home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-white text-uppercase mx-2 px-3 mb-2 mb-lg-0 dropdown-toggle"
                                       data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="about.html" className="dropdown-item text-uppercase ">About <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="blog.html" className="dropdown-item text-uppercase ">Blog <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="blog-single.html"
                                               className="dropdown-item text-uppercase ">Blog-Single <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="booking.html"
                                               className="dropdown-item text-uppercase ">Booking <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="services.html"
                                               className="dropdown-item text-uppercase ">Services <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="services-single.html" className="dropdown-item text-uppercase ">Service-Single
                                            <span className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="project.html"
                                               className="dropdown-item text-uppercase ">Project <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="pricing.html"
                                               className="dropdown-item text-uppercase ">Pricing <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="contact.html"
                                               className="dropdown-item text-uppercase ">Contact <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="team.html" className="dropdown-item text-uppercase ">Our Team <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        <li><a href="review.html"
                                               className="dropdown-item text-uppercase ">Reviews <span
                                            className="badge bg-secondary">Pro</span></a></li>
                                        {/*                                <li><a href="faq.html" class="dropdown-item text-uppercase ">FAQs <span*/}
                                        {/*                                            class="badge bg-secondary">Pro</span></a></li>*/}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       href="#price">ComBo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       href="#">Gun</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       href="#blog">Mask</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       href="#project">Ammunition box</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       href="#">Armor</a>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*    <a href="https://templatesjungle.gumroad.com/l/turbo-car-wash-bootstrap-website-template" className="btn btn-outline-primary mx-2 px-3 py-2">Get pro<iconify-icon icon="tabler:arrow-right" className="arrow-icon" />*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                            <div className="  d-flex mt-5 mt-lg-0 ps-lg-5 align-items-center justify-content-end ">
                                <div className="user-dropdown-list">
                                    {!localStorage.getItem("JWT") && (
                                    <Link to={`/login`}>
                                        <a className="text-white text-uppercase">LOGIN</a>
                                    </Link>
                                    )}
                                    {localStorage.getItem("JWT") ? (
                                        <>
                                            <Link className="user-dropdown-item " style={{ display: 'flex', alignItems: 'center', color: 'white', marginRight: '10px' }}>
                                                <BiLogOutCircle className="me-3 ms-0 text-white" size={25}
                                                                onClick={() => handleLogOut()} />
                                                <div
                                                    className="dropdown-text" style={{color: 'white'}}
                                                    onClick={() => handleLogOut()}
                                                >
                                                    LOGOUT
                                                </div>
                                            </Link>
                                        </>
                                    ) : null}
                                </div>
                                {/*<ul className="navbar-nav social-div justify-content-end align-items-center">*/}
                                {/*    <li className="nav-item">*/}
                                {/*        <a className="nav-link d-flex align-items-center px-3" href="#">*/}
                                {/*            <iconify-icon icon="ri:facebook-fill" className="social-icon text-white" />*/}
                                {/*        </a>*/}
                                {/*    </li>*/}
                                {/*    <li className="nav-item">*/}
                                {/*        <a className="nav-link d-flex align-items-center px-3" href="#">*/}
                                {/*            <iconify-icon icon="ri:instagram-line" className="social-icon text-white" />*/}
                                {/*        </a>*/}
                                {/*    </li>*/}
                                {/*    <li className="nav-item">*/}
                                {/*        <a className="nav-link d-flex align-items-center px-3" href="#">*/}
                                {/*            <iconify-icon icon="ri:twitter-fill" className="social-icon text-white" />*/}
                                {/*        </a>*/}
                                {/*    </li>*/}
                                {/*    <li className="nav-item">*/}
                                {/*        <a className="nav-link d-flex align-items-center px-3" href="#">*/}
                                {/*            <iconify-icon icon="ri:linkedin-fill" className="social-icon text-white" />*/}
                                {/*        </a>*/}
                                {/*    </li>*/}
                                {/*    <li className="nav-item">*/}
                                {/*        <a className="nav-link d-flex align-items-center px-3" href="#">*/}
                                {/*            <iconify-icon icon="ri:youtube-fill" className="social-icon text-white" />*/}
                                {/*        </a>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}