import React from 'react'
import { Link } from 'react-router-dom'

const PredictionCard = ({team1, team2}) => {
  return (
    <>
        {/* Match info */}
        <div className="flex justify-between items-center">
      {/* Team 1 Info */}
      <div className="text-center">
        <img src={team1.flag} alt={team1.name} className="w-8 h-8 mx-auto"/>
        <h2 className="mt-2 text-xl font-bold">{team1.name}</h2>
        <p className="flex space-x-1 justify-center mt-1">
          {team1.results.map((result, index) => (
            <span key={index}>{result}</span>
          ))}
        </p>
      </div>

      <div className="text-center">
        <p>POSSIBLE OUTCOME</p>
      </div>

      {/* Team 2 Info */}
      <div className="text-center">
        <img src={team2.flag} alt={team2.name} className="w-8 h-8 mx-auto"/>
        <h2 className="mt-2 text-xl font-bold">{team2.name}</h2>
        <p className="flex space-x-1 justify-center mt-1">
          {team2.results.map((result, index) => (
            <span key={index}>{result}</span>
          ))}
        </p>
      </div>
    </div>
    </>
  )
}

export default PredictionCard