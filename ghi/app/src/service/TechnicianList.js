import React, { useEffect, useState } from "react";

export const TechnicianList = () => {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const getTechnicians = async () => {
      const techUrl = "http://localhost:8080/api/technicians/";
      const response = await fetch(techUrl);

      if (response.ok) {
        const techData = await response.json();
        setTechnicians(techData.technicians);
      }
    };
    getTechnicians();
  }, []);

  return (
    <>
      <h1>Technicians</h1>
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
    </>
  );
};
