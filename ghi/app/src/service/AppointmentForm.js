import React, { useEffect, useState } from "react";

export const AppointmentForm = () => {
  // Declaring our state
  const [technicians, setTechnicians] = useState([]);

  // Getting data from technicians list
  useEffect(() => {
    async function getTechnicians() {
      const techniciansUrl = "http://localhost:8080/api/technicians/";
      const response = await fetch(techniciansUrl);
      if (response.ok) {
        const responseData = await response.json();
        setTechnicians(responseData.technicians);
      }
    }
    getTechnicians();
  }, []);

  return (
    <div className="row">
      <div className="col">
        <h1>Create a Service Appointment</h1>
        <form id="add-tech-form">
          <div>
            <label htmlFor="vin">Automobile VIN</label>
            <input required type="text" name="vin" />
          </div>
          <div>
            <label htmlFor="customer">Customer</label>
            <input required type="text" name="customer" />
          </div>
          <div>
            <label htmlFor="datetime">Date and Time</label>
            <input required type="datetime-local" name="datetime" />
          </div>
          <div>
            <label htmlFor="technician">Technician</label>
            <select name="technician" id="technician">
              <option value="">Choose a Technician</option>
              {technicians.map((tech) => {
                return (
                  <option key={tech.id} value={tech.employee_id}>
                    {tech.first_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="reason">Reason</label>
            <input required type="text" name="reason" />
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  );
};
