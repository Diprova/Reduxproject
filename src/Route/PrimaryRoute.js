import React,{useEffect} from "react";
import { Route, Switch } from "react-router";
import Dashboard from "../RouteComponents/Dashboard";
import Home from "../Components/Home/Home";
import RouteProductDetails from "../RouteComponents/RouteProductDetails";
import "./Route.css";
import { AppConsumer } from "./ContextApi";
import Register from "../PopupContents/Register";
import Login from "../PopupContents/Login";

const PrimaryRoute = () => {


  return (
    <AppConsumer>
      {(context) => (
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home context={context} />}
            />
            <Route
              path="/dashboard"
              component={() => <Dashboard context={context} />}
            />
            <Route
              path="/routeProductDetails"
              component={() => <RouteProductDetails context={context} />}
            />
            <Route
              path="/login"
              component={() => <Login context={context} />}
            />
            <Route
              path="/register"
              component={() => <Register context={context} />}
            />
           
            
          </Switch>
        </div>
      )}
    </AppConsumer>
  );
};

export default PrimaryRoute;
