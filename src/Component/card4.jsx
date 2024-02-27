import "./card4.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card4() {
  return (
    <div class=" card">
      <div class="row">
        <div class="col div1 d-flex justify-content-center align-items-top">
          <div className="text-center">
            <img className="desktop" src={'/Radiant-Riches-LLC-s-Assignment/desktop.png'} style={{ marginTop: "80px" }} />
            <p style={{ margin: "22px 0px 42px 0px" }}>Builder 1</p>
          </div>
        </div>
        <div class="col-6 div2">
          <p className="line"><span className="headingline">CDK Resposive Builder</span>:An extensive library of widgets and apps, and detailed step-by-step guides</p>
           <p className="p-link">20% Off</p>
          <span className="headingline">Main highlights</span>
          <ul className="card4-ul">
            <li><a className="num-a">9.9</a><a>building responsive</a></li>
            <li><a className="num-a">8.9</a><a>Cool</a></li>
            <li><a className="num-a">8.9</a><a>Docs</a></li>
          </ul>
          <p className="line" style={{ padding: "0px 0px 5px 0px", margin: "0px" }}>Why we love it</p>
          <ul className="card4-ul2">
            <li className="d-flex">
              <a className="num-a icon-tick"></a><a>Documentation</a>
            </li>
            <li className="d-flex">
              <a className="num-a icon-tick"></a><a>Easy Use</a>
            </li>
            <li className="d-flex">
              <a className="num-a icon-tick"></a><a>Out of box</a>
            </li>
          </ul>
          <div className="show-more d-flex">
            <a className="card-a">Show more</a>
            <span class="nav-link iconee" href="#"> </span>
          </div>
        </div>
        <div class="col div3 d-flex justify-content-center align-items-top">
          <div className="text-center">
            <div className="rating-div">
              <span class="nav-link i-icon" href="#"> </span>
              <h3>9.1</h3>
              <p style={{ margin: "5px" }}>Very Good</p>
              <img src={'/Radiant-Riches-LLC-s-Assignment/4star.png'} alt="Star Rating"></img>
            </div>
            <button type="button" class="btn btn-primary" style={{ width: "210px", borderRadius: "12px", height: "40px", marginTop: '50px' }}>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
