import React, { useState, useEffect }  from "react";


export default function CustomersList() {
    const [customers, setCustomers] = useState([]);

    async function LoadCustomers() {
        const response = await fetch("http://localhost:8090/api/customers/");
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers)
        }
    }

    useEffect(() => {
        LoadCustomers();
    }, []);


    return (
        <div>
            <h1>Customers</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customersData) => {
                        return (
                            <tr key={customersData.id}>
                                <td>{ customersData.first_name }</td>
                                <td>{ customersData.last_name }</td>
                                <td>{ customersData.phone_number}</td>
                                <td>{ customersData.address }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}