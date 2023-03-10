import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' data-bs-toggle="dropdown" aria-haspopup='true' aria-expanded='false'>Inventory</a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                <li><NavLink className="dropdown-item" aria-current="page" to="/manufacturer/">Manufacturers</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/models/">Vehicle Models</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/automobiles/">Automobiles</NavLink></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' data-bs-toggle="dropdown" aria-haspopup='true' aria-expanded='false'>Sales</a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                <li><NavLink className="dropdown-item" aria-current="page" to="/sales-team/">Add Sales Team Member</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/customer/">Create Potential Customer</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/sales-record/">Create a Sales Record</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/sales-list-all/">List of All Sales</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/sales-by-person/">Sale Person History</NavLink></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' data-bs-toggle="dropdown" aria-haspopup='true' aria-expanded='false'>Service</a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                <li><NavLink className="dropdown-item" aria-current="page" to="/tech-team/">Add a new Technician</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/appointment-list/">List of Appointments </NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/appointment-form/">Add a new Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/service-history/">Service History</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
