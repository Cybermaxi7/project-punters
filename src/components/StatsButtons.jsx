import React from "react";
import { PhEyes } from "../assets/eyes.jsx";
import { IcBaselineBarChart } from "../assets/bar.jsx";
import { MdiTrendingUp } from "../assets/trend.jsx";
import { SolarRunningLinear } from "../assets/running.jsx";
import { IconParkOutlineFootball } from "../assets/ball.jsx";
import { Link, useLocation } from "react-router-dom";

function StatsButtons() {
  const location = useLocation(); 

  return (
    <div className="flex flex-wrap gap-1 space-x-4 mt-6">
      {/* Preview Button */}
      <Link to="/match-outcome">
        <span
          className={`flex py-2 px-4 rounded-full ${
            location.pathname === "/match-outcome"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <PhEyes className="w-5 h-5 m-auto mr-2" />
          <button>Preview</button>
        </span>
      </Link>

      {/* Match Statistics Button */}
      <Link to="/match-statistic">
        <span
          className={`flex py-2 px-4 rounded-full ${
            location.pathname === "/match-statistic"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <IcBaselineBarChart className="w-5 h-5 m-auto mr-2" />
          <button>Match Statistics</button>
        </span>
      </Link>

      {/* Team Statistics Button */}
      <Link to="/team-statistic">
        <span
          className={`flex py-2 px-4 rounded-full ${
            location.pathname === "/team-statistic"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <MdiTrendingUp className="w-5 h-5 m-auto mr-2" />
          <button>Team Statistics</button>
        </span>
      </Link>

      {/* Player Statistics Button */}
      <Link to="/player-statistic">
        <span
          className={`flex py-2 px-4 rounded-full ${
            location.pathname === "/player-statistic"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <SolarRunningLinear className="w-5 h-5 m-auto mr-2" />
          <button>Player Statistics</button>
        </span>
      </Link>

      {/* Odds Button */}
      <Link to="/odds">
        <span
          className={`flex py-2 px-4 rounded-full ${
            location.pathname === "/odds"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <IconParkOutlineFootball className="w-5 h-5 m-auto mr-2" />
          <button>Odds</button>
        </span>
      </Link>
    </div>
  );
}

export default StatsButtons;
