import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import LandingPage from "./pages/LandingPage";
import AllPredictionsPage from "./pages/AllPredictionsPage";
import MatchOutcome from "./pages/MatchOutcome";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route
                    exact
                    path="/all-predictions"
                    element={<AllPredictionsPage />}
                />
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
