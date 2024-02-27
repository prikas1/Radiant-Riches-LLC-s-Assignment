// import "../App.scss"
// import "./middle.scss"
import "./footer.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer(){
    return(
      <div className="footer d-flex justify-content-between">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link footer-a-first" href="#">Categories </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Web Builder</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Hosting</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Data Center</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Robotic-Automation</a>
      </li>
      </ul>
      <ul class="navbar-nav mr-auto" style={{padding:"10px"}}>
      <li class="nav-item active">
       
        <a class="nav-link footer-a-first" href="#" style={{fontSize:"20px"}}>Contact </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Web Builder</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Hosting</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Data Center</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Robotic-Automation</a>
      </li>
      
    </ul>
     
     <div className="d-flex justify-content-center align-items-center">
      <a className="" style={{padding:"0px 10px 0px 0px", marginLeft:"0px"}}>Show more</a>
      <span class="nav-link footer-icon-dropdown " href="#"> </span> 
      </div>
      </div>
    );
}

export default Footer;