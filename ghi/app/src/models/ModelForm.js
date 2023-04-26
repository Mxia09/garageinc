import React, { useState, useEffect } from "react";

export default function ModelForm() {
  const [modelName, setModelName] = useState("");
  const [picture, setPicture] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [manufacturers, setManufacturers] = useState([]);

  const handleModelName = (event) => {
    const value = event.target.value;
    setModelName(value);
  };

  const handlePicture = (event) => {
    const value = event.target.value;
    setPicture(value);
  };

  const handleManufacturer = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  };


  const data = {
    modlet_name: modelName,
    picture: picture,
    manufacturer: manufacturer,
  };

  const modelsURL = "http://localhost:8100/api/models/";
  const fetchConfig = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchData = async () => {
    async function getManufacturers() {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
    }
}
getManufacturers();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(modelsURL, fetchConfig);
    if (response.ok) {
      const newModels = await response.json();
      console.log(newModels);
      setModelName("");
      setPicture("");
      setManufacturer("");
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
              <h1>Create a vehicle model</h1>
              <form onSubmit={handleSubmit} id="create-model-form">
                <div className="form-floating mb-3">
                  <input
                    value={modelName} onChange={handleModelName} placeholder="Model Name" required type="text" name="model_name" id="model_name" className="form-control"
                  />
                  <label htmlFor="model_name">Model Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={picture} onChange={handlePicture} placeholder="Picture" required type="text" name="picture" id="picture" className="form-control"
                  />
                  <label htmlFor="picture">Picture URL</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    value={manufacturer} onChange={handleManufacturer} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-select">
                  <option value="">Choose a manufacturer</option>
                  {manufacturers.map((manufacturer) => {
                    return(
                        <option key={manufacturer.id} value={manufacturer.id}>
                            {manufacturer.name}
                            </option>
                    );
                })}
                  </select>
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