import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Search from "./Search";
import Renderer from "./Renderer";
import NoMatch from "./NoMatch";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/tutorial/:name" component={Renderer} />
      <Route exact path="/" component={Search} />
      <Route component={NoMatch} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
