import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutoList from './AutoList'
import AddAutoForm from './NewAutoForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import ModelList from './ModelList';
import AddModelForm from './ModelForm';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SaleList from './SaleList';
import SalesByPerson from './SalesByPerson';
import AddTechnicianForm from './TechnicianForm';
import AppointmentList from './AppoitmentList';
import AddAppointmentForm from './AppointmentForm';
import ServiceHistory from './ServiceHistory'

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
