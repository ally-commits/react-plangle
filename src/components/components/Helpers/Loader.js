import React from "react";
import loaderImg from "../../img/loader.png";

class Loader extends React.Component {
  state = { i: 0, loaded: false };
  componentWillMount = () => {
    setInterval(() => {
      if (this.state.i <= 100) {
        this.setState({ i: this.state.i + 1 });
      } else {
        this.setState({ loaded: true });
        setTimeout(() => {}, 1200);
      }
    }, 30);
  };
  render() {
    let clsName =
      this.props.done && this.state.loaded
        ? "loading-container flex-h animated fadeOut"
        : "loading-container flex-h animated";
    return (
      <React.Fragment>
        <div
          className={clsName}
          id="content"
          style={{ justifyContent: "center" }}
        >
          <div className="loading-box" id="content">
            <img
              src={loaderImg}
              className="loading-img"
              alt="pangle img loader"
            />
            <div className="loading-span">
              <span
                className="load"
                id="load"
                style={{ width: `${this.state.i - 2}%` }}
              >
                &nbsp;
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Loader;
