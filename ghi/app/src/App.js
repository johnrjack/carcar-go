import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutoList from './Inventory/AutoList'
import AddAutoForm from './Inventory/NewAutoForm';
import ManufacturerList from './Inventory/ManufacturerList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import ModelList from './Inventory/ModelList';
import AddModelForm from './Inventory/ModelForm';
import SalesPersonForm from './Sales/SalesPersonForm';
import CustomerForm from './Service/CustomerForm';
import SalesRecordForm from './Sales/SalesRecordForm';
import SaleList from './Sales/SaleList';
import SalesByPerson from './Sales/SalesByPerson';
import AddTechnicianForm from './Service/TechnicianForm';
import AppointmentList from './Service/AppoitmentList';
import AddAppointmentForm from './Service/AppointmentForm';
import ServiceHistory from './Service/ServiceHistory'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
            <Route path="automobiles">
              <Route path="" element={<AutoList/>}/>
              <Route path="new" element={<AddAutoForm/>} />
            </Route>
            <Route path="manufacturer">
              <Route path="" element={<ManufacturerList/>}/>
              <Route path="new" element={<ManufacturerForm/>} />
            </Route>
            <Route path="models">
              <Route path="" element={<ModelList/>}/>
              <Route path="new" element={<AddModelForm/>}/>
            </Route>
            <Route path="sales-team">
              <Route path="" element={<SalesPersonForm/>}/>
            </Route>
            <Route path="customer">
              <Route path="" element={<CustomerForm/>}/>
            </Route>
            <Route path="sales-record">
              <Route path="" element={<SalesRecordForm/>}/>
            </Route>
            <Route path="sales-list-all">
              <Route path="" element={<SaleList/>}/>
            </Route>
            <Route path="sales-by-person">
              <Route path="" element={<SalesByPerson/>}/>
            </Route>
            <Route path="tech-team">
              <Route path="" element={<AddTechnicianForm/>}/>
            </Route>
            <Route path="appointment-list">
              <Route path="" element={<AppointmentList/>}/>
            </Route>
            <Route path="appointment-form">
              <Route path="" element={<AddAppointmentForm/>}/>
            </Route>
            <Route path="service-history">
              <Route path="" element={<ServiceHistory/>}/>
            </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
