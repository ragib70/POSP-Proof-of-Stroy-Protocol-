import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./components/home";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
