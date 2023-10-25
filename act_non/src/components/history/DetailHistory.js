import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as ProductService from "../../service/ProductService"

export default function DetailHistory() {
    const param = useParams();
    const navigate = useNavigate();
    const [detailHistoryList, setDetailHistoryList] = useState([]);

    const getListHistoryDetail = async () => {
        const data = await ProductService.getHistoryById(param.id)
        console.log(data)
        setDetailHistoryList(data)
    }
    useEffect(() => {
        getListHistoryDetail();
    }, [])
    return (
        <>
            <div className="container">
                <div style={{
                    marginTop:'150px'
                }}>
                    <div className="text-lg-center py-5">
                        <h1>COMPARE PRODUCT PURCHASE HISTORY</h1>
                    </div>
                    <table className="table">
                        <thead className="bg-black text-white" style={{margin:'10px'}}>
                        <th className="py-3 px-3 col-1 text-white">STT</th>
                        <th className="py-3 col-2 text-white">PURCHASE CODE</th>
                        <th className="py-3 col-2 text-white">PURCHASE DATE</th>
                        <th className="py-3 col-2 text-white">PURCHASE TIME</th>
                        <th className="py-3 col-2 text-white">TOTAL MONEY(USD)</th>
                        <th className="py-3 col-2 text-white">NOTE</th>
                        </thead>
                        <tbody>
                        {detailHistoryList.map((d, index) => {
                            return (
                                <tr key={d.id} className="align-middle">
                                    <td className="px-4">{index + 1}</td>
                                    <td className="px-1">PD00{d.id}</td>
                                    <td className="px-1">
                                        <img className="portfolio-img img-fluid" src={d.product.img}
                                             style={{minHeight: '', maxHeight: '200px', width:'auto'}}
                                             alt=""/>
                                    </td>
                                    <td className="px-1">{d.product.name}</td>
                                    <td className="px-1">{d.product.description}</td>
                                    <td className="px-5">{d.quantity}</td>
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