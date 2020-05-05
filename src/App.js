import React from "react";

import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Drink from "./pages/Drink";

function App() {
  return (
    <div className="App">
      <header>COCKTAIL EXPLORER</header>
      <nav>
        <ul>
          <NavLink to="/"> Home </NavLink>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:category" component={Category} />
        <Route path="/drink/:idDrink" component={Drink} />
      </Switch>
    </div>
  );
}

export default App;
