import React from "react";

export const AppointmentForm = () => {
  return (
    <div className="row">
      <div className="col">
        <h1>Create a Service Appointment</h1>
        <form id="add-tech-form">
          <div>
            <input required type="date" />
          </div>
          <div>
            <input required type="time" />
          </div>
          <div>
            <input />
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  );
};
