import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

function SaleList() {
    const [sales, setSales] = useState([]);
    const fetchData = async  () => {
        const saleUrl = "http://localhost:8090/api/sales/";
        const response = await fetch(saleUrl);
        
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    
return(
    <>
    <h1>All Sales</h1>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Sales Person</th>
            <th>Employee Number</th>
            <th>Owner</th>
            <th>VIN</th>
            <th>Sale Price</th>
        </tr>
        </thead>
        <tbody>
            {sales.map((sales, index) => {
                return (
                <tr key={ index }>
                    <td>{ sales.sale_person}</td>
                    <td>{sales.employee_number}</td>
                    <td>{sales.customer}</td>
                    <td>{sales.automobile}</td>
                    <td>${sales.price}</td>
                </tr>
                );
            })}

        </tbody>
        </table>

    </>
);
}

export default SaleList;
    