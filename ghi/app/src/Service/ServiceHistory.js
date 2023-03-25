import React, {useState, useEffect} from "react";

function ServiceHistory(){
    const [vin, setVin] = useState('');
    const [appointments, setAppointment] = useState([]);

    const handleVinChange = (event) => {
        fetchData(event.target.value)
        setVin(event.target.value);
    };

    const handleSearch = () => {
        fetchData(vin);
    };


    const fetchData = async (vin) => {
        const AppointmentUrl = "http://localhost:8080/api/appointments/";
        const response = await fetch(AppointmentUrl);

        if (response.ok) {
            const data = await response.json();
            const filtered = data.appointment.filter(appointment => appointment.vin === vin)
            setAppointment(filtered)
        }
}


return(
    <>
    <h1>Service History</h1>
    <div>
        <label htmlFor="vin-input">Input VIN</label>
        <input id="vin-input" type="text" value={vin} onChange={handleVinChange} />
        <button onClick={handleSearch}>Search</button>
    </div>

    <table className="table table-striped">
        <thead>
        <tr>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Date  Time</th>
            <th>Reason</th>
            <th>Assigned Technician</th>

        </tr>
        </thead>
        <tbody>
            {appointments.map((filteredAppointments, index) => {
                return (
                <tr key={ index }>
                    <td>{filteredAppointments.vin}</td>
                    <td>{filteredAppointments.customer}</td>
                    <td>{ filteredAppointments.date}</td>
                    <td>{filteredAppointments.reason}</td>
                    <td>{filteredAppointments.technician.name}</td>

                </tr>
                );
            })}

        </tbody>
        </table>

    </>
);
}






export default ServiceHistory
