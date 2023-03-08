import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

function AutoList(){
    const [autos, setAutos] = useState([]);
    const fetchData = async () => {
        const autoUrl = "http://localhost:8100/api/automobiles/";
        const response = await fetch(autoUrl);

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setAutos(data.autos)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, []);
    

return(
    <>
    <h1>Automobile Inventory</h1>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <NavLink to="/automobiles/new" className="btn btn-primary btn-lg px-4 gap-3">Add New Automobile</NavLink>
        </div>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Picture</th>
        </tr>
        </thead>
        <tbody>

        {autos.map((autos, index) => {
            return (
            <tr key={ index }>
                <td>{ autos.vin}</td>
                <td>{ autos.color}</td>
                <td>{ autos.year }</td>
                <td>{ autos.model.name }</td>
                <td>{ autos.model.manufacturer.name }</td>
                <td><img src={autos.model.picture_url} alt="" height="100"  ></img></td>
            </tr>
            );
        })}
        </tbody>
        </table>

    </>

  );
}

export default AutoList;