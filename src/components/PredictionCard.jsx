import React from "react";
import Score from "./Score";
import BallSemi from '../assets/ball-semi.svg'

const PredictionCard = ({ team1, team2 }) => {
  const score1 = 2
  const score2 = 0
  const date = "Thu 4th Jul, 2024 - 20:00 PM";

  return (
    <div className="relative bg-customGreen rounded-lg p-6 text-white">
      {/* Top Ball Icon */}
      <div className="absolute top-0 right-0">
        <img src={BallSemi} alt="ball" className="" />
      </div>

      {/* Bottom Ball Icon */}
      <div className="absolute bottom-0 left-0">
        <img src={BallSemi} alt="ball" className="transform rotate-180" />
      </div>

      <div className="flex justify-around items-center">
        {/* Team 1 Info */}
        <div className="text-center">
          <span className="flex items-center gap-3">
            <img src={team1.flag} alt={team1.name} className="w-9 h-9" />
            <h2 className="text-[30px] font-inter">{team1.name}</h2>
          </span>
          <p className="flex space-x-1 justify-center mt-2 ">
            {team1.results.map((result, index) => (
              <span
                key={index}
                className="bg-white text-customGreen rounded-full w-6 h-6 flex items-center justify-center"
              >
                {result}
              </span>
            ))}
          </p>
        </div>

        {/* Outcome and Score */}
        <div className="text-center">
          <p className="font-inter font-[16px] text-gray-200">POSSIBLE OUTCOME</p>
          <div className=" text-black rounded-md px-4 py-2 mt-2 text-[30px] font-bold">
            <Score score1={score1} score2={score2} date={date} />
          </div>
        </div>

        {/* Team 2 Info */}
        <div className="text-center">
          <span className="flex items-center gap-3">
            <img src={team2.flag} alt={team2.name} className="w-9 h-9" />
            <h2 className="text-[30px] font-inter">{team2.name}</h2>
          </span>
          <p className="flex space-x-1 justify-center mt-2">
            {team2.results.map((result, index) => (
              <span
                key={index}
                className="bg-white text-customGreen rounded-full w-6 h-6 flex items-center justify-center"
              >
                {result}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Full-time Result */}
      <div className="flex justify-center">
        <div className="mt-4 bg-white text-black text-center px-4 py-2 rounded-lg inline-block">
          <p>Full-time Result: 1X</p>
          <p>(70% probability)</p>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;
