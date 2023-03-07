import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutoList from './AutoList'
import AddAutoForm from './NewAutoForm';
import ManufacturerList from './ManufacturerList';

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
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
