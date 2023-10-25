import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {BiLogOutCircle, BiUser} from "react-icons/bi";
import Swal from "sweetalert2";
import * as LoginService from '../service/LoginService';
import {FiShoppingCart} from "react-icons/fi";
import * as CartService from "../service/CartService";
import {useDispatch, useSelector} from "react-redux";
import {getAllCarts} from "./cart/redux/cartAction";


export default function Header() {
    const navigate = useNavigate();
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [userName, setUserName] = useState("");
    console.log(localStorage.getItem("JWT"))

    const [showMenu, setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const location = useLocation();

    // const [cartList, setCartList] = useState([]);

    const carts = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    console.log(carts.length)
    // const getCartList = async () => {
    //     const data = await CartService.getCartList()
    //     console.log(data)
    //     setCartList(data);
    // }

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
        const userId = localStorage.getItem("id");
        dispatch(getAllCarts(userId))
        console.log(userName);
    };

    useEffect(() => {
        getUserName();
        // getCartList();
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
            <nav className="navbar navbar-expand-lg container-fluid" style={{background: '#121818'}}>
                <div className="container-fluid">
                    <Link to={'/'}><a className="navbar-brand">
                        <p style={{color: "#fdc449", fontSize: '60px', paddingTop: '30px'}}>𝗔𝗰𝘁 𝗡𝗼𝗡</p></a></Link>

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
                        <div className="  d-flex mt-5 mt-lg-0  align-items-center justify-content-end "
                             style={{color: "#fdc449", fontSize: '25px'}}>
                            <Link to="/cart" className="header-btn header-cart"
                                  style={{paddingLeft: '20px'}}>
                                <FiShoppingCart className="me-3 ms-0" size={25}
                                                style={{color: "#fdc449",}}/>
                                <span className="cart-number">{carts.length}</span>
                            </Link>
                            {localStorage.getItem("JWT") && (
                                <div className="dropdown" >
                                    <button className="btn dropdown-toggle text-end" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false" style={{color: '#0688f3'}}>
                                        {userName} <BiUser/>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <Link to={`/product`}>
                                            <li><a className="dropdown-item">All Product</a></li>
                                        </Link>
                                        <Link to={`/history`}>
                                            <li><a className="dropdown-item">Purchase history</a></li>
                                        </Link>
                                        <div className="user-dropdown-list">
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
                                    </ul>
                                </div>
                            )}

                        </div>
                    )}
                    <div className=" d-flex mt-5 mt-lg-0 ps-lg-5 align-items-center justify-content-end "
                         style={{color: "#fdc449", fontSize: '25px'}}>
                        {!localStorage.getItem("JWT") && showLogin && (
                            <Link to={`/login`}>
                                <a className="text-uppercase" style={{color: '#fdc449'}}>LOGIN</a>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}