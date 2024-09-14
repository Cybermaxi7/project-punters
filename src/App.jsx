import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import LandingPage from "./pages/LandingPage";
import AllPredictionsPage from "./pages/AllPredictionsPage";
import MatchOutcome from "./pages/MatchOutcome";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/all-predictions" element={<AllPredictionsPage />} />
        {/* Game-related routes */}
        <Route path="/game/*" element={<GamePage />} />
                <Route
                    exact
                    path="/match-outcome"
                    element={<MatchOutcome />}
                />
      </Routes>
    </Router>
  );
}

export default App;
