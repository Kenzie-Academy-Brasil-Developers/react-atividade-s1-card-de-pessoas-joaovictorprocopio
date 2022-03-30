import logo from "./logo.svg";
import "./App.css";
import DevList from "./components/Developer.jsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <DevList name="Victor" age="23" country="Brasil" />
        <DevList name="Gabriel" age="19" country="Brasil" />
        <DevList name="Felipe" age="28" country="Brasil" />
        <DevList name="Mariana" age="24" country="Italia" />
      </header>
    </div>
  );
}

export default App;
