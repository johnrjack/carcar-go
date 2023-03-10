import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";




function AppointmentList(){
    const [appointments, setAppoitment] = useState([]);
    const fetchData = async () => {
        const AppoitnmentUrl = "http://localhost:8080/api/appointments/";
        const response = await fetch(AppoitnmentUrl);

        if (response.ok) {
            const appt = await response.json();
            const filteredAppointments = appt.appointment.filter(
                (appointment) => !appointment.completed && !appointment.cancelled
              );
            setAppoitment(filteredAppointments);
        }
    };
    const handleComplete = (id) => {
        const completedAppointments = appointments.map((appointment) => {
            if (appointment.id === id) {
              return { ...appointment, completed: true };
            } else {
              return appointment;
            }
          });
          setAppoitment(completedAppointments);
        };

        const handleCancelled = async (id) => {
            const response = await fetch(`http://localhost:8080/api/appointments/${id}/`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ cancelled: true }),
            });
            if (response.ok) {
              const cancelledAppointment = appointments.find((appointment) => appointment.id === id);
              const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
              cancelledAppointment.cancelled = true;
              setAppoitment([...updatedAppointments, cancelledAppointment]);
            }
          };


    useEffect(() =>{
        fetchData()
    }, []);

return(
    <>
    <h1>Appointments</h1>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <NavLink to="/appointment-form/" className="btn btn-primary btn-lg px-4 gap-3">Add a New Appointment </NavLink>
        </div>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>VIP Status</th>
            <th>VIN</th>
            <th>Customer</th>
            <th>Date  Time</th>
            <th>Reason</th>
            <th>Progress</th>
            <th>Assigned Technician</th>
            <th>Complete</th>
            <th>Cancelled</th>

        </tr>
        </thead>
        <tbody>
            {appointments.filter((appointment) => !appointment.cancelled).map((appointment, index) => {
                return (
                <tr key={ appointment.id }>
                      <td>{appointment.vip ? "VIP" : "Basic"}</td>
                    <td>{appointment.vin}</td>
                    <td>{appointment.customer}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.completed ? "Completed" : "In Progress"}</td>
                    <td>{appointment.technician.name}</td>
                    <td>
                        <button type="button" className="btn btn-success" onClick={() => handleComplete(index)}>Complete</button>
                    </td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={() => handleCancelled(appointment.id)}>Cancel</button>
                    </td>

                </tr>
                );
            })}

        </tbody>
        </table>

    </>
);
}

export default AppointmentList;
