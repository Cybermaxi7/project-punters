import React from "react";
import PredictionCard from "../components/PredictionCard";
import Score from "../components/Score";
import { Link } from "react-router-dom";
import StatsButtons from "../components/StatsButtons";
import germanyFlag from "../assets/germany-flag.svg";
import scotlandFlag from "../assets/scotland-flag.svg";
import preview1 from "../assets/highlight1.svg"
import preview2 from "../assets/highlight2.svg"
import PreviewSection from "../components/PreviewSection";
import MatchOutcome from "../components/MatchOutcome";

const OutcomePage = () => {
  const hightlight1 = preview1;
  const hightlight2 = preview2;

  return (
    <>
      {/* Main container for the match outcome page */}
      <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8">
        {/* Navigation and title section */}
        <div className="flex flex-col md:flex-row justify-around  mb-6 text-gray-600">
          {/* Link to go back to all predictions */}
          <Link
            to="/all-predictions"
            className="font-gilroy flex-shrink-0 text-sm md:text-base lg:text-lg"
          >
            ← Back to all predictions
          </Link>
          {/* Title indicating the teams in the match */}
          <p className="font-gilroy text-sm md:text-base lg:text-lg mx-auto">
            All Predictions {">"}{" "}
            <span className="text-customGreen">Germany v Scotland</span>
          </p>
        </div>

        <MatchOutcome />
        <StatsButtons />
        <PreviewSection hightlight1={hightlight1} hightlight2={hightlight2} />
      </div>
    </>
  );
};

export default OutcomePage;
