import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/index";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          {/* you can only match ONE route inside */}
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/" component={HomePage} />
          {/* take home for anything else */}
          <Route component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;