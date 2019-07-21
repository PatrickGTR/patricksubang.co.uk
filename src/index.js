import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Introduction from "./components/Introduction";

const App = () => {
  return (
    <div className="App">
      <Introduction />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
