import React, { useState } from "react";

export default function CustomerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFirstName = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastName = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleAddress = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const handlePhoneNumber = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };

  const data = {
    first_name: firstName,
    last_name: lastName,
    address: address,
    phone_number: phoneNumber,
  };

  const customersURL = "http://localhost:8090/api/customers/";
  const fetchConfig = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(customersURL, fetchConfig);
    if (response.ok) {
      const newCustomers = await response.json();
      setFirstName("");
      setLastName("");
      setAddress("");
      setPhoneNumber("");
    }
  };



  return (
    <div>
      <div className="my-5 container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a Customer</h1>
              <form onSubmit={handleSubmit} id="create-customer-form">
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
                    value={address} onChange={handleAddress} placeholder="Address" required type="text" name="Address" id="Address" className="form-control"
                  />
                  <label htmlFor="employee_id">Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={phoneNumber} onChange={handlePhoneNumber} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control"
                  />
                  <label htmlFor="employee_id">Phone Number</label>
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