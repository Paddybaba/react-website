import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "./index.css";
import Home from "./Home";
import Contact from "./Contact";
import TPA from "./TPA";
import About from "./About";
import Departments from "./Departments";
import OurDoctors from "./Our_Doctors";
import Navbar2 from "./Navbar2.js";
import Navbar1 from "./Navbar1.js";
import Navbar3 from "./Navbar3.js";
import Footer from "./Footer";
import Doctors from "./pages/Doctors";
import IVF from "./pages/IVF";
import GeneralSurgery from "./pages/GeneralSurgery";
import Medicine from "./pages/Medicine";
import { Switch, Route, Redirect } from "react-router";
const App = () => {
  return (
    <>
      {/* <Navbar1 /> */}
      <div style={{ position: "sticky", zIndex: 100 }}>
        <Navbar3 />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/tpa" component={TPA} />
        <Route exact path="/dept" component={Departments} />
        <Route exact path="/ourdoctors" component={OurDoctors} />
        <Route exact path="/ivf" component={IVF} />
        <Route exact path="/gensur" component={GeneralSurgery} />
        <Route exact path="/medicine" component={Medicine} />
        <Route exact path="/doctors" component={Doctors} />
        <Redirect to="/" />
      </Switch>
      <Doctors />
      <Footer />
      {/* <h1> Hello World</h1> */}
    </>
  );
};
export default App;
