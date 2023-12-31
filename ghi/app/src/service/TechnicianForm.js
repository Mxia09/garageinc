import React, { useState } from "react";

export const TechnicianForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  //   Handle change within input
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeEmployeeId = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTechData = {
      first_name: firstName,
      last_name: lastName,
      employee_id: employeeId,
    };

    // POST request to create a new technician
    const createTechUrl = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(newTechData), // turn our js object into json string
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(createTechUrl, fetchConfig);

    if (response.ok) {
      alert("New Technician Created!");
    } else {
      alert("Employee ID has too many digits");
    }

    // Reset form
    setFirstName("");
    setLastName("");
    setEmployeeId("");
  };

  return (
    <div className="row">
      <div className="col">
        <h1>Add a Technician</h1>
        <form onSubmit={handleSubmit} id="add-tech-form">
          <div>
            <input
              required
              onChange={changeFirstName}
              value={firstName}
              type="text"
              placeholder="First Name"
              id="first-name"
            />
          </div>
          <div>
            <input
              required
              onChange={changeLastName}
              value={lastName}
              type="text"
              placeholder="Last Name"
              id="last-name"
            />
          </div>
          <div>
            <input
              required
              onChange={changeEmployeeId}
              value={employeeId}
              type="number"
              placeholder="Employee ID"
              id="employee-id"
            />
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  );
};
