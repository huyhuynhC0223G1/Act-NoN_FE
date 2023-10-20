import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {BiLogOutCircle, BiUser} from "react-icons/bi";
import Swal from "sweetalert2";
import * as LoginService from '../service/LoginService';
import {FiShoppingCart} from "react-icons/fi";

export default function Header() {
    const navigate = useNavigate();
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [userName, setUserName] = useState("");
    console.log(localStorage.getItem("JWT"))

    const [showMenu, setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            setShowLogin(true);
        } else if (location.pathname === "/login") {
            setShowLogin(false);
        } else {
            setShowLogin(true);
        }
    }, [location]);
    useEffect(() => {
        if (location.pathname === '/') {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }, [location]);

    const getUserName = async () => {
        const response = await LoginService.infoAppUserByJwtToken();
        if (response && response.sub) {
            setUserName(response.sub);
        }
        setJwtToken(localStorage.getItem("JWT"));
        console.log(userName);
    };

    useEffect(() => {
        getUserName();
    }, [localStorage.getItem("JWT")]);
    const handleLogOut = () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUserName(undefined);
        Swal.fire({
            title: "Signed out successfully",
            icon: "success",
        });
        navigate("/");
    };
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg container-fluid">
                <div className="container-fluid">
                    <Link to={'/'}><a className="navbar-brand">
                        <p style={{color: "#fdc449", fontSize: '60px', paddingTop: '30px'}}>𝗔𝗰𝘁 𝗡𝗼𝗡</p></a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <iconify-icon icon="system-uicons:menu-hamburger" className="hamburger-menu"/>
                    </button>
                    <div className="offcanvas-body">
                        {showMenu && (
                            <ul className="navbar-nav align-items-center justify-content-end justify-content-xxl-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link  text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       style={{color: "#fdc449", fontSize: '25px'}}
                                       href="#project">ComBo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       style={{color: "#fdc449", fontSize: '25px'}}
                                       href="#price">Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       style={{color: "#fdc449", fontSize: '25px'}}
                                       href="#blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       style={{color: "#fdc449", fontSize: '25px'}}
                                       href="#trailer">Trailer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-uppercase  mx-2 px-3 mb-2 mb-lg-0"
                                       style={{color: "#fdc449", fontSize: '25px'}}
                                       href="#competition">competition</a>
                                </li>
                            </ul>
                        )}
                    </div>
                    {localStorage.getItem("JWT") && showLogin && (
                    <div className="  d-flex mt-5 mt-lg-0 ps-lg-5 align-items-center justify-content-end "
                         style={{color: "#fdc449", fontSize: '25px'}}>
                        {localStorage.getItem("JWT") && (
                        <a style={{color: "#3189c0", fontSize: '25px'}}
                            href="">{userName}  <BiUser/></a>
                        )}
                        <Link to="/cart" href="" className="header-btn header-cart"
                              style={{paddingLeft: '20px'}}>
                            <FiShoppingCart className="me-3 ms-0" size={25}
                                            style={{color: "#fdc449",}}/>
                            {/*<span className="cart-number">{carts.length}</span>*/}
                        </Link>
                    </div>
                        )}
                    <div className=" d-flex mt-5 mt-lg-0 ps-lg-5 align-items-center justify-content-end "
                         style={{color: "#fdc449", fontSize: '25px'}}>
                        <div className="user-dropdown-list">
                            {!localStorage.getItem("JWT") && showLogin && (
                                <Link to={`/login`}>
                                    <a className="text-uppercase" style={{color: '#fdc449'}}>LOGIN</a>
                                </Link>
                            )}
                            {localStorage.getItem("JWT") ? (
                                <>
                                    <Link className="user-dropdown-item " style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'white',
                                        marginRight: '10px'
                                    }}>
                                        <BiLogOutCircle className="me-3 ms-0 " size={25}
                                                        style={{color: "#fdc449"}}
                                                        onClick={() => handleLogOut()}/>
                                        <div
                                            className="dropdown-text" style={{color: '#fdc449'}}
                                            onClick={() => handleLogOut()}
                                        >
                                            LOGOUT
                                        </div>
                                    </Link>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}