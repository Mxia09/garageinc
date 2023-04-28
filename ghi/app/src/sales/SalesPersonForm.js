import React, { useState } from "react";

export default function SalesPersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleFirstName = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastName = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleEmployeeId = (event) => {
    const value = event.target.value;
    setEmployeeId(value);
  };

  const data = {
    first_name: firstName,
    last_name: lastName,
    employee_id: employeeId,
  };

  const salespersonURL = "http://localhost:8090/api/salespeople/";
  const fetchConfig = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(salespersonURL, fetchConfig);
    if (response.ok) {
      const newSalesPerson = await response.json();
      setFirstName("");
      setLastName("");
      setEmployeeId("");
    }
  };



  return (
    <div>
      <div className="my-5 container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a Salesperson</h1>
              <form onSubmit={handleSubmit} id="create-salesperson-form">
                <div className="form-floating mb-3">
                  <input
                    value={firstName} onChange={handleFirstName} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control"
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={lastName} onChange={handleLastName} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control"
                  />
                  <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={employeeId} onChange={handleEmployeeId} placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control"
                  />
                  <label htmlFor="employee_id">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}