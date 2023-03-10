import React, {useState, useEffect} from "react";

function AddModelForm(){
    const [manufacturers, setManufacturers] = useState([]);

    const fetchData = async () => {
        const formUrl = `http://localhost:8100/api/manufacturers/`;
        const response = await fetch(formUrl);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)
        }
    }

    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [manufacturer, setManufacturer] = useState('');

    const handleNameChange = (event) => {
        const value = (event.target.value);
        setName(value);
    }

    const handlePictureChange = (event) => {
        const value = (event.target.value);
        setPicture(value);
    }

    const handleManufacturerChange = (event) => {
        const value = (event.target.value);
        setManufacturer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data={};
        data.name = name;
        data.picture_url = picture;
        data.manufacturer_id = manufacturer;

        const newModelUrl = `http://localhost:8100/api/models/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(newModelUrl, fetchConfig);
        if (response.ok){
            const newModel = await response.json();
            setName('');
            setPicture('');
            setManufacturer('');
        }
    }

        useEffect(() => {
            fetchData();
        }, []);
        return(
            <div className="row">
                <div className="offset-3 col-6">
                  <div className="shadow p-4 mt-4">
                    <h1>Add a New Vehicle Model</h1>
                    <form onSubmit={handleSubmit} id="create-model-form">

                      <div className="form-floating mb-3">
                        <input onChange={handleNameChange} value={name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                        <label htmlFor="name">Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input onChange={handlePictureChange} value={picture} placeholder="picture url" required type="text" name="picture" id="picture" className="form-control" />
                        <label htmlFor="picture">Picture Url</label>
                      </div>
                      <div className="mb-3">
                        <select onChange={handleManufacturerChange} value={manufacturer} required id="manufacturer" name="manufacturer" className="form-select">
                          <option value="">Choose a Manufacturer</option>
                          {manufacturers.map(manufacturers => {
                                            return (
                                                <option key={manufacturers.id} value={manufacturers.id}>{manufacturers.name}</option>
                                            )
                                        })}
                        </select>
                      </div>
                      <button className="btn btn-primary">Create</button>
                    </form>
                  </div>
                </div>
              </div>
          );
        }


        export default AddModelForm;
