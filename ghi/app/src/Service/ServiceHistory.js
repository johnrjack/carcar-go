
import React, {useState, useEffect} from 'react';

function ServiceHistory( ){
    // fetch appointments & only show if property finished =false
    const[appointments, setAppointments] = useState([]);
    const fetchAppointments = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/');
        const data = await response.json();
        if (response.ok){
            const finishedAppointments = data.appointments.filter((appointment) => appointment.finished);
            setAppointments(finishedAppointments);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    //for search
    const[search, setSearch] = useState('');

    return (
        <div className="my-5 container">
                <h1 className="text-dark fw-bold text-center my-3">Service Appointment History</h1>
                <i className="bi bi-search"></i>
            <div className="input-group mb-3">
                <input
                    maxLength="17"
                    onChange={(event) => setSearch(event.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Type to search VIN..."
                    aria-label="search"
                    aria-describedby="basic-addon2"
                >
                </input>
            </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Vin</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Reason</th>
                            <th>Technician</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.filter((appointment)=> {
                            return search === "" ? appointment : appointment.vin.includes(search)
                        }).map((appointment, id) => {
                        return(
                            <tr key={id}>
                                <td>{ appointment.vin }</td>
                                <td>{ appointment.customer_name }</td>
                                <td>{ new Date (appointment.date).toLocaleDateString() }</td>
                                <td>{ new Date(appointment.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }</td>
                                <td>{ appointment.reason }</td>
                                <td>{ appointment.technician.name }</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
    );
}

export default ServiceHistory;

