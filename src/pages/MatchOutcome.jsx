import React from "react";
import PredictionCard from "../components/PredictionCard";
import Score from "../components/Score";
import { Link } from "react-router-dom";
import StatsButtons from "../components/StatsButtons";
import germanyFlag from "../assets/germany-flag.svg";
import scotlandFlag from "../assets/scotland-flag.svg";
import preview1 from "../assets/highlight1.svg"
import preview2 from "../assets/highlight2.svg"
import MatchPreview from "../components/MatchPreview";

const MatchOutcome = () => {
  const team1 = {
    name: "Germany",
    flag: germanyFlag,
    results: ["W", "W", "W", "D"], 
  };

  const team2 = {
    name: "Scotland",
    flag: scotlandFlag,
    results: ["L", "L", "L", "D"], 
  };


  
  const hightlight1 = preview1;
  const hightlight2 = preview2;

  return (
    <>
      {/* Main container for the match outcome page */}
      <div className="min-h-screen bg-white p-4">
        {/* Navigation and title section */}
        <div className="flex justify-around items-center mb-6 text-gray-600">
          {/* Link to go back to all predictions */}
          <Link to="/all-predictions" className="font-gilroy flex-shrink-0">
            ← Back to all predictions
          </Link>
          {/* Title indicating the teams in the match */}
          <p className="font-gilroy mx-auto ">
            All Predictions {">"}{" "}
            <span className="text-customGreen">Germany v Scotland</span>
          </p>
        </div>

        {/* Card displaying the match details */}
        {/* <div className="bg-customGreen rounded-lg p-6 text-white"> */}
          {/* Prediction card component displaying team information */}
          <PredictionCard team1={team1} team2={team2} />

        {/* </div> */}

        {/* Buttons for stats related to the match */}
        <StatsButtons />
        {/* Line-up component for displaying team line-ups */}
        <MatchPreview hightlight1={hightlight1} hightlight2={hightlight2} />
      </div>
    </>
  );
};

export default MatchOutcome;
