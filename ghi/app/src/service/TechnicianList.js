import React from "react";

export const TechnicianList = ({ technicians }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Employee ID</th>
        </tr>
      </thead>
      <tbody>
        {/* Returning a row for each technician in our tech list */}
        {technicians.map((tech) => (
          <tr>
            <td>{tech.first_name}</td>
            <td>{tech.last_name}</td>
            <td>{tech.employee_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
