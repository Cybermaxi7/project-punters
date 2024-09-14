import React from 'react';

const Score = ({ score1, score2, date }) => {
  return (
    <div className="text-center text-[16px] ">
      <div className="flex items-center justify-center space-x-4">
        {/* Score for team 1 */}
        <div className="bg-white text-[24px] font-gilroy text-customGreen px-4 py-2 rounded-md">
          {score1}
        </div>

        {/* Dash between scores */}
        <div className="text-white text-[30px] font-bold">-</div>

        {/* Score for team 2 */}
        <div className="bg-white text-[24px] font-gilroy text-customGreen px-4 py-2 rounded-md">
          {score2}
        </div>
      </div>
      <p className="text-sm text-[11px] mt-2 font-inter">{date}</p>
    </div>
  );
};

export default Score;
