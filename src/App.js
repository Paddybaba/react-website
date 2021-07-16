import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import TPA from "./TPA";
import Departments from "./Departments";
import OurDoctors from "./Our_Doctors";

import { Switch, Route, Redirect } from "react-router";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/tpa" component={TPA} />
        <Route exact path="/dept" component={Departments} />
        <Route exact path="/doctors" component={OurDoctors} />
        <Redirect to="/" />
      </Switch>
      <h1> Hello World</h1>
    </>
  );
};
export default App;
