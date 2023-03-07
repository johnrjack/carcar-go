import React, {useState, useEffect} from "react";

function ManufacturerForm() {
    const [name, setName] = useState('');

    const fetchData = async () => {
        const listUrl = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(listUrl);

        if (response.ok) {
            const data = await response.json();
            setName(data.name)
        }
        
    }
    const handleNameChange = (event) => {
        const value = (event.target.value);
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data={}
        data.name = name;

        const manufacturerUrl = "http://localhost:8100/api/manufacturers/"
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();
            console.log(newManufacturer);

            setName('');

        }
    }

return(
    <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-manufacturer-form">

              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>

              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
  );
}


export default ManufacturerForm;
