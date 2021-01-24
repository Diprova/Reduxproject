import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../RouteComponents/Dashboard";
import Home from "../Components/Home/Home";
import RouteProductDetails from "../RouteComponents/RouteProductDetails";
import Register from "../PopupContents/Register";
import Login from "../PopupContents/Login";
import Payment from "../PopupContents/Payment";

const PrimaryRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route
        exact
        path="/routeProductDetails"
        component={RouteProductDetails}
      />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/payment" component={Payment} />
    </Switch>
  );
};

export default PrimaryRoute;
