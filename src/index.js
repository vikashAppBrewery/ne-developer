import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import Home from "./pages/home/home";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
