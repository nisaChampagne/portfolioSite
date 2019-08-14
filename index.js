

import React from "react";
import ReactDOM from "react-dom";
// import axios from 'axios';
import Nav from './components/nav.js';
import Portfolio from './components/portfolio.js';


import "./style.css";

function App() {
  return (
    <div className="App">
      <h1>Hello web21</h1>
      <Nav />
      <Portfolio />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);