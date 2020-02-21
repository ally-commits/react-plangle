import React from 'react';

import mainColored from '../../img/career/main_colored.jpg';
import brain from '../../img/career/brain.png';
import light from '../../img/career/light.png';
import color_samples from '../../img/career/color_samples.png';
import pen_cap from '../../img/career/pen_cap.png';
import pen from '../../img/career/pen.png';
import pencils from '../../img/career/pencils.png';
import plane from '../../img/career/plane.png';
import post_it from '../../img/career/post_it.png';

let data = [
    {key: 'plane',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. In laboriosam magnam placeat? Ab, libero. Modi et neque expedita.'},
    {key: 'brain',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. In laboriosam magnam placeat? Ab, libero. Modi et neque expedita.'},
    {key: 'light',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. In laboriosam magnam placeat? Ab, libero. Modi et neque expedita.'},
    {key: 'color_samples',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. In laboriosam magnam placeat? Ab, libero. Modi et neque expedita.'},
    {key: 'pen_cap',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. In laboriosam magnam placeat? Ab, libero. Modi et neque expedita.'},
    {key: 'pen',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. In laboriosam magnam placeat? Ab, libero. Modi et neque expedita.'},
    {key: 'post_it',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. In laboriosam magnam placeat? Ab, libero. Modi et neque expedita.'},
    {key: 'pencils',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. In laboriosam magnam placeat? Ab, libero. Modi et neque expedita.'}
]

class Career extends React.Component {
    state = {
        pen_cap: false,
        brain: false,
        post_it: false,
        done: false,        
        light: false,
        pencils: false,
        color_samples: false,
        plane: false,
        view: false,
        pen: false,
        data: data
    }
    showContent = (e) => {
        this.setState({pen_cap: false,view: false,brain: false,post_it: false,light: false,color_samples: false,pencils: false,plane: false,pen: false,done: false})
        let id = parseInt(e.target.id);
        if(id === 1 || id === 2 || id === 3 || id === 11 || id === 12) {
            this.setState({view: 'pen_cap',pen_cap: true})
        } 
        if(id === 33 || id === 34 || id === 42 || id === 43 || id === 44 || id === 45 || id === 52 || id === 53 || 
           id === 54 || id === 55 || id === 62 || id === 63 || id === 64 || id === 65 || id === 72 || id === 73 ||
           id === 74 || id === 82 || id === 83 || id === 84 || id === 93 || id === 75)  {
            this.setState({view: 'brain',brain: true})
        }
        if(id === 15 || id ===16 || id ===25 || id === 26 || id === 35 || id === 36) {
            this.setState({view: 'post_it',post_it: true})
        }
        if(id === 27 || id === 28 || id ===37 || id === 38 || id === 47 || id === 48) {
            this.setState({view: 'light',light: true})
        }
        if(id === 19 || id === 20 || id === 29 || id === 30 || id === 71 || id === 81 || id === 91) {
            this.setState({view: 'color_samples',color_samples: true})
        }
        if(id === 60 || id === 70 || id === 80 || id === 90 || id === 100 || id === 69 || id === 79 || id === 89 ||
           id === 99 || id === 88 || id === 98) {
            this.setState({view: 'pencils',pencils: true})
        }
        if(id === 67 || id === 76 || id === 77 || id === 86) {
            this.setState({view: 'plane',plane: true})
        }
        if(id === 21 || id === 22 || id === 31 || id === 23 || id === 13) {
            this.setState({view: 'pen',pen: true})
        }
    }
    render() {
        let html = [];
        let done = this.state.done ? '0%' : '100%';
        let classNameVal = this.state.done ? 'fadeInImg animated-img career-main-img' : 'career-main-img';
        for(let i=1;i<=100;i++) { 
            html.push(i)
        } 
        return ( 
            <div className="main-career flex-h">
                <div className="flex-h career-img-container">
                    <div className="samp-img-container flex-h">
                        {html.map(val => {
                            return (
                                <div className="samp-img-content" key={Math.random()} id={val}
                                    onClick={this.showContent}
                                >{}</div>
                            )
                        })}
                    </div>
                    <img src={mainColored} alt="img" className={classNameVal} style={{filter: `grayscale(${done})` }}/>
                    {this.state.brain && <img style={{zIndex: 3}}src={brain} alt="img" className="career-img fadeInImg animated-img" />}
                    {this.state.light && <img src={light} alt="img" className="career-img fadeInImg animated-img" />}
                    {this.state.color_samples && <img src={color_samples} alt="img" className="career-img fadeInImg animated-img" /> }
                    {this.state.pen_cap && <img src={pen_cap} alt="img" className="career-img fadeInImg animated-img" />}
                    {this.state.pen && <img src={pen} alt="img" className="career-img fadeInImg animated-img" />}
                    {this.state.pencils && <img src={pencils} alt="img" className="career-img fadeInImg animated-img" />}
                    {this.state.plane && <img src={plane} alt="img" className="career-img fadeInImg animated-img" />}
                    {this.state.post_it && <img src={post_it} alt="img" className="career-img fadeInImg animated-img" /> }
                </div>
                <div className="career-content-container" >
                    {this.state.view
                        ?
                    <div>
                        {this.state.data.map(val => {
                            if(val.key === this.state.view) {
                                return (
                                    <div className="slideInUp animated-img popup-content"> 
                                        <span className="close-btn" style={{color: 'black'}}onClick={() => this.setState({view: false})}>X</span>
                                        <h1 className="popup-head">{val.key}</h1>
                                        <p className="popup-content">{val.content}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div style={{display: 'none'}} ></div>
                                )
                            }
                        })}
                    </div>
                        :
                    <div className="slideInUp animated-img flex-v">
                        <form className="flex-v form" onSubmit={(e) => {
                            e.preventDefault();
                            this.setState({done: true})
                        }}>
                            <h1 style={{fontWeight: '100',margin: '10px 0'}}>Submit Your Details</h1>
                            <div className="form-group flex-v">
                                <label>Enter Your Name</label>
                                <input type="text" className="form-control" placeholder="Enter your Name" />
                            </div>
                            <div className="form-group flex-v">
                                <label>Enter Your Email</label>
                                <input type="text" className="form-control" placeholder="Enter your Email" />
                            </div>
                            <div className="form-group flex-v">
                                <label>Enter Your Phone Number</label>
                                <input type="text" className="form-control" placeholder="Enter your Number" />
                            </div>
                            <div className="form-group flex-v" style={{height: 'auto'}}>
                                <label>Enter Your Qualification</label>
                                <textarea className="form-control" placeholder="Enter your Qualification" rows="4" style={{height: 'auto'}}>

                                </textarea>
                            </div>
                            <input type="submit" className="btn-submit" value="Get Email" />
                        </form>
                    </div>
                    }
                </div>
            </div>
        )
    }
}
export default Career;