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
            <Route path="sales-person">
              <Route path="" element={<SalesPersonForm/>}/>
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
