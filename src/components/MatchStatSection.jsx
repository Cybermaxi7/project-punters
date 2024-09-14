import React from 'react'
import MatchStats from './MatchStats';
import { Link } from 'react-router-dom';
import MatchOutcome from "../components/MatchOutcome";
import StatsButtons from "../components/StatsButtons";


const MatchStatSection = () => {
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
        <MatchStats />
      </div>
    </>
  );
}

export default MatchStatSection