import React, { useState, useEffect } from "react";

export default function SalesForm() {
  const [automobile, setAutoMobile] = useState("");
  const [customer, setCustomer] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [price, setPrice] = useState("");
  const [automobiles, setAutomobiles] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [salesPeople, setSalesPeople] = useState([]);
  

  const handleAutoMobile = (event) => {
    const value = event.target.value;
    setAutoMobile(value);
  };
  
  const handleSalesPerson = (event) => {
    const value = event.target.value;
    setSalesPerson(value);
  };
  
  const handleCustomer = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };
  
  const handlePrice = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const data = {
    automobile: automobile,
    salesPerson: salesPerson,
    customer: customer,
    price: price
  
  };


  const salesURL = "http://localhost:8090/api/sales/";
  const fetchConfig = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchData = async () => {

    async function getAutoMobiles() {
      const url = "http://localhost:8100/api/automobiles/";
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          setAutomobiles(data.results);
      }
    }
    getAutoMobiles();

    async function getSalesPeople() {
      const url = "http://localhost:8090/api/salespeople/";
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          setSalesPeople(data.salespeople);
      }
    }
    getSalesPeople();

    async function getCustomers() {
      const url = "http://localhost:8090/api/customers/";
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          setCustomers(data.customers);
      }
    }
    getCustomers();
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(salesURL, fetchConfig);
    if (response.ok) {
      const newSales = await response.json();
      console.log(newSales);
      setAutoMobile("");
      setSalesPerson("");
      setCustomer("");
      setPrice("");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div className="my-5 container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Record a new sales</h1>
              <form onSubmit={handleSubmit} id="create-sales-form">

              <div className="form-floating mb-3">
                    <select
                        value={automobile} onChange={handleAutoMobile} placeholder="automobiles" required type="text" name="automobiles" id="automobiles" className="form-select">
                    <option value="">Choose an automobile VIN</option>
                    {automobiles.map((automobile) => {
                        return(
                            <option key={automobile.id} value={automobile.id}>
                                {automobile.id}
                                </option>
                        );
                    })}
                    </select>
                    </div>

              <div className="form-floating mb-3">
                    <select
                        value={salesPerson} onChange={handleSalesPerson} placeholder="salesPerson" required type="text" name="salesPerson" id="salesPerson" className="form-select">
                    <option value="">Choose a salesperson</option>
                    {salesPeople.map((salesperson) => {
                        return(
                            <option key={salesperson.id} value={salesperson.id}>
                                {salesperson.first_name}
                                </option>
                        );
                    })}
                    </select>
                    </div>


                    <div className="form-floating mb-3">
                    <select
                        value={customer} onChange={handleCustomer} placeholder="Customer" required type="text" name="customer" id="customer" className="form-select">
                    <option value="">Choose a customer</option>
                    {customers.map((customer) => {
                        return(
                            <option key={customer.id} value={customer.id}>
                                {customer.first_name}
                                </option>
                        );
                    })}
                    </select>
                    </div>

                    <div className="form-floating mb-3">
                    <input
                        value={price} onChange={handlePrice} placeholder="Price" required type="text" name="price" id="price" className="form-control"
                    />
                    <label htmlFor="model_name">Price</label>
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