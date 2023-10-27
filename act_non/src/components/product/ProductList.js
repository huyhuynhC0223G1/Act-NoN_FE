import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as ProductService from '../../service/ProductService'
import Swal from "sweetalert2";
import {infoAppUserByJwtToken} from "../../service/LoginService";
import * as CartService from "../../service/CartService";
import {toast, ToastContainer} from "react-toastify";
import Carousel from "react-multi-carousel";
import {BiSearch} from "react-icons/bi";
import {getAllCarts} from "../cart/redux/cartAction";
import {useDispatch} from "react-redux";

export default function ProductList() {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [typeName, setTypeName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const [productId, setProductId] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const getListProduct = async (page) => {
        if (isSearching) {
            const dataSearch = await ProductService.getProductList(searchName, typeName, price, description, page, 25)
                setProductList(dataSearch.content);
        } else {
            const data = await ProductService.getProductList("", "", "", "", page, 25)
            if (data.content != null || data.content != undefined) {
                setProductList(data.content);
            } else {
                setProductList([]);
                Swal.fire({
                    icon: 'error',
                    title: 'No data found!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    }
    useEffect(() => {
        document.title = 'ActNoN - Product'
        getListProduct();
    }, [])

    const addProductToCart = async (id, e) => {
        e.preventDefault();
        const isLoggedIn = infoAppUserByJwtToken();
        if (!isLoggedIn) {
            Swal.fire("Please log in to your account!", "", "warning");
            navigate("/login");
        } else {
            const response = await CartService.addProductToCart(id, 1);
            dispatch(getAllCarts(localStorage.getItem("id")));
            toast.success("Added product successfully");
        }
    };
    const handleFilter = async () => {
        try {
            const data = await ProductService.getProductList(searchName, typeName, price, description, 0, 20);
            console.log(data);

            if (data.content == undefined || data.content.length === 0) {
                setProductList([]);
                setIsSearching(true);
                throw new Error('Not found!');
            }

            setIsSearching(true);
            setProductList(data.content);
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                text: error.message,
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };

    return (
        <>
            <section style={{backgroundColor: '#ffffff'}}>
                <div className="text-center container-fuilt px-4 j" style={{marginTop: '130px'}}>
                    <h1 className="mt-4 mb-5" ><strong>All product</strong></h1>
                    <div className="row ">
                        <div className="col flex-row">
                            <input
                                style={{height:'40px', border:'2px solid #858383', background:'#eeeded', marginLeft:'30px'}}
                                type="text"
                                id="searchName"
                                className="black-placeholder"
                                placeholder="Name product"
                                onChange={(e) => setSearchName(e.target.value)}
                            />
                        </div>
                        <div className="col flex-row" >
                            <input
                                style={{height:'40px', border:'2px solid #858383', background:'#eeeded'}}
                                type="text"
                                id="description"
                                className="black-placeholder"
                                placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="col" style={{marginTop: ''}}>
                            <div className='col'>
                                <select style={{
                                    height: '40px',
                                    width: '210px',
                                    border: 'solid 2px #858383',
                                    borderRadius: '',background:'#eeeded'
                                }}
                                        onChange={(e) => setTypeName(e.target.value)}>
                                    <option value="" >Type Product</option>
                                    <option value="Combo">Combo</option>
                                    <option value="Mark">Mark</option>
                                    <option value="Gun">Gun</option>
                                    <option value="Armor">Armor</option>
                                    <option value="Glove">Glove</option>
                                    <option value="Knee pads">Knee pads</option>
                                    <option value="Elbow pads">Elbow pads</option>
                                </select>
                            </div>
                        </div>
                        <div className="col flex" style={{marginLeft: ''}}>
                            <div className='col'>
                                <select style={{
                                    height: '40px',
                                    width: '210px',
                                    border: 'solid 2px #858383',
                                    borderRadius: '',background:'#eeeded'
                                }}
                                        onChange={(e) => setPrice(e.target.value)}>
                                    <option value=""> Price</option>
                                    <option value="1">1 - 49</option>
                                    <option value="2">50 - 99</option>
                                    <option value="3">100 - 199</option>
                                    <option value="4">200 ></option>
                                </select>
                            </div>
                        </div>
                        <div className="col"
                             >
                            <button className="text-white "
                                    style={{height:'40px', marginBottom:'12px', justifyContent: 'flex-end',
                                        background:'#fdc449', border:'0', marginRight:'100px'
                            }}
                                    onClick={handleFilter}>
                                <span style={{paddingTop:'10px',}}><BiSearch style={{fontSize: '25px'}}/> SEARCH</span>
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        {productList.map((p) => (
                            <div className="col-lg-3 pb-4 px-3" key={p.id}>
                                <div className="py-5 plan-post text-center" style={{background: ''}}>
                                    <p className="header-top" style={{fontSize:'25px'}}>{p.name}</p>
                                    <h2 className="display-5 mb-5">$ {p.price}</h2>
                                    <div className="price-option">
                                        <Link to={`/product/detail/${p.id}`}>
                                            <img className="portfolio-img img-fluid" src={p.img}
                                                 style={{minHeight: '', maxHeight: '320px'}}
                                                 alt=""/>
                                        </Link>
                                    </div>
                                    <a href="" className="btn btn-primary mt-3 px-4 py-3 mx-2"
                                       onClick={(e) => addProductToCart(p.id, e)}>
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <ToastContainer autoClose={1000} className="toast-position"/>
            </section>
        </>
    )
}