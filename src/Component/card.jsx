// import "../App.scss"
// import "./middle.scss"
import "./card.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


function Card(){
  return(
     <div class=" card">
       <button type="button" class="btn btn-warning best-choice" ><span class="nav-link cup-icon " href="#"> </span> Best Choice</button>
   
  <div class="row">
    <div class="col div1 d-flex justify-content-center align-items-top" >
    <div className="text-center">
      
     <img className="desktop"  src={'/Radiant-Riches-LLC-s-Assignment/desktop.png'} style={{marginTop:"80px"}} />
     <p style={{margin:"22px 0px 42px 0px" }} >Builder 1</p>
     </div>
    </div>
    <div class="col-6 div2">
      <p className="line"><span className="headingline">WixPro 72-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
       <span className="headingline">Main highlights</span>
       <p className="line" style={{marginLeft: '20px'}} >[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
      <div className="show-more d-flex">
      <a>Show more</a>
      <span class="nav-link iconee " href="#"> </span> 
      </div>
   
    </div>
    <div class="col div3 d-flex justify-content-center align-items-top  ">
    <div className="text-center">
      <div className="rating-div">
      <span class="nav-link i-icon " href="#"> </span> 
      <h3>9.8</h3>
      <p style={{margin:"5px"}}>Exceptional</p>
      <img src={'/Radiant-Riches-LLC-s-Assignment/star-rating.png'}></img>
      </div>
       <button type="button" class="btn btn-primary" style={{width:"210px", borderRadius:"12px", height: "40px", marginTop:'50px'}}>View</button>
  </div>
    </div>
  </div>
</div>
  );

}

export default Card;