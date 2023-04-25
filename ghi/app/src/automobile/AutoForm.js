import React, { useState, useEffect } from "react";

export const AutoForm = () => {
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);

  //   Fetch model data
  useEffect(() => {
    const getModels = async () => {
      const modelUrl = "http://localhost:8100/api/models/";
      const response = await fetch(modelUrl);

      if (response.ok) {
        const modelData = await response.json();
        setModels(modelData.models);
      }
    };
    getModels();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAutoData = { color, year, vin, model_id: model };

    const createAutomobileUrl = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(newAutoData),
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(createAutomobileUrl, fetchConfig);
    if (response.ok) {
      alert("New Automobile Created!");
    }
  };
  return (
    <div className="row">
      <div className="col">
        <h1>Add an Automobile to Inventory</h1>
        <form onSubmit={handleSubmit} id="auto-form">
          <div>
            <input
              required
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              //   Writing onChange in one line this time to be concise
            />
          </div>
          <div>
            <input
              required
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div>
            <input
              required
              placeholder="VIN"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
            />
          </div>
          <div>
            <select value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="">Choose a Model</option>
              {models.map((model) => {
                return (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  );
};
