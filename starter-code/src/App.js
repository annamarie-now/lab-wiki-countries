import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import { Countries } from "./Components/Countries";
import CountryDetails from "./Components/CountryDetails";
import "./App.css";

const NotFound = () => {
  return <div>Page not found</div>;
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Countries />
      <Switch>
        {/* <CountryDetails /> */}
        {/*   <Route path="/Countries" exact component={Countries} /> */}
        <Route exact path="/countries/:id" component={CountryDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
