import React, {useState} from "react";

function AddTechnicianForm(){


    const [name, setName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');

    const handleNameChange = (event) => {
        const value = (event.target.value);
        setName(value);
    }

    const handleEmployeeNumberChange = (event) => {
        const value = (event.target.value);
        setEmployeeNumber(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data={};
        data.name = name;
        data.employee_number = employeeNumber;

        const newTechnicianUrl = `http://localhost:8080/api/technicians/`;
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(newTechnicianUrl, fetchConfig);
        if (response.ok){
            const newTechnician = await response.json();

            setName('');
            setEmployeeNumber('');
        }
    }


        return(
            <div className="row">
                <div className="offset-3 col-6">
                  <div className="shadow p-4 mt-4">
                    <h1>Add a New Technician</h1>
                    <form onSubmit={handleSubmit} id="create-technician-form">

                      <div className="form-floating mb-3">
                        <input onChange={handleNameChange} value={name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                        <label htmlFor="name">Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input onChange={handleEmployeeNumberChange} value={employeeNumber} placeholder="Employee Number" required type="number" name="Employee Number" id="employee_number" className="form-control" />
                        <label htmlFor="employee_number">Employee Number</label>
                      </div>

                      <button className="btn btn-primary">Create</button>
                    </form>
                  </div>
                </div>
            </div>
          );
        }


        export default AddTechnicianForm;
