

import React from "react";
import ReactDOM from "react-dom";
// import axios from 'axios';
import Portfolio from './components/portfolio.js';
import Body from './components/body.js';
import Footer from './components/footer.js';


import "./style.css";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <Body />
      <Footer/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);