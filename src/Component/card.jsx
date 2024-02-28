// import "../App.scss"
// import "./middle.scss"
import "./card.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


function Card(props){
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
      <p className="line"><span className="headingline">{props.heading1}</span>{props.para1}</p>
       <span className="headingline">{props.heading2}</span>
       <p className="line" style={{marginLeft: '20px'}} >{props.para2}</p>
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