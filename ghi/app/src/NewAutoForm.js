import React, {useState, useEffect} from "react";

function AddAutoForm(){
    // create drop down of models
    const [models, setModels] = useState([]);
    const fetchData = async () => {
        const modelUrl = "http://localhost:8100/api/models/";
        const response = await fetch(modelUrl);

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }

    // set UseState and create handlers
    con
    useEffect(() => {
        fetchData();
    }, []);

return(
    <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add New Hats</h1>
            <form  id="create-hats-form">

              <div className="form-floating mb-3">
                <input  placeholder="color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="color">Color</label>
              </div>

              <div className="form-floating mb-3">
                <input placeholder="year" required type="text" name="year" id="year" className="form-control" />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input  placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="mb-3">
                <select required id="model" name="model" className="form-select">
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