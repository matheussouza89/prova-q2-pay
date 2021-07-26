import React from "react";
import Navbar from "./components/Navbar";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Details from "./views/Details";
import { hot } from 'react-hot-loader/root';
import history from "./util/history";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <div className="body-content">
          <Navbar />
          <Router history={history}>
            <Switch>
              <Route path="/details/:movieId" component={Details}/>
              <Route path="/" component={Home}/>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default hot(App);
