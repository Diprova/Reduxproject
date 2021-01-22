import React, { useEffect, useContext } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import PrimaryRoute from "./Route/PrimaryRoute";
import "./App.css";
import { AppContext } from "./Route/ContextApi";

const App = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    context.loadUser();
  }, []);

  return (
    <>
      <Header />
      <PrimaryRoute />
      <Footer />
    </>
  );
};
export default App;

