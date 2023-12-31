import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import SalesPersonList from "./sales/SalesPersonList";
import SalesPersonForm from "./sales/SalesPersonForm";
import CustomersList from "./sales/CustomersList";
import CustomerForm from "./sales/CustomersForms";
import SalesList from "./sales/SalesList";
import SalesForm from "./sales/SalesForms";
import SalesHistory from "./sales/SalesHistory";
import ManufacturerList from "./manufacturers/ManufacturerList";
import ManufacturerForm from "./manufacturers/ManufacturerForm";
import ModelForm from "./models/ModelForm";
import { TechnicianForm } from "./service/TechnicianForm";
import { TechnicianList } from "./service/TechnicianList";
import { AppointmentForm } from "./service/AppointmentForm";
import { AppointmentList } from "./service/AppointmentList";
import { ServiceHistory } from "./service/ServiceHistory";
import { AutoList } from "./automobile/AutoList";
import { AutoForm } from "./automobile/AutoForm";
import { ModelList } from "./models/ModelList";

function App(props) {
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
            <Route index element={<TechnicianList />} />
            <Route path="create" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path="create" element={<AppointmentForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="salesperson/" element={<SalesPersonList />} />
          <Route path="salesperson/create" element={<SalesPersonForm />} />
          <Route path="customers/" element={<CustomersList />} />
          <Route path="customers/create" element={<CustomerForm />} />
          <Route path="manufacturers/" element={<ManufacturerList />} />
          <Route path="manufacturers/create" element={<ManufacturerForm />} />
          <Route path="models/create" element={<ModelForm />} />
          <Route path="models" element={<ModelList />} />
          <Route path="sales/" element={<SalesList />} />
          <Route path="sales/create" element={<SalesForm />} />
          <Route path="sales/history" element={<SalesHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
