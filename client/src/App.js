import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import Assignment from "./components/AssignmentPage"
import PacmanLoader from "react-spinners/PacmanLoader";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupLogIn from "./components/SignupLogin";
import SignupPage from "./components/SignupPage";
import Members from "./components/Members"

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

  const NavigationWrapper = () => {
    const location = useLocation();

    if (
      location.pathname === "/" ||
      location.pathname === "/signup" ||
      location.pathname === "/login"
    ) {
      return null;
    }

    return <Navigation />;
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
            <NavigationWrapper />
            <Routes>
              <Route path="/task" element={<Container />} />
              <Route path="/task/:id" element={<Assignment />} />
              <Route path="/members" element={<Members />} />
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
