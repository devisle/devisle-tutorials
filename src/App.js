import React, { Component } from "react";
import Search from "./Search";
import Renderer from "./Renderer";
import NoMatch from "./NoMatch";
import NewSubmissions from "./NewSubmissions";
import Editor from "./Editor";
import { ApplicationProvider } from "./AppContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: false,
      username: "",
      authenticated: false,
      loginMessage: "Login with Discord",
      updateContext: this.updateContext,
    };
  }

  updateContext = (property, value) => {
    this.setState({
      [property]: value,
    });
  };

  componentDidMount = () => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      this.setState({
        darkMode: true,
      });
    }
  };

  render() {
    return (
      <ApplicationProvider value={this.state}>
        <Router>
          <Switch>
            <Route exact path="/editor" component={Editor} />
            <Route exact path="/new" component={NewSubmissions} />
            <Route exact path="/tutorial/:fileName" component={Renderer} />
            <Route exact path="/" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </ApplicationProvider>
    );
  }
}

export default App;
