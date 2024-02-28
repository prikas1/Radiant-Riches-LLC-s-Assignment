// import React from 'react';
// import "./middle.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MIddleNav1 from "./middle-nav1";
// import MiddleNav2 from "./middle-nav2";
// import MiddleNav3 from "./middle-nav3";
// import Card from "./card";
// import Card4 from "./card4";
// import SmCard1 from "./small-card";

// function Middle() {
//   return (
//     <div className='middle'>
//       <p className='heading'>Best Website builders in the US</p>
//       <hr />
//       <div className="nav-contenert">
//         <MIddleNav1 />
//         <MiddleNav2 />
//         <MiddleNav3 />
//       </div>
//       <Card
//         heading1="WixPro 72-Inch Responsive Website Builder- " 
//         para1 = "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
//         heading2="Main highlights"
//         para2= "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
//        />
//       <Card
//         heading1="SiteCraft 68-Inch Ultimate Web Design Studio- " 
//         para1 = "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
//         heading2="Main highlights"
//         para2= "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
//        />
//       <Card 
//         heading1="WixPro 72-Inch Responsive Website Builder- "
//         para1 = "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
//         heading2="Main highlights"
//         para2= "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
//       />
//       <Card4 />
//       <h5>Related deals you might like for</h5>
//       <div>
//         <div class="row">
//           <SmCard1 />
//           <SmCard1 />
//           <SmCard1 />
//         </div>
//         <div className="bottom-search">
//           <div className="heading-div">
//             <h4>Sign up and get exclusive special deals</h4>
//           </div>
//           <div className="input-bottom">
//             <div class="input-group ">
//               <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="" />
//               <div class="input-group-append">
//                 <button class="btn btn-primary btn-outline-secondary" type="button">Sign Up</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Middle;



import React from 'react';
import "./middle.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import MIddleNav1 from "./middle-nav1";
import MiddleNav2 from "./middle-nav2";
import MiddleNav3 from "./middle-nav3";
import Card from "./card";
import Card4 from "./card4";
import SmCard1 from "./small-card";
import contents from './CardData';

function Middle() {
  return (
    <div className='middle'>
      <p className='heading'>Best Website builders in the US</p>
      <hr />
      <div className="nav-contenert">
        <MIddleNav1 />
        <MiddleNav2 />
        <MiddleNav3 />
      </div>
      {contents.map(content => (
          <Card 
          key={content.id} 
          heading1={content.heading1} 
          para1={content.para1}
          heading2={content.heading2}
          para2={content.para2}
        
        />
      ))}
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

