import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";




function ModelList(){
    const [models, setModel] = useState([]);
    const fetchData = async () => {
        const ModelUrl = "http://localhost:8100/api/models/";
        const response = await fetch(ModelUrl);

        if (response.ok) {
            const data = await response.json();
            setModel(data.models)
        }
}


    useEffect(() =>{
        fetchData()
    }, []);

return(
    <>
    <h1>Models</h1>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <NavLink to="/models/new" className="btn btn-primary btn-lg px-4 gap-3">Add New Car Model</NavLink>
        </div>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
        </tr>
        </thead>
        <tbody>
            {models.map((models, index) => {
                return (
                <tr key={ index }>
                    <td>{ models.name}</td>
                    <td>{models.manufacturer.name}</td>
                    <td><img src={models.picture_url} alt="" height="100"></img></td>

                </tr>
                );
            })}

        </tbody>
        </table>

    </>
);
}

export default ModelList
