
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./top.scss"


function Top(){
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

    return(
      <div className='top-div'>
        <div className='top'>
  <nav className="navbar d-flex navbar-expand-lg justify-content-between  navbar-light bg-none" >
  <div>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search" />
      </form>
      </div>
      <div>
      <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed ? true : false}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse `} id="navbarSupportedContent" >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Categories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Website Builders</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Today's deals</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
</div>
</div>
    );
}

export default Top;