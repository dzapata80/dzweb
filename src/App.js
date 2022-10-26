import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
      </Router>
    </React.Fragment>
  );
}

export default App;
