import React, { useState, useEffect } from "react";

export const ModelList = () => {
  const [models, setModels] = useState([]);

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
  return <div>ModelList</div>;
};
