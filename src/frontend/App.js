import React from "react";
import "./App.css";
import LoginForm from "./LoginForm/LoginForm";
import Typical from "react-typical";

const steps = [
  "DramaFit Studio", 5000
]

function App() {
  return (
    <div className="App">
        <Typical wrapper="span" steps={steps} loop={1} className="header" />
      <LoginForm />
    </div>
  );
}

export default App;
