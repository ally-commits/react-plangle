import React from 'react';
import Jquery from 'jquery';
import building1 from './../../pngs/building1.png';
import building2 from './../../pngs/building2.png';
import building3 from './../../pngs/building3.png';
import building4 from './../../pngs/building4.png';
import grass from './../../pngs/grass.png';
import ground from './../../pngs/ground.png';
import layer1 from './../../pngs/layer1.png';
import layer2 from './../../pngs/layer2.png';
import lefttree1 from './../../pngs/lefttree1.png';
import lefttree2 from './../../pngs/lefttree2.png';
import map from './../../pngs/map.png';
import icon from './../../pngs/icon.png';
import pin2 from './../../pngs/pin2.png';
import plama from './../../pngs/plama.png';
import reflection from './../../pngs/reflection.png';
import righttree1 from './../../pngs/righttree1.png';
import righttree2 from './../../pngs/righttree2.png';
import placeholder from './../../pngs/placeholder.png';
import facebook from './../../pngs/facebook.png';
import google from './../../pngs/google.png';
import twitter from './../../pngs/twitter.png';
import './../../style/reach.css';
let arr = [];
for(let i=1;i<=400;i++) {
  arr.push(i);
} 

class ReachUs extends React.Component {
  state = {
    data: arr,
    mapicon: "<img className=placeholder src="+placeholder+" />"
  }

  // componentDidMount = () =>{
  //     console.log('clled');
  //     Jquery("#map").toggleClass('pin2');
  // }

  // parallax = () => {
  //   console.log("calling nk");
  // }

  // callFunc = (e) => {
  //   console.log("called")
  //   let id = e.target.id;
  //   let val = Jquery('#build1');
    
  //   // if(id == 44 || id == 54) {
  //   //   val.attr('class',"content-img active")
  //   // } else {
  //   //   val.removeClass('active')
  //   // }
  // }
  render() {  
    return (
      <div className="reachus">
        <div className="content">
          {/* { <div className="content-div">
            {
              this.state.data.map((val,i) => {
                return (
                  <div className="content-div-content" id={val===133?'placeholder':val}
                  >{val}</div>
                )
              })
            }
          </div>} */}
          

          <img src={map} className="content-img"></img>
          <img src={icon} alt="img" className="content-img scale delay-0-2" />
          <img src={layer2} alt="img" className="content-img  active  delay-0-1" />
          <img src={layer1} alt="img" className="content-img active  delay-0-4" />
          <img src={building1} alt="img" className="content-img active delay-0-4" id="build1" />
          <img src={building2} alt="img" className="content-img active delay-0-1" />
          <img src={building3} alt="img" className="content-img active delay-0-2" />
          <img src={building4} alt="img" className="content-img active delay-0-3" />
          <img src={lefttree1} alt="img" className="content-img right delay-0-1" />
          <img src={righttree1} alt="img" className="content-img  right  delay-0-2" />
          <img src={grass} alt="img" className="content-img active delay-0-3" />
          
          
          <img src={lefttree2} alt="img" className="content-img  right  delay-0-4" />
          
          <img src={righttree2} alt="img" className="content-img  right  delay-0-3" />
          <img src={reflection} alt="img" className="content-img  active  delay-0-1" />
          <img src={plama} alt="img" className="content-img  active  delay-0-2" />
          <img src={ground} alt="img" className="content-img" />
          <div className="content-data">
            <div className="first">
              <h5>ADDRESS</h5>
              <small><p>K-tech Innovation Hub, 3rd</p></small>
              <small><p>Floor, Plama Center, Bejai - </p></small>
              <small><p>Kapikad Rd, Mangaluru,</p></small>
              <small><p>Karnataka 575004</p></small>
              <h5>CONTACTS</h5>
              <small><p>+91 - 9663185648</p></small>
              <small><p>contact@planglestudio.com</p></small>
            </div>
            <div className="social">
              <img src={facebook} alt="img" className="social-icon delay-0-2" />
              <img src={google} alt="img" className="social-icon delay-0-2" />
              <img src={twitter} alt="img" className="social-icon delay-0-2" />
            </div>
            <div className="last">
              <h5>CONTACTS</h5>
              <small><p>K-tech Innovation Hub, 3rd</p></small>
              <small><p>Floor, Plama Center, Bejai - </p></small>
              <small><p>Kapikad Rd, Mangaluru,</p></small>
              <small><p>Karnataka 575004</p></small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReachUs;
