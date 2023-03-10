import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

function ManufactureList(){
    const [manufacturers, setManufacturers] = useState([]);
    const fetchData = async () => {
        const ManufacUrl = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(ManufacUrl);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)
        }
}

    useEffect(() => {
        fetchData()
    }, []);

return(
    <>
    <h1>Manufacturers</h1>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <NavLink to="/manufacturer/new" className="btn btn-primary btn-lg px-4 gap-3">Add New Manufacturer</NavLink>
        </div>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
            {manufacturers.map((manufacturers, index) => {
                return (
                <tr key={ index }>
                    <td>{ manufacturers.name}</td>
                </tr>
                );
            })}

        </tbody>
        </table>

    </>

  );
}

export default ManufactureList;