import React, { useEffect, useState } from "react";

export const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getAppointments() {
      const appointmentsUrl = "http://localhost:8080/api/appointments/";
      const response = await fetch(appointmentsUrl);
      if (response.ok) {
        const responseData = await response.json();
        setAppointments(responseData.appointments);
      }
    }
    getAppointments();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>VIN</th>
          <th>Customer</th>
          <th>Date + time</th>
          <th>Technician</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => {
          return (
            <tr>
              <td>{appointment.vin}</td>
              <td>{appointment.customer}</td>
              <td>{appointment.date_time}</td>
              <td>{appointment.technician.first_name}</td>
              <td>{appointment.reason}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
