import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
// import LoginPage from "./components/LoginPage";
import Submitter from "./components/Submit";
import PacmanLoader from "react-spinners/PacmanLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      {loading ? (
        <PacmanLoader
          color={"#36D7B7"}
          loading={loading}
          size={30}
          className="pacManLoader"
        />
      ) : (
        <>
          <Router>
            <div className="app-container">
              <Navigation />
              {/* {isLoggedIn && <Navigation />} */}
              <Routes>
                {/* <Route
                  path="/task"
                  element={
                    isLoggedIn ? (
                      <Container />
                    ) : (
                      <LoginPage onLogin={handleLogin} />
                    )
                  }
                /> */}
                <Route path="/task" element={<Container />} />
                <Route path="/task/submit" element={<Submitter />} />
                {/* <Route path="/" element={<LoginPage onLogin={handleLogin} />} /> */}
              </Routes>
            </div>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
