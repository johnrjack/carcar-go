import React, {useState} from "react";

function SalesPersonForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const fetchData = async () => {
  //   const listUrl ="http://localhost:8090/api/employees/";
  //   const response = await fetch(listUrl);

  //   if (response.ok) {
  //     const data = await response.json();

  //   }
  // }

  const handleNameChange = (event) =>{
    const value = (event.target.value);
    setName(value)
  }

  const handleNumberChange = (event) => {
    const value = (event.target.value);
    setNumber(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {}
    data.employee_name = name;
    data.employee_number = number;

    const salePersonUrl = "http://localhost:8090/api/employees/";
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(salePersonUrl, fetchConfig);
    if (response.ok) {
      const newSalesPerson = await response.json();

      setName('');
      setNumber('');
    }
  }

return(
    <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Sales Team Member</h1>
            <form onSubmit={handleSubmit} id="create-sales-person-form">

              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleNumberChange} value={number} placeholder="number" required type="text" name="number" id="number" className="form-control" />
                <label htmlFor="number">Employee Number</label>
              </div>

              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
  );
}


export default SalesPersonForm;