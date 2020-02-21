import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./components/Pages/Home";
import ReachUs from "./components/Pages/ReachUs";
import Carrer from "./components/Pages/Career";
import OurProjects from "./components/Pages/OurProjects";
import Team from "./components/Pages/Team";
import News from "./components/Pages/News";
import News2 from "./components/Pages/News2";

import Navbar from "./components/Helpers/Navbar";
import NotFound from "./components/Helpers/NotFound";

import Loader from "./components/Helpers/Loader";

import axios from "axios";
import "./style/loading.css";
import "./style/work.css";
import "./style/team.css";
import "./style/nav.css";
import "./style/news2.css";
import "./style/main.css";
import "./style/career.css";

class App extends React.Component {
  state = {
    done: true,
    data: false,
    none: false
  };
  componentWillMount = () => {
    // axios
    //   .get("api/data")
    //   .then(res => {
    //       this.setState({ done: true, data: res.data });
    setTimeout(() => {
      this.setState({ none: true });
    }, 2000);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  render() {
    return (
      <Fragment>
        {!this.state.none && (
          <div>
            <Loader done={this.state.done} />
            <Loader done={true} />
          </div>
        )}
        {this.state.done && (
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/team" exact render={() => <Team />} />
              <Route
                path="/news"
                exact
                render={() => <News2 value={this.state.data.news} />}
              />
              <Route
                path="/our-projects"
                exact
                render={() => <OurProjects value={this.state.data.projects} />}
              />
              <Route path="/reach-us" exact component={ReachUs} />
              <Route path="/career" exact component={Carrer} />
              <Route path="*" exact component={NotFound} />
            </Switch>
          </Router>
        )}
      </Fragment>
    );
  }
}
export default App;

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
