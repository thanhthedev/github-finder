import React from "react";
import "./App.css";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import Notfound from "./components/Notfound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
