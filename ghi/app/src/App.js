import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import SalesPersonList from "./sales/SalesPersonList";
import { TechnicianForm } from "./service/TechnicianForm";
import { TechnicianList } from "./service/TechnicianList";
import { AppointmentForm } from "./service/AppointmentForm";
import { AppointmentList } from "./service/AppointmentList";
import { ServiceHistory } from "./service/ServiceHistory";
import { AutoList } from "./automobile/AutoList";
import { AutoForm } from "./automobile/AutoForm";



function App(props) {
  const technicians = props.techList;

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="automobiles">
            <Route index element={<AutoList />}></Route>
            <Route path="create" element={<AutoForm />}></Route>
          </Route>
          <Route path="technicians">
            <Route
              index
              element={<TechnicianList technicians={technicians} />}
            />
            <Route path="create" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path="create" element={<AppointmentForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="sales/" element={<SalesPersonList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
