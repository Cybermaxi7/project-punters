import React from 'react';

const Score = ({ score, date }) => {
  return (
    <div className="text-center text-4xl font-bold">
      <p>{score}</p>
      <p className="text-sm mt-2">{date}</p>
    </div>
  );
};

export default Score;
