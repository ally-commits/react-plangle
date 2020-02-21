import React from "react";
import jQuery from "jquery";

import Prg1 from "../../img/prg1.jpg";
import Prg2 from "../../img/prg2.jpg";
import Prg3 from "../../img/prg2.jpg";

let data = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    fetaured: Prg1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: Prg2
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    fetaured: Prg3
  }
];

let timeout;
let i = 0;

class OurProjects extends React.Component {
  state = {
    prgData: [],
    activeData: [],
    activeState: false
  };
  componentWillMount = () => {
    // this.setState({prgData: this.props.value,activeData: this.props.value[0]})
    this.setState({ prgData: data, activeData: data[0] });
  };
  onScroll = async () => {
    await clearInterval(timeout);
    await setTimeout(async () => {
      timeout = setInterval(async () => {
        i = i + 1;
        var elem = document.getElementById("scroll");
        let width = elem.scrollWidth;
        if (i >= width - 600) {
          i = 0;
          elem.scrollLeft = i;
        } else {
          elem.scrollLeft = i;
        }
      }, 10);
    }, 700);
  };
  onScrollStop = () => {
    clearInterval(timeout);
  };
  closeActive = () => {
    let ele = jQuery("#active-content");
    ele.animate({ opacity: 0 });
    setTimeout(() => {
      this.setState({ activeState: false });
    }, 500);
  };
  render() {
    console.log(this.state);
    return (
      <div className="work-container load-animated flex-v">
        {this.state.activeState && (
          <div
            className="animated-work-fast fadeIn"
            id="active-content"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#161616",
              position: "absolute",
              zIndex: 10
            }}
          >
            <span className="close" onClick={this.closeActive}>
              X
            </span>
            <div className="flex-v mob-container">
              <img
                src={this.state.activeData.featured}
                alt="img"
                className="work-active-img"
              />
              <span
                style={{ width: "550px" }}
                className="work-content-text mob-text"
              >
                {this.state.activeData.description}
              </span>
            </div>
          </div>
        )}
        <div className="work-images animated-work flex-h" id="scroll">
          {this.state.prgData.map(val => {
            return (
              <img
                src={val.featured}
                className="work-img"
                alt="project images"
                key={Math.random()}
                onClick={() => {
                  this.setState({ activeData: val, activeState: true });
                }}
              />
            );
          })}
        </div>
        <div className="work-content animated-work flex-v">
          <span className="work-content-text">
            {this.state.activeData.description.substring(0, 250)}
          </span>
          <span
            className="work-content-text link"
            onClick={() => {
              this.setState({ activeState: true });
            }}
          >
            Read More
          </span>
        </div>
      </div>
    );
  }
}
export default OurProjects;
