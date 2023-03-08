import React, {useState, useEffect} from "react";
import { resolvePath } from "react-router-dom";

function SalesRecordForm() {
    // Automobile dropdown
    const [autos, setAutomobiles] = useState([]);
    const fetchData = async () => {
        const automobilesUrl = "http://localhost:8100/api/automobiles/";
        const response = await fetch(automobilesUrl);

        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
            console.log(data)
        };
    }

    // Sales Person Dropdown
    const [employee, setEmployee] = useState([]);
    const getData = async () => {
        const employeeUrl = "http://localhost:8090/api/employees/";
        const employeeResponse = await fetch(employeeUrl);

        if (employeeResponse.ok) {
            const employeeData = await employeeResponse.json();
            setEmployee(employeeData.employee);
            console.log(employeeData)
        }
    }

    // Customer Dropdown
    const [customers, setCustomers] = useState([]);
    const catchData = async () => {
        const customerUrl = "http://localhost:8090/api/customers/";
        const customerResponse = await fetch(customerUrl);

        if (customerResponse.ok) {
            const customerData = await customerResponse.json();
            setCustomers(customerData.customers)
            console.log(customerData)
        }
    }
    // setting use state
    const [automobile, setAutomobile] = useState('');
    const [salesPerson, setSalesPerson] = useState('');
    const [customer, setCustomer] = useState('');
    const [price, setPrice] = useState('');

    const handleAutoChange = (event) => {
        const value = (event.target.value);
        setAutomobile(value);
    }

    const handleEmployeeChange = (event) => {
        const value = (event.target.value);
        setSalesPerson(value);
    }

    const handleCustomerChange = (event) => {
        const value = (event.target.value);
        setCustomer(value);
    }

    const handlePriceChange = (event) => {
        const value = (event.target.value);
        setPrice(value);
    }

    // submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}

        data.automobile= automobile;
        data.sales_person = salesPerson;
        data.customer = customer;
        data.price = price
        console.log("THIS IS DATA", data)
        const saleUrl = "http://localhost:8090/api/sales/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const saleResponse = await fetch(saleUrl, fetchConfig);
        if (saleResponse.ok) {
            const newSale = await saleResponse.json();
            console.log("THIS IS NEW SALE", newSale)

            setAutomobile("");
            setSalesPerson('');
            setCustomer('');
            setPrice('');
        }
    }
    useEffect(() => {
        fetchData();
        getData();
        catchData();
    }, []);

return(
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Create a Sales Record</h1>
            <form onSubmit={handleSubmit} id="create-sales-person-form">

            <div className="mb-3">
                <select onChange={handleAutoChange} value={automobile} required id="automobile" name="automobile" className="form-select">
                <option value="">Choose an Automobile</option>
                {autos.map(autos => {
                                return (
                                    <option key={autos.href} value={autos.vin}>{autos.vin}</option>
                                )
                            })}
                </select>
            </div>
            <div className="mb-3">
                <select onChange={handleEmployeeChange} value={salesPerson} required id="salesPerson" name="salesPerson" className="form-select">
                <option value="">Choose a Sales Person</option>
                {employee.map(employee => {
                                return (
                                    <option key={employee.id} value={employee.employee_name}>{employee.employee_name}</option>
                                )
                            })}
                </select>
            </div>
            <div className="mb-3">
                <select onChange={handleCustomerChange}  value={customer} required id="customer" name="customer" className="form-select">
                  <option value="">Choose a Customer</option>
                  {customers.map(customers => {
                                    return (
                                        <option key={customers.id} value={customers.customer_name}>{customers.customer_name}</option>
                                    )
                                })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePriceChange} value={price} placeholder="price" required type="text" name="price" id="price" className="form-control" />
                <label htmlFor="price">Sales Price</label>
              </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    );
}


export default SalesRecordForm;