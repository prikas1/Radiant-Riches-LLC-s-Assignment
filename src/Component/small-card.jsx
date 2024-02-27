import React from 'react';
import "./small-card.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

function SmCard1(){
  return(
    <div class="col-sm ">
    <div className="sm-card1 d-flex justify-content-center ">
    <div>
    <div className="d-flex justify-content-center ">
     <img className="desktop " src={'/desktop.png'} />
     </div>
     <div className="d-flex p-div1">
      <p className="p-link">20% Off</p>
      <p className="p-link">Limited time </p>
     </div>
     <h6 className="d-flex justify-content-center align-items-top">Webbuilder 1</h6>
     <p style={{marginBottom:"5px"}}>Computer  Modern clasic with wix support</p>
     <div className="d-flex p-div2">
      <p className="p-link">$39.96</p>
      <p className="p-link">$49.96</p>
      <p className="p-link">(20% Off)</p>
     </div>
     <div className="d-flex justify-content-center ">
     <button type="button" class="btn btn-primary">View</button>
     </div>
    </div>
    </div>
    </div>
  );
}

export default SmCard1;