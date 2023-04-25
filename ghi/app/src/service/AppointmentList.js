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
      console.log(appointments);
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
      <tbody></tbody>
    </table>
  );
};
