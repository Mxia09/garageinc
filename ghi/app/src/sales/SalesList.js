import React, { useState, useEffect }  from "react";


export default function SalesList() {
    const [sales, setSales] = useState([]);

    async function LoadSaless() {
        const response = await fetch("http://localhost:8090/api/sales/");
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)
        }
    }
    useEffect(() => {
        LoadSaless();
    }, []);


    return (
        <div>
            <h1>Sales</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson Employee ID</th>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((salesData) => {
                        return (
                            <tr key={salesData.employee_id}>
                                <td>{ salesData.salesperson }</td>
                                <td>{ salesData.customer }</td>
                                <td>{ salesData.vin}</td>
                                <td>{ salesData.price }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}