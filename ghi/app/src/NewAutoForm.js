import React, {useState, useEffect} from "react";

function AddAutoForm(){
    // create drop down of models
    const [models, setModels] = useState([]);
    const fetchData = async () => {
        const modelUrl = `http://localhost:8100/api/models/`;
        const response = await fetch(modelUrl);

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }

    // set UseState and create handlers

    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model, setModel] = useState('');

    const handleColorChange = (event) => {
      const value = (event.target.value);
      setColor(value);
    }

    const handleYearChange = (event) => {
      const value = (event.target.value);
      setYear(value);
    }

    const handleVinChange = (event) => {
      const value = (event.target.value);
      setVin(value);
    }

    const handleModelChange = (event) => {
      const value = (event.target.value);
      setModel(value);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      const data={}

      data.color = color;
      data.year = year;
      data.vin = vin;
      data.model = model;

      const AutomobileUrl = `http://localhost:8100/api/automobiles/`;
      const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
      };
    
      const response = await fetch(AutomobileUrl, fetchConfig);
      if (response.ok) {
        const newAutomobile = await response.json();
        console.log(newAutomobile)

        setColor('');
        setYear('');
        setVin('');
        setModel('');

    }
  }

    useEffect(() => {
        fetchData();
    }, []);

return(
    <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a New Automobile to the Inventory</h1>
            <form onSubmit={handleSubmit} id="create-automobile-form">

              <div className="form-floating mb-3">
                <input onChange={handleColorChange} value={color} placeholder="color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="color">Color</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={handleYearChange} value={year} placeholder="year" required type="text" name="year" id="year" className="form-control" />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleVinChange} value={vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="mb-3">
                <select onChange={handleModelChange} value={model} required id="model" name="model" className="form-select">
                  <option value="">Choose a Model</option>
                  {models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>{model.name}</option>
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


export default AddAutoForm;
