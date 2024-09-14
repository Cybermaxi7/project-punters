import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import LandingPage from "./pages/LandingPage";
import AllPredictionsPage from "./pages/AllPredictionsPage";
import OutcomePage from "./pages/OutcomePage";
import GamePage from "./pages/GamePage";
import MatchStatSection from "./components/MatchStatSection";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/all-predictions" element={<AllPredictionsPage />} />
        {/* Game-related routes */}
        <Route path="/game/*" element={<GamePage />} />
        <Route exact path="/match-outcome" element={<OutcomePage />} />
        <Route exact path="/match-statistic" element={<MatchStatSection />} />
      </Routes>
    </Router>
  );
}

export default App;
