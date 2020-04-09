import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Header from "./components/Header";
import Students from "./components/Students";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <Students path="/students" />
      </Router>
    </div>
  );
}

export default App;
