import React from "react";
import LineUp from "./LineUp";

const MatchPreview = ({ hightlight1, hightlight2 }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-md">
      {/* Preview Section */}
      <div className="space-y-4">
        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={hightlight1}
            alt="Germany celebrating"
            className="w-full object-cover rounded-md"
          />
          <img
            src={hightlight2}
            alt="Scotland celebrating"
            className="w-full object-cover rounded-md"
          />
        </div>

        {/* Highlight */}
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Highlight</h3>
          <p>
            Germany will face off against Scotland in a Club Friendlies match at
            12:00:00.
          </p>
        </div>

        {/* Form */}
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Form</h3>
          <p>
            Germany has won three of their last 5 matches while Scotland has won
            2 of their last five matches.
          </p>
        </div>

        {/* Head to Head */}
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Head to Head</h3>
          <p>
            Both teams have played 3 times with Germany winning 3 time(s) in the
            last 3 encounters while Scotland has won 0 time(s) in the last 3
            encounters.
          </p>
        </div>

        {/* Goal Stats */}
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Goal Stats</h3>
          <p>
            Germany has a goal ratio of 1.75 per match while Scotland has a goal
            ratio of 1.35 per match this season. Both teams will be looking to
            improve their form and secure a crucial win in this upcoming clash.
          </p>
        </div>
      </div>

      {/* Lineup section  */}
      <div>
        <LineUp />
      </div>
    </div>
  );
};

export default MatchPreview;
