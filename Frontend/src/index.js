import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import Login from "views/Login";
import PrivateRoute from "./components/PrivateRoute";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        <PrivateRoute path='/admin' component={AdminLayout} />
        <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
