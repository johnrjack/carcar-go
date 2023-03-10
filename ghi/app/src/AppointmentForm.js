import React, {useState, useEffect} from "react";

function AddAppointmentForm(){
    const [appointment, setAppoitment] = useState([]);

    const fetchData = async () => {
        const formUrl = `http://localhost:8080/api/appointments/`;
        const response = await fetch(formUrl);

        if (response.ok) {
            const data = await response.json();
            setAppoitment(data.appointment)
        }
    }

    const [technicians, setTechnicians] = useState([]);
    const catchData = async () => {
        const techUrl = "http://localhost:8080/api/technicians/";
        const techResponse = await fetch(techUrl);
        if (techResponse.ok) {
            const techData = await techResponse.json();
            setTechnicians(techData.technician)
        }
    }
    useEffect(() => {
        catchData();
    }, []);

    const [vin, setVin] = useState('');
    const [customer, setCustomer] = useState('');
    const [date, setDate] = useState('');
    const [reason, setReason] = useState('');
    const [technician, setTechnician] = useState('');

    const handleVINChange = (event) => {
        const value = (event.target.value);
        setVin(value);
    }

    const handleCustomerChange = (event) => {
        const value = (event.target.value);
        setCustomer(value);
    }

    const handleDateChange = (event) => {
        const value = (event.target.value);
        setDate(value);
    }
    const handleReasonChange = (event) => {
        const value = (event.target.value);
        setReason(value);
    }
    const handleTechnicianChange = (event) => {
        const value = (event.target.value);
        setTechnician(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data={};
        data.vin = vin ;
        data.customer = customer;
        data.date = date;
        data.reason  = reason
        data.technician = technician

        const newUrl = `http://localhost:8080/api/appointments/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(newUrl, fetchConfig);
        if (response.ok){
            const newAppointment = await response.json();

            setVin('');
            setCustomer('');
            setDate('');
            setReason('');
            setTechnician('');
        }
        }

        return(
            <div className="row">
                <div className="offset-3 col-6">
                  <div className="shadow p-4 mt-4">
                    <h1>Add a Appointment</h1>
                    <form onSubmit={handleSubmit} id="create-appointment-form">

                      <div className="form-floating mb-3">
                        <input onChange={handleVINChange} value={vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                        <label htmlFor="vin">VIN</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input onChange={handleCustomerChange} value={customer} placeholder="customer" required type="text" name="customer" id="customer" className="form-control" />
                        <label htmlFor="customer">Customer</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input onChange={handleDateChange} value={date} placeholder="date" required type="datetime-local" name="date" id="date" className="form-control" />
                        <label htmlFor="date">Date</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input onChange={handleReasonChange} value={reason} placeholder="reason" required type="text" name="reason" id="reason" className="form-control" />
                        <label htmlFor="reason">Reason</label>
                      </div>
                      <div className="mb-3">
                        <select onChange={handleTechnicianChange} value={technician} required id="technician" name="technician" className="form-select">
                          <option value="">Choose a Technician</option>
                          {technicians.map(technicians => {
                                            return (
                                                <option key={technicians.name} value={technicians.name}>{technicians.name}</option>
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


        export default  AddAppointmentForm;
