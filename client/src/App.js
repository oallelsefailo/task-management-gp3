import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import Submitter from "./components/Submit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Navigation />}
        <Routes>
          <Route
            path="/task"
            element={
              isLoggedIn ? <Container /> : <LoginPage onLogin={handleLogin} />
            }
          />
          <Route path="/task/submit" element={<Submitter />} />
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
