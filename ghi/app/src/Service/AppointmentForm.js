import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"

function AddAppointmentForm(){
  const navigate = useNavigate();

  //drop down............................................
  const [technicians, setTechnicians] = useState([]);
  const fetchData = async () => {
      const TechUrl = 'http://localhost:8080/api/technicians/';

      const response = await fetch(TechUrl);

      if (response.ok) {
          const data = await response.json();
          setTechnicians(data.technicians);
      }
  };

  //other form fields......................................
  const [vin, setVin] = useState('');
  const handleVinChange = (event) => {
      const value = event.target.value;
      setVin(value);
  };

  const [customerName, setCustomerName] = useState('');
  const handleCustomerNameChange = (event) => {
      const value = event.target.value;
      setCustomerName(value);
  };

  const[date, setDate] = useState('');
  const handleDateChange = (event) => {
      const value = event.target.value;
      setDate(value);
  };

  const[reason, setReason] = useState('');
  const handleReasonChange = (event) => {
      const value = event.target.value;
      setReason(value);
  };

  const[technician, setTechnician] = useState('');
  const handleTechnicianChange = (event) => {
      const value = event.target.value;
      setTechnician(value);
  };

  // handle submit.....................................
  const handleSubmit = async (event) => {
      event.preventDefault();

      const data = {};
      data.vin = vin;
      data.customer_name = customerName;
      data.date = date;
      data.reason = reason;
      data.technician = technician;

      const appointmentUrl = 'http://localhost:8080/api/appointments/';
      const fetchConfig = {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
              'Content-type': 'application/json',
          }
      };

      const response = await fetch(appointmentUrl, fetchConfig);

      if (response.ok) {
          setVin('');
          setCustomerName('');
          setDate('');
          setReason('');
          setTechnician('');
          navigate('/appointment-list/');
      }
  };

  useEffect(() => {
      fetchData();
  }, []);

  // return.....................................................
  return(
      <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="text-center">Create A Service Appointment</h1>
          <form onSubmit={handleSubmit} id="create-model-form">

            {/* vin.......................................... */}
            <div className="form-floating mb-3">
              <input
              value={vin}
              onChange={handleVinChange}
              placeholder="Vin"
              required type="text"
              minLength="17"
              maxLength="17"
              name="vin"
              id="vin"
              className="form-control"
              />
              <label htmlFor="vin">Vin</label>
            </div>

            {/* Customer Name......................................... */}
            <div className="form-floating mb-3">
              <input
              value={customerName}
              onChange={handleCustomerNameChange}
              placeholder="Customer Name"
              required type="text"
              name="customer_name"
              id="customer_name"
              className="form-control"
              />
              <label htmlFor="customer_name">Customer Name</label>
            </div>

            {/* Date......................................... */}
            <div className="form-floating mb-3">
              <input
              value={date}
              onChange={handleDateChange}
              placeholder="Date/Time"
              required type="datetime-local"
              name="date"
              id="date"
              className="form-control"
              />
              <label htmlFor="date">Appointment Date/Time</label>
            </div>

            {/* Reason........................................ */}
            <div className="form-floating mb-3">
              <input
              value={reason}
              onChange={handleReasonChange}
              placeholder="Short Reason"
              required type="text"
              name="reason"
              id="reason"
              className="form-control"
              />
              <label htmlFor="reason">Short Reason</label>
            </div>

            {/* select a tech......................................... */}
            <div className="mb-3">
              <select
              value={technician}
              onChange={handleTechnicianChange}
              required name="technician"
              id="technician"
              className="form-select"
              >
                <option value="">Choose a Technician</option>
                {technicians.map(technician => {
                  return (
                    <option key={technician.id} value={technician.id}>
                      {technician.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="text-center">
              <button className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

        export default  AddAppointmentForm;
