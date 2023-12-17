import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import Assignment from "./components/AssignmentPage"
import PacmanLoader from "react-spinners/PacmanLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupLogIn from "./components/SignupLogin";
import SignupPage from "./components/SignupPage";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  };

  return (
    <>
      {showLoader ? (
        <PacmanLoader
          color={"#36D7B7"}
          loading={showLoader}
          size={30}
          className="pacManLoader"
        />
      ) : (
        <Router>
          <div className="app-container">
            <Navigation />
            <Routes>
              <Route path="/task" element={<Container />} />
              <Route path="/task/:id" element={<Assignment />} />
              <Route path="/" element={<SignupLogIn />} />
              <Route
                path="/login"
                element={<LoginPage onLogin={handleLogin} />}
              />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
