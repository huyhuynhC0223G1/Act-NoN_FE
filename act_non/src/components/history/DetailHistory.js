import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as ProductService from "../../service/ProductService"
import {useDispatch} from "react-redux";
import {getAllCarts} from "../cart/redux/cartAction";

export default function DetailHistory() {
    const param = useParams();
    const navigate = useNavigate();
    const [detailHistoryList, setDetailHistoryList] = useState([]);
    const dispatch = useDispatch();
    const getListHistoryDetail = async () => {
        dispatch(getAllCarts(localStorage.getItem("id")));
        const data = await ProductService.getHistoryById(param.id)
        console.log(data)
        setDetailHistoryList(data)
    }
    useEffect(() => {
        document.title = 'ActNoN - Detail History'
        getListHistoryDetail();
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div style={{
                    marginTop:'130px'
                }}>
                    <div>
                        <Link to={`/history`}>
                        <button type="button" style={{background:'#fdc449', border:'1px solid #fdc449'}}>COME BACK</button>
                        </Link>
                    </div>
                    <div className="text-lg-center py-5">
                        <h1>COMPARE PRODUCT PURCHASE HISTORY</h1>
                    </div>
                    <table className="table">
                        <thead className="bg-black text-white" style={{margin:'10px'}}>
                        <th className="py-3 px-3 col text-white">STT</th>
                        <th className="py-3 col text-white">PURCHASE CODE</th>
                        <th className="py-3 col text-white">PRODUCT</th>
                        <th className="py-3 col text-white">PRODUCT NAME</th>
                        <th className="py-3 col text-white">QUANTITY</th>
                        <th className="py-3 col text-white">PRICE</th>
                        <th className="py-3 col text-white">TOTAL MONEY</th>
                        </thead>
                        <tbody>
                        {detailHistoryList.map((d, index) => {
                            return (
                                <tr key={d.id} className="align-middle">
                                    <td className="px-4">{index + 1}</td>
                                    <td className="px-1">PD00{d.id}</td>
                                    <td className="px-1">
                                        <img className="portfolio-img img-fluid" src={d.product.img}
                                             style={{minHeight: '', maxHeight: '150px', width:'auto'}}
                                             alt=""/>
                                    </td>
                                    <td className="px-1">{d.product.name}</td>
                                    <td className="px-5">{d.quantity}</td>
                                    <td className="px-3">{d.currentPrice}</td>
                                    <td className="px-5">{d.currentPrice * d.quantity}</td>
                                </tr>
                            );
                        })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}