import React from 'react';
import {Link} from 'react-router-dom';

import pangelLogo from '../../img/logowhite.png';

class Navbar extends React.Component {
    state = {
        checked: false
    }
    onHandleNav = (e) => {
        let listItem= document.querySelectorAll(".list-item");
        let list = document.querySelector(".list");
        let menu = document.getElementById("menu");
        let dim = window.innerWidth;
        this.setState({checked: e.target.checked});
        if(e.target.checked) {
            list.classList.toggle("none");
            listItem.forEach(val => {
                val.classList.remove("bounceOutRight")
                val.classList.add("bounceInRight")
            })
        } else { 
            listItem.forEach(val => {
                val.classList.remove("bounceInRight")
                val.classList.add("bounceOutRight")
            })
            if(dim > 600) {
                setTimeout(() => {
                    list.classList.toggle("none");
                },500)
            } else {
                list.classList.toggle("none");
            }
        } 
        menu.classList.toggle("active")
    }
    render() {
        let dim = window.innerWidth;
        return ( 
            <nav className="nav flex-h">
                <div className="container flex-h">
                    <Link to="/"><img src={pangelLogo} className="nav-logo" style={{filter: 'invert(10)'}} alt="pangle logo"/></Link>
                    <svg className="ham hamRotate ham1" viewBox="0 0 100 100" width={80} id="menu">
                        <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path className="line middle" d="m 30,50 h 40" />
                        <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                    </svg>
                    <input type="checkbox" className="checkbox" id="checkbox" onChange={this.onHandleNav} />
                    {dim > 600
                        ?
                    <div className="list flex-h none"> 
                        <li className="list-item animated "><Link to="/" className="nav-link">What we Do</Link></li> 
                        <li className="list-item animated "><Link to="/team" className="nav-link">Team</Link></li> 
                        <li className="list-item animated "><Link to="/our-projects" className="nav-link">Our Projects</Link></li> 
                        
                        <li className="list-item animated "><Link to="/news" className="nav-link">News </Link></li> 
                        <li className="list-item animated "><Link to="/career" className="nav-link">Careers</Link></li> 
                        <li className="list-item animated "><Link to="/reach-us" className="nav-link">Reach Us</Link></li> 
                    </div>
                        :
                    <div className="list flex-v none nav-mobile fadeIn animated-nav" onClick={() => {
                        let e = {
                            target: {
                                checked: false
                            }
                        }
                        this.onHandleNav(e);
                    }}>
                        <li className="list-item-mob "><Link to="/" className="nav-link-mob">What we Do</Link></li> 
                        <li className="list-item-mob "><Link to="/team" className="nav-link-mob">Team</Link></li> 
                        <li className="list-item-mob "><Link to="/our-projects" className="nav-link-mob">Our Projects</Link></li> 
                        
                        <li className="list-item-mob "><Link to="/news" className="nav-link-mob">News </Link></li> 
                        <li className="list-item-mob "><Link to="/career" className="nav-link-mob">Careers</Link></li> 
                        <li className="list-item-mob "><Link to="/reach-us" className="nav-link-mob">Reach Us</Link></li> 
                    </div>
                    }
                </div>
            </nav> 
        )
    }
}
export default Navbar;
