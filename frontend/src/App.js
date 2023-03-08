import React from "react";
import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { ActaSumi } from "./components/ActasSuministro";
import { ActaSatel } from "./components/ActasSatelites";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/actas/suministro" component={ActaSumi} />
        <Route exact path="/actas/satelite" component={ActaSatel} />
      </Switch>
    </div>
  );
}

export default App;
