import React, { useState, useEffect }  from "react";


export default function SalesPersonList() {
    const [salesperson, setSalesPerson] = useState([]);

    async function LoadSalesPeople() {
        const response = await fetch("http://localhost:8090/api/salespeople/");
        if (response.ok) {
            const data = await response.json();
            setSalesPerson(data.salesperson)
        }
    }

    useEffect(() => {
        LoadSalesPeople();
    }, []);


    return (
        <div>
            <h1>Salespeople</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {salesperson.map(salesperson => {
                        return (
                            <tr key={salesperson.employeeid}>
                                <td>{ salesperson.first_name }</td>
                                <td>{ salesperson.last_name }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}