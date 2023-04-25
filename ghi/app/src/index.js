import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// --- Getting data from our API ---
async function loadServiceData() {
  const techResponse = await fetch("http://localhost:8080/api/technicians/");

  if (techResponse.ok) {
    const techData = await techResponse.json();
    root.render(
      <React.StrictMode>
        <App techList={techData.technicians} />
      </React.StrictMode>
    );
  } else {
    console.error(techResponse);
  }
}

loadServiceData();
