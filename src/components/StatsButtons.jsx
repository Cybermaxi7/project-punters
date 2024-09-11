function StatsButtons() {
    return (
      <div className="flex space-x-4 mt-6">
        <button className="bg-customGreen text-gray-700 py-2 px-4 rounded-full">Preview</button>
        <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-full">Match Statistics</button>
        <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-full">Team Statistics</button>
        <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-full">Player Statistics</button>
        <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-full">Odds</button>
      </div>
    );
  }
  
  export default StatsButtons;
  