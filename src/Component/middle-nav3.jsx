
import "../App.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function Nav4(){
   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

    return(
   
<nav className={`navbar nav-fourth navbar-expand-lg ${isNavCollapsed ? 'navbar-light bg-none' : 'navbar-dark bg-dark'}`}>
      <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed}>
       <span className={`navbar-toggler-icon ${isNavCollapsed ? 'navbar-light bg-none' : 'navbar-dark bg-dark'}`}></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
        <div className='left-align'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-vector" href="#"> </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Hosting for all</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-vector" href="#"> </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Hosting</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-vector" href="#"> </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Hosting6</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-vector" href="#"> </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hosting5</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}
export default Nav4;