import "../App.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function Nav2() {
     const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

    return(
      <div>
    <nav className={`navbar nav-sec navbar-expand-lg ${isNavCollapsed ? 'navbar-light bg-none' : 'navbar-dark bg-dark'}`}>
      <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed ? true : false}>
        <span className={`navbar-toggler-icon ${isNavCollapsed ? 'navbar-light bg-none' : 'navbar-dark bg-dark'}`}></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
        <div className='left-align'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link icon" href="#"></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Last Updated</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">-</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">February 22, 2020</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-i" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Advertising Disclosure</a>
            </li>
          </ul>
        </div>
        <div className='righ-align collapse navbar-collapse justify-content-end'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Top Relevant</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-dropdown" href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
<hr className="nav2-hr" />
</div>
    );
}

export default Nav2;