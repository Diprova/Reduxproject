import React, { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import PrimaryRoute from "./Route/PrimaryRoute";
import "./App.css";
import Alert from "./PopupContents/Alert";
import { connect } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./Utility/setAuthToken";
import { loadUsers } from "./redux/action/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ alerts }) => {
  useEffect(() => {
    store.dispatch(loadUsers());
  });

  return (
    <div>
      <Header />
      {alerts.length > 0 && <Alert />}
      <PrimaryRoute />
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, null)(App);
