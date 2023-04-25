import React from "react";

export const AppointmentForm = () => {
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
            <select name="technician" id="technician"></select>
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
