import "../App.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function MiddleNav2() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };


    return (
          <nav className={`navbar nav-third navbar-expand-lg ${isNavCollapsed ? 'navbar-light bg-none' : 'navbar-dark bg-dark'}`} style={{margin:"10px 0px"}}>
       <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed}>
         <span className={`navbar-toggler-icon ${isNavCollapsed ? 'navbar-light bg-none' : 'navbar-dark bg-dark'}`}></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
        <ul className="navbar-nav ul-third mr-auto">
          <li className="nav-item active">
            <a className="nav-link bg-white" href="#">Tools</a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-white" href="#">AWS Builder</a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-white" href="#">Start Build</a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-white" href="#">Build Supplies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-white" href="#">Tooling</a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-white" href="#">BlueHosting</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default MiddleNav2;