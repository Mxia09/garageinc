import React, { useEffect, useState } from "react";

export const AppointmentForm = () => {
  // Declaring our state
  const [vin, setVin] = useState("");
  const [customer, setCustomer] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [technician, setTechnician] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [reason, setReason] = useState([]);

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

  //   Handling state change
  const changeVin = (e) => {
    setVin(e.target.value);
  };

  const changeCustomer = (e) => {
    setCustomer(e.target.value);
  };

  const changeDateTime = (e) => {
    setDateTime(e.target.value);
  };

  const changeTechnician = (e) => {
    setTechnician(e.target.value);
  };

  const changeReason = (e) => {
    setReason(e.target.value);
  };

  //   Submitting form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAppointmentData = {
      date_time: dateTime,
      reason,
      vin,
      customer,
      technician,
    };

    const createAppointmentUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(newAppointmentData),
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(createAppointmentUrl, fetchConfig);
    if (response.ok) {
      alert("New Appointment Created!");
    }
  };

  return (
    <div className="row">
      <div className="col">
        <h1>Create a Service Appointment</h1>
        <form id="add-tech-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="vin">Automobile VIN</label>
            <input
              required
              type="text"
              name="vin"
              value={vin}
              onChange={changeVin}
            />
          </div>
          <div>
            <label htmlFor="customer">Customer</label>
            <input
              required
              type="text"
              name="customer"
              value={customer}
              onChange={changeCustomer}
            />
          </div>
          <div>
            <label htmlFor="datetime">Date and Time</label>
            <input
              required
              type="datetime-local"
              name="datetime"
              value={dateTime}
              onChange={changeDateTime}
            />
          </div>
          <div>
            <label htmlFor="technician">Technician</label>
            <select
              name="technician"
              id="technician"
              value={technician}
              onChange={changeTechnician}
            >
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
            <input
              required
              type="text"
              name="reason"
              value={reason}
              onChange={changeReason}
            />
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  );
};
