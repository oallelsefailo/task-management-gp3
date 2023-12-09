import "./App.css";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
