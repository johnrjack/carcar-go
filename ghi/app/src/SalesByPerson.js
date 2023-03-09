import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

function SalesByPerson() {
    // Employee drop down
    const [employee, setEmployee] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const getData = async () => {
        const employeeUrl = "http://localhost:8090/api/employees/";
        const employeeResponse = await fetch(employeeUrl);

        if (employeeResponse.ok) {
            const employeeData = await employeeResponse.json();
            setEmployee(employeeData.employee);
            console.log(employeeData)
        }
    }

    // populate list
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
        getData();
    }, []);

    const filteredSales = selectedEmployee
    ? sales.filter((sale) => sale.sale_person === selectedEmployee)
    : sales;
return(
    <>
    <h1>Sale Person History</h1>
    <div className="mb-3">
        <select  required id="filter" name="filter" className="filter" onChange={(e) => setSelectedEmployee(e.target.value)}>
        <option value="">Choose a Sales Person</option>
        {employee.map(employee => {
                        return (
                            <option key={employee.id} value={employee.employee_name}>{employee.employee_name}</option>
                        )
                    })}
        </select>
    </div>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Sales Person</th>
            <th>Owner</th>
            <th>VIN</th>
            <th>Sale Price</th>
        </tr>
        </thead>
        <tbody>
            {filteredSales.map((sale, index) => {
                return (
                <tr key={ index }>
                    <td>{ sale.sale_person}</td>
                    <td>{sale.customer}</td>
                    <td>{sale.automobile}</td>
                    <td>${sale.price}</td>
                </tr>
                );
            })}

        </tbody>
        </table>

    </>
);
}

export default SalesByPerson;
    