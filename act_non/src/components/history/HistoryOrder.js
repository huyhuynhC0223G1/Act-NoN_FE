import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as ProductService from "../../service/ProductService"
import {FaInfo} from "react-icons/fa";

export default function HistoryOrder() {
    const navigate = useNavigate();
    const [orderList, setOrderList] = useState([]);

    const getListHistory = async () => {
        const data = await ProductService.getHistoryList(0, 50)
        setOrderList(data.content)
    }
    useEffect(() => {
        getListHistory();
    }, [])
    return (
        <>
            <div style={{background:'black',marginTop:'150px' }}>
            </div>
            <div className="container">
                <div >

                    <div className="text-lg-center py-5">
                        <h1>LIST DETAILED PRODUCTS PURCHASED</h1>
                    </div>
                    <table className="table">
                        <thead className="bg-black" style={{margin:'10px'}}>
                        <th className="py-3 px-3 col-1 text-white">STT</th>
                        <th className="py-3 col-2 text-white">PURCHASE CODE</th>
                        <th className="py-3 col-2 text-white">PURCHASE DATE</th>
                        <th className="py-3 col-2 text-white">PURCHASE TIME</th>
                        <th className="py-3 col-2 text-white">TOTAL MONEY(USD)</th>
                        <th className="py-3 col-2 text-white">NOTE</th>
                        <th className="py-3 col-1 text-white">ACTION</th>
                        </thead>
                        <tbody>
                        {orderList.map((o, index) => {
                            const orderDate = new Date(o.dateCreated);
                            const date = orderDate.toLocaleDateString();
                            const time = orderDate.toLocaleTimeString();

                            return (
                                <tr key={o.id}>
                                    <td className="px-4">{index + 1}</td>
                                    <td className="px-1">PC00{o.id}</td>
                                    <td className="px-1">{date}</td>
                                    <td className="px-1">{time}</td>
                                    <td className="px-5">{o.totalPrice} $</td>
                                    <td className="px-1">{o.note}</td>
                                    <Link to={`/history/detail/${o.id}`}><td className="px-1"><FaInfo /></td></Link>
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