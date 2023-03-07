import React from "react";
import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { login } from "./components/login";
import { actaSumi } from "./components/actasSuministro";
import { actaSatel } from "./components/actasSatelites";

function App() {
  return (
    // <Router>
    <div>
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/actas/suministro" component={actaSumi} />
        <Route exact path="/actas/satelite" component={actaSatel} />
      </Switch>
    </div>

    // </Router>
  );
}

export default App;
