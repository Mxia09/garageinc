import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import { TechnicianForm } from "./service/TechnicianForm";
import { TechnicianList } from "./service/TechnicianList";
import { AppointmentForm } from "./service/AppointmentForm";

function App(props) {
  const technicians = props.techList;
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technicians">
            <Route
              index
              element={<TechnicianList technicians={technicians} />}
            />
            <Route path="create" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route path="create" element={<AppointmentForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
