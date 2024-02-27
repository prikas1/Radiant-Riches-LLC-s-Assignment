// import "../App.scss"
import React from 'react';
import "./middle.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav2 from "./middle-nav1";
import Nav3 from "./middle-nav2";
import Nav4 from "./middle-nav3";
import Card from "./card";
import Card4 from "./card4";
import SmCard1 from "./small-card";

function Middle() {
  return (
    <div className='middle'>
      <p className='heading'>Best Website builders in the US</p>
      <hr />
      <div className="nav-contenert">
        <Nav2 />
        <Nav3 />
        <Nav4 />
      </div>
      <Card />
      <Card />
      <Card />
      <Card4 />
      <h5>Related deals you might like for</h5>
      <div>
        <div class="row">
          <SmCard1 />
          <SmCard1 />
          <SmCard1 />
        </div>
        <div className="bottom-search">
          <div className="heading-div">
            <h4>Sign up and get exclusive special deals</h4>
          </div>
          <div className="input-bottom">
            <div class="input-group ">
              <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="" />
              <div class="input-group-append">
                <button class="btn btn-primary btn-outline-secondary" type="button">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
