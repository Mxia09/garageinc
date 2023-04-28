import React, { useState, useEffect }  from "react";


export default function SalesHistory() {
    const [sales, setSales] = useState([]);
    const [salesPerson, setSalesPerson] = useState("");
    const [salesPeople, setSalesPeople] = useState([]);

    const handleSalesPerson = (event) => {
        const value = event.target.value;
        setSalesPerson(value);
      };

      const data = {
        salesPerson: salesPerson,
    };

    async function LoadSales() {
        const response = await fetch("http://localhost:8090/api/sales/");
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)
        }
    }

    useEffect(() => {
        LoadSales();
    }, []);


    return (
        <div>
            <h1>Salesperson History</h1>

            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                 <tbody>
                    {sales.map((salesData) => {
                        return (
                            <tr key={salesData.id}>
                                <td>{ salesData.salesperson.employee_id }</td>
                                <td>{ salesData.customer.first_name }</td>
                                <td>{ salesData.automobile.vin}</td>
                                <td>{ salesData.price }</td>
                            </tr>
                        )
                    })}
                </tbody> 
            </table>
        </div>
    );
}