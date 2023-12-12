import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import Submit from "./components/Submit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Submitter from "./components/Submit";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route
            path="/task"
            element={
             <Container />
            }
          />
          <Route
            path="/task/submit"
            element={
             <Submitter />
            }
          />
          {/* <Route path="/" element={<LoginPage onLogin={handleLogin} />} /> */}
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
